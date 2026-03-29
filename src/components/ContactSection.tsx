import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Llámanos",
    content: "3512 34-6427",
    href: "tel:+5493512346427",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    content: "+54 9 3512 34-6427",
    href: "https://wa.me/5493512346427",
  },
  {
    icon: MapPin,
    title: "Visítanos",
    content: "José Hernández 234, X5145 Juárez Celman, Córdoba, Argentina",
    href: "https://maps.app.goo.gl/AYumfYdnR1G5Tccy8",
  },
  {
    icon: Clock,
    title: "Horario",
    content: "Lun - Vie: 10:00 - 19:00",
  },
];

export function ContactSection() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-primary/70 backdrop-blur-[2px] text-primary-foreground">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left side - Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-sans text-sm tracking-[0.3em] text-accent uppercase">
              Contacto
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mt-4">
              Hablemos de tu
              <br />
              <span className="text-gradient-gold">proyecto ideal</span>
            </h2>
            <p className="font-sans text-primary-foreground/70 mt-6 max-w-md">
              ¿Tienes una idea en mente? Cuéntanos tu visión y crearemos juntos
              el mueble que soñaste.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-10">
              {contactInfo.map((info, index) => {
                const isExternal = info.href?.startsWith("https");
                const CardWrapper = info.href
                  ? ({ children }: { children: React.ReactNode }) => (
                      <a
                        href={info.href}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        {children}
                      </a>
                    )
                  : ({ children }: { children: React.ReactNode }) => (
                      <div className="flex items-start gap-4">{children}</div>
                    );

                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CardWrapper>
                      <div className="w-12 h-12 rounded-sm bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/40 transition-colors">
                        <info.icon className="text-accent" size={22} />
                      </div>
                      <div>
                        <h4 className="font-sans font-medium text-primary-foreground group-hover:text-accent transition-colors">
                          {info.title}
                        </h4>
                        <p className="font-sans text-sm text-primary-foreground/60 mt-1 group-hover:text-accent/80 transition-colors">
                          {info.content}
                        </p>
                      </div>
                    </CardWrapper>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right side - Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-[400px] lg:h-full min-h-[400px] rounded-sm overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.0111502421364!2d-64.16808688960323!3d-31.275786789360048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94329a89578a9a27%3A0xaa047ef478ae222!2zSm9zw6kgSGVybsOhbmRleiAyMzQsIFg1MTQ1IEp1w6FyZXogQ2VsbWFuLCBDw7NyZG9iYQ!5e0!3m2!1ses!2sar!4v1774726584224!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Amoblamientos El Rey del Norte"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
