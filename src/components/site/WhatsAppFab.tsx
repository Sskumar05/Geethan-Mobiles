import whatsappIcon from "./Whatsapp Icon.png";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/918825622722"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-3 z-40 w-30 h-30 hover:scale-110 transition-transform "
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-full h-full object-contain"
      />
    </a>
  );
}
