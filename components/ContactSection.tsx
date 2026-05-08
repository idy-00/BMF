"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import OpeningStatus from "./OpeningStatus";
import { fadeUp, slideLeft, slideRight, staggerContainer } from "@/lib/motion";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const infoCards = [
  {
    icon: MapPin,
    iconBg: "bg-[#6B4FA0]/20",
    iconColor: "text-[#A688D4]",
    title: "Adresse",
    content: null,
    text: "BMF Dakar — Dakar, Sénégal",
  },
  {
    icon: Clock,
    iconBg: "bg-[#6B4FA0]/20",
    iconColor: "text-[#A688D4]",
    title: "Horaires",
    content: "hours",
    text: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0C0A12] py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4FA0]/60 to-transparent" />
      <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-[#6B4FA0]/12 rounded-full blur-[100px] -translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={staggerContainer}
          className="text-center mb-14"
        >
          <motion.span
            variants={fadeUp}
            custom={0}
            className="inline-block bg-[#6B4FA0]/20 border border-[#8B6FBF]/30 text-[#A688D4] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
          >
            Nous Trouver
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold text-white uppercase">
            Où Sommes-<span className="text-[#A688D4] text-glow">Nous ?</span>
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-[#8B7AB8] mt-4 max-w-xl mx-auto">
            Venez nous rendre visite ou commandez par téléphone. On vous attend chaque soir dès 16h00.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Info column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={staggerContainer}
            className="flex flex-col gap-4"
          >
            {/* Adresse */}
            <motion.div variants={fadeUp} custom={0} className="bg-[#161320] rounded-2xl p-5 border border-[#6B4FA0]/20 flex gap-4 items-start hover:border-[#8B6FBF]/40 transition-colors duration-300">
              <div className="bg-[#6B4FA0]/20 rounded-xl p-3 shrink-0">
                <MapPin className="w-5 h-5 text-[#A688D4]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-1">Adresse</h3>
                <p className="text-[#8B7AB8] text-sm mb-3">BMF Dakar — Dakar, Sénégal</p>
                <a
                  href="https://www.google.com/maps?q=14.7051323,-17.4615378"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="sm"
                    className="bg-[#6B4FA0] hover:bg-[#8B6FBF] text-white rounded-full font-bold text-xs glow-purple-sm transition-all duration-300"
                  >
                    <MapPin className="w-3.5 h-3.5 mr-1.5" />
                    Voir sur Maps
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Horaires */}
            <motion.div variants={fadeUp} custom={1} className="bg-[#161320] rounded-2xl p-5 border border-[#6B4FA0]/20 flex gap-4 items-start hover:border-[#8B6FBF]/40 transition-colors duration-300">
              <div className="bg-[#6B4FA0]/20 rounded-xl p-3 shrink-0">
                <Clock className="w-5 h-5 text-[#A688D4]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-2">Horaires</h3>
                <div className="flex items-center justify-between text-sm mb-3">
                  <span className="text-[#8B7AB8]">Tous les jours</span>
                  <span className="text-white font-semibold">16h00 – tard</span>
                </div>
                <OpeningStatus />
              </div>
            </motion.div>

            {/* Téléphone */}
            <motion.div variants={fadeUp} custom={2} className="bg-[#161320] rounded-2xl p-5 border border-[#6B4FA0]/20 flex gap-4 items-start hover:border-[#8B6FBF]/40 transition-colors duration-300">
              <div className="bg-[#6B4FA0]/20 rounded-xl p-3 shrink-0">
                <Phone className="w-5 h-5 text-[#A688D4]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-3">Nous Contacter</h3>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="tel:+221784513333" className="flex-1">
                    <Button className="w-full bg-[#6B4FA0] hover:bg-[#8B6FBF] text-white rounded-full font-bold glow-purple-sm transition-all duration-300">
                      <Phone className="w-4 h-4 mr-2" />
                      Appeler
                    </Button>
                  </a>
                  <a
                    href="https://wa.me/221784513333?text=Bonjour%20BMF%20Dakar%2C%20je%20souhaite%20passer%20une%20commande..."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-[#6B4FA0]/40 text-[#A688D4] hover:bg-[#6B4FA0]/20 hover:border-[#8B6FBF]/60 rounded-full font-bold transition-all duration-300"
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Instagram */}
            <motion.div
              variants={fadeUp}
              custom={3}
              className="bg-gradient-to-r from-[#6B4FA0]/20 to-[#161320] rounded-2xl p-5 border border-[#8B6FBF]/25 flex gap-4 items-center hover:border-[#8B6FBF]/50 transition-colors duration-300"
            >
              <div className="bg-gradient-to-br from-[#6B4FA0]/40 to-[#8B6FBF]/20 rounded-xl p-3 shrink-0">
                <InstagramIcon className="w-5 h-5 text-[#C4B4E8]" />
              </div>
              <div className="flex-1">
                <h3 className="text-white font-bold text-sm uppercase tracking-wide">Instagram</h3>
                <p className="text-[#8B7AB8] text-xs mt-0.5">Nos dernières créations en photos</p>
              </div>
              <a
                href="https://www.instagram.com/bmfdakar/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="bg-[#6B4FA0] hover:bg-[#8B6FBF] text-white rounded-full font-bold text-xs glow-purple-sm transition-all duration-300"
                >
                  @bmfdakar
                </Button>
              </a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl overflow-hidden border border-[#6B4FA0]/25 h-[480px] relative"
            style={{ boxShadow: "0 0 40px rgba(74,0,130,0.2)" }}
          >
            <div className="absolute inset-0 border-2 border-[#6B4FA0]/10 rounded-2xl pointer-events-none z-10" />
            <iframe
              title="BMF Dakar sur Google Maps"
              src="https://maps.google.com/maps?q=14.7051323,-17.4615378&z=17&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(230deg) saturate(0.8) brightness(0.85)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
