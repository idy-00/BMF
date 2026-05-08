"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlusCircle, Flame } from "lucide-react";
import { categories, menuItems, type MenuItem } from "@/lib/menu-data";
import { fadeUp, scaleIn, staggerContainer } from "@/lib/motion";

const tagStyles: Record<string, string> = {
  Populaire: "bg-[#6B4FA0]/30 text-[#C4B4E8] border-[#8B6FBF]/40",
  Nouveau:   "bg-emerald-500/15 text-emerald-400 border-emerald-500/30",
  Spicy:     "bg-orange-500/15 text-orange-400 border-orange-500/30",
};

function SectionHeader() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      variants={staggerContainer}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="text-center mb-14"
    >
      <motion.span
        variants={fadeUp}
        custom={0}
        className="inline-block bg-[#6B4FA0]/20 border border-[#8B6FBF]/30 text-[#A688D4] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
      >
        Notre Carte
      </motion.span>
      <motion.h2 variants={fadeUp} custom={1} className="text-4xl md:text-5xl font-extrabold text-white uppercase">
        Le Menu <span className="text-[#A688D4] text-glow">BMF</span>
      </motion.h2>
      <motion.p variants={fadeUp} custom={2} className="text-[#8B7AB8] mt-4 max-w-xl mx-auto">
        Des saveurs audacieuses, des portions généreuses. Chaque plat est préparé à la commande.
      </motion.p>
    </motion.div>
  );
}

function MenuCard({ item, index }: { item: MenuItem; index: number }) {
  return (
    <motion.div
      variants={scaleIn}
      custom={index}
      layout
      exit={{ opacity: 0, scale: 0.85, transition: { duration: 0.2 } }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="bg-[#161320] border border-[#6B4FA0]/20 rounded-2xl overflow-hidden group cursor-default"
      style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
    >
      <div className="relative overflow-hidden aspect-video">
        <Image
          src={item.image}
          alt={`${item.name} - Fast Food Dakar`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Purple tint overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0A12]/80 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[#6B4FA0]/0 group-hover:bg-[#6B4FA0]/15 transition-colors duration-500" />

        {item.tag && (
          <div className="absolute top-3 left-3">
            <span className={`text-xs font-bold px-2.5 py-1 rounded-full border backdrop-blur-sm ${tagStyles[item.tag]}`}>
              {item.tag === "Spicy" && <Flame className="w-3 h-3 inline mr-0.5" />}
              {item.tag}
            </span>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-3">
        <div>
          <h3 className="text-white font-bold text-base leading-tight group-hover:text-[#C4B4E8] transition-colors">{item.name}</h3>
          <p className="text-[#8B7AB8] text-sm mt-1 line-clamp-2 leading-relaxed">{item.description}</p>
        </div>
        <div className="flex items-center justify-between mt-auto pt-2 border-t border-[#6B4FA0]/15">
          <span className="text-[#A688D4] font-black text-lg">
            {item.price.toLocaleString("fr-FR")}
            <span className="text-xs font-semibold text-[#8B7AB8] ml-1">FCFA</span>
          </span>
          <a href="tel:+221784513333">
            <motion.button
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.93 }}
              className="bg-[#6B4FA0] hover:bg-[#8B6FBF] text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-200 glow-purple-sm"
              aria-label={`Commander ${item.name}`}
            >
              <PlusCircle className="w-5 h-5" />
            </motion.button>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function MenuSection() {
  const [active, setActive] = useState("Tous");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const filtered = active === "Tous" ? menuItems : menuItems.filter((i) => i.category === active);

  return (
    <section id="menu" className="bg-[#0C0A12] py-28 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#6B4FA0]/8 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader />

        {/* Filters */}
        <div className="flex gap-3 overflow-x-auto pb-2 mb-10 scrollbar-hide justify-start md:justify-center">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActive(cat)}
              whileTap={{ scale: 0.95 }}
              className={`shrink-0 px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 border ${
                active === cat
                  ? "bg-[#6B4FA0] text-white border-[#8B6FBF] glow-purple-sm"
                  : "bg-transparent text-[#8B7AB8] border-[#6B4FA0]/30 hover:border-[#8B6FBF]/50 hover:text-[#C4B4E8]"
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((item, i) => (
              <MenuCard key={item.id} item={item} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-[#8B7AB8] mb-4">Envie de commander ? Appelez-nous directement !</p>
          <a href="tel:+221784513333">
            <Button
              size="lg"
              className="bg-[#6B4FA0] hover:bg-[#8B6FBF] text-white rounded-full font-bold px-10 glow-purple transition-all duration-300"
            >
              Commander au +221 78 451 33 33
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
