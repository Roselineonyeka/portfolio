import { motion } from "framer-motion";
const phoneNumber = "2348166644226";
const message =
  "Hi Roseline, I found your portfolio and would like to connect!";
export default function WhatsAppButton() {
  return (
    <motion.a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-[90] flex items-center gap-2 bg-[#25D366] text-white px-4 py-1.5 rounded-full shadow-lg hover:shadow-xl transition-shadow"
    >
      <img
        src="https://cdn.simpleicons.org/whatsapp/ffffff"
        alt="WhatsApp"
        className="w-5 h-4"
      />
      <span className="hidden sm:inline text-sm font-medium">Chat with me</span>
    </motion.a>
  );
}
