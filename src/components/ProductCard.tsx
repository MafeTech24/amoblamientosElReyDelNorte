import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  category: string;
  delay?: number;
}

const CARD_HEIGHT = 340; // px — altura uniforme para todas las cards

export function ProductCard({ id, image, title, category, delay = 0 }: ProductCardProps) {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
      className="group cursor-pointer"
      onClick={() => navigate(`/producto/${id}`)}
    >
      {/* Contenedor de imagen con altura fija */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: `${CARD_HEIGHT}px`,
          overflow: "hidden",
          borderRadius: "2px",
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            transition: "transform 0.7s ease",
          }}
          className="group-hover:scale-110"
        />

        {/* Hover overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "background-color 0.5s",
          }}
          className="bg-espresso/0 group-hover:bg-espresso/40"
        >
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 w-14 h-14 rounded-full bg-accent flex items-center justify-center">
            <ArrowRight className="text-accent-foreground" size={22} />
          </div>
        </div>
      </div>

      {/* Texto debajo de la imagen */}
      <div className="mt-4 space-y-1">
        <span className="font-sans text-xs tracking-widest text-muted-foreground uppercase">
          {category}
        </span>
        <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
          {title}
        </h3>
      </div>
    </motion.div>
  );
}

