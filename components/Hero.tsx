"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown, Star, Clock, MapPin } from "lucide-react";
import OpeningStatus from "./OpeningStatus";
import { fadeUp, slideRight, staggerContainer } from "@/lib/motion";

export default function Hero() {
  const scrollToMenu = () =>
    document.querySelector("#menu")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="accueil"
      className="relative min-h-screen bg-[#0C0A12] flex items-center overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[#6B4FA0]/25 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/3 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#6B4FA0]/15 rounded-full blur-[100px] translate-x-1/3 translate-y-1/4 pointer-events-none" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(#A688D4 1px, transparent 1px), linear-gradient(90deg, #A688D4 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge */}
            <motion.div variants={fadeUp} custom={0} className="flex items-center gap-2 w-fit bg-[#6B4FA0]/20 border border-[#8B6FBF]/30 rounded-full px-4 py-2">
              <Star className="w-4 h-4 text-[#A688D4] fill-[#A688D4]" />
              <span className="text-sm font-semibold text-[#C4B4E8]">4,7 / 5 — Meilleur Fast Food Dakar</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-6xl xl:text-7xl font-extrabold uppercase leading-[1.05] text-white"
            >
              Le Vrai Goût du{" "}
              <span className="text-[#A688D4] text-glow">
                Fast Food
              </span>{" "}
              à Dakar.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-[#C4B4E8]/80 text-lg max-w-lg leading-relaxed"
            >
              Des burgers généreux, préparés avec des ingrédients frais. Livraison rapide ou à
              emporter à Dakar.
            </motion.p>

            {/* Status + Info */}
            <motion.div variants={fadeUp} custom={3} className="flex flex-wrap gap-4 items-center">
              <OpeningStatus />
              <a
                href="https://www.google.com/maps?q=14.7051323,-17.4615378"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#8B7AB8] hover:text-[#A688D4] text-sm transition-colors group"
              >
                <MapPin className="w-4 h-4 text-[#8B6FBF] group-hover:text-[#A688D4] shrink-0 transition-colors" />
                <span className="underline underline-offset-2 decoration-[#6B4FA0]/40">Voir sur Maps</span>
              </a>
              <div className="flex items-center gap-2 text-[#8B7AB8] text-sm">
                <Clock className="w-4 h-4 text-[#8B6FBF] shrink-0" />
                <span>Ouvert dès 16h00</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeUp} custom={4} className="flex flex-wrap gap-4 pt-2">
              <Button
                onClick={scrollToMenu}
                size="lg"
                className="bg-[#6B4FA0] hover:bg-[#8B6FBF] text-white rounded-full font-bold text-base px-8 border border-[#8B6FBF]/50 glow-purple transition-all duration-300"
              >
                Voir le Menu
              </Button>
              <a href="tel:+221784513333">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#6B4FA0]/50 text-[#C4B4E8] hover:bg-[#6B4FA0]/20 hover:border-[#8B6FBF] hover:text-white rounded-full font-bold text-base px-8 transition-all duration-300"
                >
                  Commander → 78 451 33 33
                </Button>
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              variants={fadeUp}
              custom={5}
              className="flex gap-6 pt-4 border-t border-[#6B4FA0]/20"
            >
              {[
                { value: "4.7★", label: "Note Google" },
                { value: "16h+", label: "Ouvert chaque soir" },
                { value: "100%", label: "Ingrédients frais" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-xl font-black text-[#A688D4]">{stat.value}</span>
                  <span className="text-xs text-[#8B7AB8]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — image */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            className="relative flex justify-center items-center"
          >
            {/* Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute w-[420px] h-[420px] rounded-full border border-[#6B4FA0]/20 border-dashed"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[340px] h-[340px] rounded-full border border-[#8B6FBF]/15"
            />

            {/* Glow behind image */}
            <div className="absolute w-72 h-72 bg-[#6B4FA0]/40 rounded-full blur-3xl" />

            {/* Image */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <Image
                src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=900"
                alt="Burger BMF Classique - Fast Food Dakar"
                width={400}
                height={400}
                className="w-72 h-72 md:w-[400px] md:h-[400px] object-cover rounded-full drop-shadow-2xl border-2 border-[#8B6FBF]/30"
                style={{ boxShadow: "0 0 50px rgba(107,79,160,0.4), 0 0 100px rgba(107,79,160,0.15)" }}
                priority
              />
            </motion.div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 6 }}
              transition={{ delay: 0.8, duration: 0.5, type: "spring", stiffness: 200 }}
              className="absolute top-8 right-0 md:right-4 z-20 bg-[#6B4FA0] border border-[#8B6FBF]/50 text-white rounded-2xl px-4 py-2.5 shadow-xl"
              style={{ boxShadow: "0 0 20px rgba(74,0,130,0.6)" }}
            >
              <p className="font-black text-sm uppercase tracking-wide">Fait maison</p>
              <p className="font-semibold text-xs text-[#C4B4E8]">Chaque jour</p>
            </motion.div>

            {/* Second floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ delay: 1.0, duration: 0.5, type: "spring", stiffness: 200 }}
              className="absolute bottom-12 left-0 md:-left-4 z-20 bg-[#161320] border border-[#6B4FA0]/50 text-white rounded-2xl px-4 py-2.5 shadow-xl"
            >
              <p className="font-black text-sm uppercase tracking-wide text-[#A688D4]">Livraison</p>
              <p className="font-semibold text-xs text-[#8B7AB8]">Rapide</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={scrollToMenu}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.5, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[#6B4FA0] hover:text-[#8B6FBF] transition-colors z-10"
        aria-label="Voir le menu"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
