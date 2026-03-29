import { motion } from "framer-motion";
import { MessageCircle, Facebook, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/logo.png";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 bg-espresso/80 backdrop-blur-sm text-primary-foreground/80">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="/" className="text-center md:text-left flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img src={logo} alt="Amoblamientos El Rey del Norte" className="h-10 md:h-12 w-auto flex-shrink-0" />
            <div>
              <h3 className="font-serif text-base md:text-xl font-bold text-primary-foreground leading-tight">
                Amoblamientos El Rey del Norte
              </h3>
              <p className="font-sans text-xs md:text-sm text-primary-foreground/60">
                © 2026 Todos los derechos reservados
              </p>
            </div>
          </a>

          <div className="flex items-center gap-6">
            <motion.a
              href="https://wa.me/5493512346427"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <MessageCircle size={18} />
            </motion.a>
            <motion.a
              href="https://www.facebook.com/profile.php?id=100057781384704"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Facebook size={18} />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <Instagram size={18} />
            </motion.a>
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              <ArrowUp size={18} />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
