import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import appHandler from './dist/server/index.js';

const app = new Hono();

// Serve static assets from the client build directory
app.use('/assets/*', serveStatic({ root: './dist/client' }));

// Fallback for other static files at the root (like favicon.ico)
app.use('/*', serveStatic({
  root: './dist/client',
  getContent: async (path, c) => {
    // Return null so it falls through to the SSR handler if the file doesn't exist
    // This allows TanStack Router to handle all non-file routes
    return null;
  }
}));

// Forward all requests to the TanStack Start SSR handler
app.all('*', async (c) => {
  try {
    const env = process.env;
    
    // Cloudflare-style ExecutionContext mock for Node.js
    const executionCtx = {
      waitUntil: (promise) => promise.catch(console.error),
      passThroughOnException: () => {},
    };

    // The fetch handler might be on default or directly on the import
    const handler = appHandler.fetch || appHandler.default?.fetch || appHandler.default;
    
    if (!handler || typeof handler !== 'function') {
      // If handler is an object with fetch method, use that
      if (appHandler.default && typeof appHandler.default.fetch === 'function') {
        return await appHandler.default.fetch(c.req.raw, env, executionCtx);
      }
      console.error("Could not find fetch handler on:", appHandler);
      return c.text("Internal Server Error: Missing handler", 500);
    }
    
    return await handler(c.req.raw, env, executionCtx);
  } catch (error) {
    console.error("SSR error:", error);
    return c.text("Internal Server Error", 500);
  }
});

// Render exposes the PORT environment variable
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
console.log(`Starting server on port ${port}...`);

serve({
  fetch: app.fetch,
  port,
});
