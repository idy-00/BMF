"use client";

import { motion } from "framer-motion";
import { Phone, MapPin, Heart } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/motion";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Le Menu", href: "#menu" },
  { label: "Nos Offres", href: "#offres" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#161320] border-t border-[#6B4FA0]/25 py-14 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4FA0]/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-[#6B4FA0]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-10 mb-10"
        >
          {/* Brand */}
          <motion.div variants={fadeUp} custom={0} className="flex flex-col gap-4">
            <span className="font-black text-2xl tracking-tighter">
              <span className="text-[#A688D4] text-glow">BMF</span>
              <span className="text-white">DAKAR</span>
            </span>
            <p className="text-[#8B7AB8] text-sm leading-relaxed max-w-xs">
              Le meilleur fast food de Dakar. Des burgers faits maison, des saveurs authentiques, un service rapide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/bmfdakar/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram BMF Dakar"
                className="bg-[#6B4FA0]/20 hover:bg-[#6B4FA0]/40 border border-[#6B4FA0]/30 hover:border-[#8B6FBF]/50 rounded-xl p-2.5 transition-all duration-300"
              >
                <InstagramIcon className="w-5 h-5 text-[#C4B4E8]" />
              </a>
              <a
                href="https://wa.me/221784513333"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp BMF Dakar"
                className="bg-[#6B4FA0]/20 hover:bg-[#6B4FA0]/40 border border-[#6B4FA0]/30 hover:border-[#8B6FBF]/50 rounded-xl p-2.5 transition-all duration-300"
              >
                <Phone className="w-5 h-5 text-[#C4B4E8]" />
              </a>
            </div>
          </motion.div>

          {/* Nav */}
          <motion.div variants={fadeUp} custom={1}>
            <h4 className="text-[#A688D4] font-bold text-xs uppercase tracking-widest mb-5">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[#8B7AB8] hover:text-white text-sm transition-colors duration-200 hover:translate-x-1 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={2}>
            <h4 className="text-[#A688D4] font-bold text-xs uppercase tracking-widest mb-5">Infos Pratiques</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-2 text-[#8B7AB8] text-sm">
                <MapPin className="w-4 h-4 text-[#8B6FBF] shrink-0 mt-0.5" />
                BMF Dakar — Dakar, Sénégal
              </li>
              <li className="flex items-center gap-2 text-[#8B7AB8] text-sm">
                <Phone className="w-4 h-4 text-[#8B6FBF] shrink-0" />
                <a href="tel:+221784513333" className="hover:text-white transition-colors">
                  +221 78 451 33 33
                </a>
              </li>
              <li className="text-[#8B7AB8] text-sm pl-6">Ouvert tous les jours dès 16h00</li>
            </ul>
          </motion.div>
        </motion.div>

        <div className="border-t border-[#6B4FA0]/20 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#8B7AB8]/50 text-xs">© {year} BMF Dakar. Tous droits réservés.</p>
          <p className="text-[#8B7AB8]/50 text-xs flex items-center gap-1">
            Fait avec <Heart className="w-3 h-3 text-[#8B6FBF] fill-[#8B6FBF]" /> à Dakar, Sénégal
          </p>
        </div>
      </div>
    </footer>
  );
}
