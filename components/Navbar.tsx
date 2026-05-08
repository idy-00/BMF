"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone, X } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Le Menu", href: "#menu" },
  { label: "Nos Offres", href: "#offres" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }, 150);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0C0A12]/90 backdrop-blur-xl border-b border-[#6B4FA0]/30 shadow-[0_4px_30px_rgba(74,0,130,0.2)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#accueil"
          onClick={(e) => { e.preventDefault(); handleNav("#accueil"); }}
          className="font-black text-2xl tracking-tighter"
        >
          <span className="text-[#A688D4] text-glow">BMF</span>
          <span className="text-white">DAKAR</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l, i) => (
            <motion.a
              key={l.href}
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
              className="relative text-[#C4B4E8] hover:text-white font-medium transition-colors text-sm uppercase tracking-widest group"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#8B6FBF] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="hidden md:flex"
        >
          <a href="tel:+221784513333">
            <Button className="bg-[#6B4FA0] hover:bg-[#8B6FBF] text-white rounded-full font-bold px-6 border border-[#8B6FBF]/40 glow-purple-sm transition-all duration-300 hover:glow-purple">
              <Phone className="w-4 h-4 mr-2" />
              Commander
            </Button>
          </a>
        </motion.div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="md:hidden inline-flex items-center justify-center rounded-xl p-2 text-[#C4B4E8] hover:bg-[#6B4FA0]/20 hover:text-white transition-colors border border-[#6B4FA0]/30">
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <X className="w-5 h-5" />
                </motion.span>
              ) : (
                <motion.span key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
                  <Menu className="w-5 h-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </SheetTrigger>
          <SheetContent side="right" className="bg-[#0C0A12] border-l border-[#6B4FA0]/30 w-[300px] p-0">
            <div className="flex flex-col h-full p-6 pt-16">
              <span className="font-black text-2xl tracking-tighter mb-10">
                <span className="text-[#A688D4]">BMF</span>
                <span className="text-white">DAKAR</span>
              </span>
              <nav className="flex flex-col gap-2 flex-1">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: open ? 1 : 0, x: open ? 0 : 24 }}
                    transition={{ delay: i * 0.07, duration: 0.35 }}
                    className="text-[#C4B4E8] hover:text-white hover:bg-[#6B4FA0]/20 font-semibold text-lg uppercase tracking-wide px-4 py-3 rounded-xl transition-all"
                  >
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <a href="tel:+221784513333" className="mt-auto">
                <Button className="w-full bg-[#6B4FA0] hover:bg-[#8B6FBF] text-white rounded-full font-bold glow-purple-sm">
                  <Phone className="w-4 h-4 mr-2" />
                  +221 78 451 33 33
                </Button>
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
