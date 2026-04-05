import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Phone, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { getProductById } from "@/data/products";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const product = getProductById(id || "");

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center bg-background/75 backdrop-blur-[2px] border border-border rounded-sm p-8 shadow-[var(--shadow-soft)]">
          <h1 className="font-serif text-3xl text-foreground mb-4">Producto no encontrado</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="mr-2" size={18} />
            Volver al inicio
          </Button>
        </div>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="bg-background/70 backdrop-blur-[2px] border border-border rounded-sm p-6 md:p-10 shadow-[var(--shadow-soft)]">
          {/* Back button */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={20} />
            <span className="font-sans">Volver</span>
          </motion.button>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Product Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full"
            >
              {product.id === "cama-moderna-duo" ? (
                /* Carousel for Bed */
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-card group">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentImage}
                      src={product.images[currentImage]}
                      alt={`${product.title} - imagen ${currentImage + 1}`}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.4 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  {product.images.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronLeft size={24} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/50 hover:bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                      >
                        <ChevronRight size={24} />
                      </button>

                      {/* Dots/Indicators */}
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                        {product.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImage(idx)}
                            className={`w-2 h-2 rounded-full transition-all ${
                              idx === currentImage ? "bg-accent w-6" : "bg-accent/40"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                /* Vertical List for other products */
                <div className="flex flex-col gap-4">
                  {product.images.map((img, index) => (
                    <div key={index} className="relative overflow-hidden rounded-sm bg-card aspect-[4/5]">
                      <img
                        src={img}
                        alt={`${product.title} - imagen ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <span className="font-sans text-sm tracking-[0.3em] text-accent uppercase">
                {product.category}
              </span>
              
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-2">
                {product.title}
              </h1>

              <p className="font-sans text-muted-foreground mt-6 leading-relaxed text-lg">
                {product.description}
              </p>

              {/* Materials */}
              <div className="mt-8">
                <h3 className="font-sans text-sm tracking-widest text-muted-foreground uppercase mb-3">
                  Materiales
                </h3>
                <div className="flex flex-wrap gap-2">
                  {product.materials.map((material) => (
                    <span
                      key={material}
                      className="px-3 py-1 bg-secondary text-secondary-foreground font-sans text-sm rounded-full"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="mt-6">
                <h3 className="font-sans text-sm tracking-widest text-muted-foreground uppercase mb-2">
                  Dimensiones
                </h3>
                <p className="font-sans text-foreground">{product.dimensions}</p>
              </div>

              {/* Contact buttons */}
              <div className="mt-10 space-y-4">
                <p className="font-sans text-muted-foreground text-sm">
                  ¿Te interesa este producto? Contáctanos para más información y cotización.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="#contacto"
                    onClick={(e) => {
                      e.preventDefault();
                      navigate("/#contacto");
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-4 bg-primary text-primary-foreground font-sans font-medium tracking-wide rounded-sm flex items-center justify-center gap-3 hover:bg-primary/90 transition-colors"
                  >
                    <MessageCircle size={20} />
                    Consultar
                  </motion.a>
                  
                  <motion.a
                    href="tel:+5491234567890"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 py-4 border-2 border-primary text-primary font-sans font-medium tracking-wide rounded-sm flex items-center justify-center gap-3 hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Phone size={20} />
                    Llamar
                  </motion.a>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-3">
                {[
                  "Fabricación a medida disponible",
                  "Garantía de calidad",
                  "Envío a todo el país",
                ].map((feature) => (
                  <div key={feature} className="flex items-center gap-2 text-muted-foreground">
                    <Check size={16} className="text-accent" />
                    <span className="font-sans text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
