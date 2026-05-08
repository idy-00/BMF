"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Gift, Star } from "lucide-react";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const offers = [
  {
    icon: Zap,
    iconColor: "text-yellow-400",
    glowColor: "rgba(234,179,8,0.15)",
    borderColor: "border-yellow-500/20",
    title: "Happy Hour",
    subtitle: "16h00 – 18h00",
    description: "Profitez de -15% sur toute la carte pendant les deux premières heures d'ouverture. Valable chaque jour.",
    tag: "Chaque jour",
  },
  {
    icon: Gift,
    iconColor: "text-[#A688D4]",
    glowColor: "rgba(74,0,130,0.25)",
    borderColor: "border-[#8B6FBF]/30",
    title: "Menu Duo",
    subtitle: "2 Burgers + 2 Boissons",
    description: "Commandez deux burgers de votre choix et obtenez deux canettes offertes. La formule parfaite pour partager.",
    tag: "Best seller",
  },
  {
    icon: Star,
    iconColor: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.12)",
    borderColor: "border-emerald-500/20",
    title: "Carte Fidélité",
    subtitle: "La 5ème commande offerte",
    description: "À chaque commande, vous cumulez un tampon. À la 5ème, votre burger est entièrement offert. Carte disponible au comptoir.",
    tag: "Fidélité",
  },
];

export default function OffresSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="offres" className="bg-[#161320] py-28 relative overflow-hidden">
      {/* Top edge glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4FA0]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#6B4FA0]/40 to-transparent" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#6B4FA0]/15 rounded-full blur-[100px] translate-x-1/2 pointer-events-none" />

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
            Promotions
          </motion.span>
          <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold text-white uppercase">
            Nos <span className="text-[#A688D4] text-glow">Offres</span> Spéciales
          </motion.h2>
          <motion.p variants={fadeUp} custom={2} className="text-[#8B7AB8] mt-4 max-w-xl mx-auto">
            Des deals exclusifs pour nos clients fidèles. Profitez-en chaque soir dès 16h00.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-6"
        >
          {offers.map((offer, i) => {
            const Icon = offer.icon;
            return (
              <motion.div
                key={i}
                variants={scaleIn}
                custom={i}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-2xl border ${offer.borderColor} bg-[#0C0A12]/60 p-7 flex flex-col gap-5 overflow-hidden group`}
                style={{ boxShadow: `0 8px 32px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.03)` }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at top left, ${offer.glowColor}, transparent 70%)` }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                  style={{ background: `${offer.glowColor}`, border: `1px solid ${offer.borderColor}` }}
                >
                  <Icon className={`w-7 h-7 ${offer.iconColor}`} />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="text-white font-black text-xl uppercase">{offer.title}</h3>
                    <span className="text-[9px] font-bold uppercase tracking-widest bg-[#6B4FA0]/30 text-[#A688D4] border border-[#8B6FBF]/30 px-2 py-0.5 rounded-full shrink-0 mt-1">
                      {offer.tag}
                    </span>
                  </div>
                  <p className={`text-sm font-semibold ${offer.iconColor} mb-3`}>{offer.subtitle}</p>
                  <p className="text-[#8B7AB8] text-sm leading-relaxed">{offer.description}</p>
                </div>

                <div className="mt-auto pt-4 border-t border-[#6B4FA0]/20 relative z-10">
                  <a
                    href="tel:+221784513333"
                    className="text-sm font-bold text-[#A688D4] hover:text-[#C4B4E8] transition-colors"
                  >
                    En profiter → +221 78 451 33 33
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
