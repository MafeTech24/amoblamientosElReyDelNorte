import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5493512346427";

export function WhatsAppButton() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.93 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full shadow-xl flex items-center justify-center"
      style={{ backgroundColor: "#D4922A" }}
    >
      <MessageCircle size={30} color="#1a1008" strokeWidth={1.8} />
    </motion.a>
  );
}
