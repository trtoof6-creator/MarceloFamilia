/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  HeartCrack,
  Users,
  Coins,
  FileText,
  FileCheck,
  ShieldCheck,
  Scale,
  Phone,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  Mail,
  MapPin,
  MessageSquare,
  Menu,
  X,
  Award,
  BookOpen
} from "lucide-react";

import {
  AREAS_ATUACAO,
  PASSOS_AJUDA,
  TESTIMONIALS,
  FAQ_ITEMS,
  type AreaAtuacao,
  type StepApoio,
  type Testimonial,
  type FAQItem
} from "./data";

// Asset Imports
// @ts-ignore
import lawyerMarcelo from "./assets/images/lawyer_marcelo_1780795323176.png";
// @ts-ignore
import lawOfficeBg from "./assets/images/law_office_bg_1780795333958.png";

// Icon Lookup map to avoid TS resolution issues
const IconComponents: Record<string, React.ComponentType<any>> = {
  HeartCrack: HeartCrack,
  Users: Users,
  Coins: Coins,
  FileText: FileText,
  FileCheck: FileCheck,
  ShieldCheck: ShieldCheck
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  
  // Contact Form state (highly converting element)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", area: "Divórcio" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Simple reset
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "", area: "Divórcio" });
    }, 4000);
  };

  // WhatsApp click handler
  const triggerWhatsApp = (source: string) => {
    const text = `Ol%C3%A1%2C%2520Dr.%2520Marcelo.%2520Gostaria%2520de%2520agendar%2520uma%2520consulta%2520de%2520Fam%25C3%25ADlia%2520e%2520conversa%2520sobre%2520meu%2520caso%2520(Origem%3A%2520${encodeURIComponent(source)}).`;
    window.open(`https://wa.me/5511998765432?text=${text}`, "_blank");
  };

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Sobre", href: "#sobre" },
    { label: "Áreas de Atuação", href: "#areas" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Depoimentos", href: "#depoimentos" },
    { label: "FAQ", href: "#faq" }
  ];

  // Animation motion presets
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF9] font-sans text-[#2C3E50] antialiased selection:bg-[#E5D5C5] selection:text-[#1B365D]">
      
      {/* HEADER TOP ACCESS BAR */}
      <div className="bg-[#1B365D] text-[#FAF6F0] py-2 px-4 text-[10px] sm:text-xs font-semibold tracking-wide">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2 text-center md:text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C59B27] animate-pulse"></span>
            <span>Atendimento Prioritário em Todo o Brasil • Consultas Presenciais e Online</span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a href="tel:5511998765432" className="flex items-center gap-1.5 hover:text-[#C59B27] transition-colors">
              <Phone className="w-3 h-3" />
              (11) 99876-5432
            </a>
            <button 
              onClick={() => triggerWhatsApp("Barra_Superior")}
              className="flex items-center gap-1.5 cursor-pointer text-[#FAF6F0] hover:text-[#C59B27] transition-colors"
            >
              <MessageSquare className="w-3 h-3 text-[#C59B27]" />
              WhatsApp de Plantão
            </button>
          </div>
        </div>
      </div>

      {/* HEADER MAIN */}
      <header className="sticky top-0 z-50 bg-[#FDFBF9]/95 backdrop-blur-md border-b border-[#EBE5DB] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#inicio" className="flex flex-col select-none group">
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-lg sm:text-2xl font-bold tracking-tight text-[#1B365D]">
                MARCELO
              </span>
              <span className="text-xl font-bold text-[#C59B27]">.</span>
            </div>
            <span className="text-[9px] sm:text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#5C6F84]/90 block leading-tight">
              Direito de Família & Sucessões
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#4E5E6F] hover:text-[#1B365D] tracking-wide transition-colors relative py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#C59B27] transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Call-to-Action Header Buttons */}
          <div className="hidden lg:flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => triggerWhatsApp("Header_Desktop_WhatsApp")}
              id="header_whatsapp_btn"
              className="flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#1B365D] hover:bg-[#152947] text-[#FAF6F0] font-semibold text-sm transition-all shadow-sm duration-300 border border-[#1B365D]"
            >
              <MessageSquare className="w-4 h-4 text-[#C59B27]" />
              Falar pelo WhatsApp
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 text-[#1B365D] hover:text-[#C59B27] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden border-t border-[#EBE5DB] bg-[#FDFBF9] overflow-hidden"
            >
              <div className="px-4 pt-3 pb-5 space-y-2">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-sm text-base font-medium text-[#4E5E6F] hover:text-[#1B365D] hover:bg-[#FAF6F0] transition-all"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 border-t border-[#EBE5DB]">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      triggerWhatsApp("Header_Mobile_WhatsApp");
                    }}
                    className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-[#1B365D] text-[#FAF6F0] font-semibold transition-all hover:bg-[#152947]"
                  >
                    <MessageSquare className="w-5 h-5 text-[#C59B27]" />
                    Falar pelo WhatsApp
                  </button>
                  <a
                    href="tel:5511998765432"
                    className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-sm border border-[#EBE5DB] text-[#1B365D] font-medium hover:bg-[#FAF6F0] transition-all"
                  >
                    <Phone className="w-4 h-4 text-[#5C6F84]" />
                    Ligar para (11) 99876-5432
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="relative py-14 sm:py-16 lg:py-28 overflow-hidden bg-gradient-to-b from-[#FAF6F0] to-[#FDFBF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Column Content */}
            <motion.div 
              className="lg:col-span-7 space-y-5 sm:space-y-6"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6F0] border border-[#EBE5DB]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27]"></span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] font-sans">
                  Direito de Família
                </span>
              </motion.div>

              <motion.h1 
                variants={fadeInUp} 
                className="font-serif text-[2.15rem] sm:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1B365D] leading-[1.15]"
              >
                Orientação jurídica para decisões que impactam sua família.
              </motion.h1>

              <motion.p 
                variants={fadeInUp} 
                className="text-sm sm:text-lg text-[#5C6F84] leading-relaxed max-w-xl"
              >
                Atendimento dedicado para questões familiares, sucessórias e patrimoniais, com clareza, discrição e acompanhamento próximo.
              </motion.p>

              {/* CTA and Benefits */}
              <motion.div variants={fadeInUp} className="pt-4 space-y-4 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
                <button
                  onClick={() => triggerWhatsApp("Hero_Principal_WhatsApp")}
                  id="hero_cta_btn"
                  className="w-full sm:w-auto px-8 py-4 bg-[#1B365D] hover:bg-[#152947] border border-[#1B365D] text-[#FAF6F0] font-bold tracking-wide rounded-sm shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 group"
                >
                  <MessageSquare className="w-5 h-5 text-[#C59B27]" />
                  Falar pelo WhatsApp
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href="#sobre"
                  className="w-full sm:w-auto px-8 py-4 border border-[#E0D9CD] hover:border-[#C59B27] text-[#1B365D] font-semibold rounded-sm tracking-wide text-center block transition-all hover:bg-[#FAF6F0]"
                >
                  Conhecer Trabalho
                </a>
              </motion.div>

              {/* Fine Print Benefits Grid */}
              <motion.div 
                variants={fadeInUp} 
                className="pt-6 sm:pt-8 border-t border-[#EBE5DB] grid grid-cols-1 min-[380px]:grid-cols-3 gap-4"
              >
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1B365D]">100%</h4>
                  <p className="text-xs text-[#5C6F84] font-medium leading-tight">Confidencialidade</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1B365D]">Foco</h4>
                  <p className="text-xs text-[#5C6F84] font-medium leading-tight">Soluções Consensuais</p>
                </div>
                <div>
                  <h4 className="font-serif text-lg font-bold text-[#1B365D]">Rigor</h4>
                  <p className="text-xs text-[#5C6F84] font-medium leading-tight">Técnico Estratégico</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Column Image Container */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative Elements */}
                <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-[#C59B27]/40 pointer-events-none rounded-tl-lg"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-[#1B365D]/30 pointer-events-none rounded-br-lg"></div>
                
                {/* Shadow Glow */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#FAF6F0]/20 to-transparent blur-2xl rounded-2xl"></div>

                {/* Main Hero Background Image */}
                <div className="relative overflow-hidden rounded-md border border-[#E0D9CD] shadow-xl aspect-[4/3] sm:aspect-[16/10] bg-[#FAF6F0]">
                  <img
                    src={lawOfficeBg}
                    alt="Escritório de advocacia elegante e acolhedor"
                    className="w-full h-full object-cover select-none"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Elegant Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B365D]/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Trust Card */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#FDFBF9]/95 backdrop-blur-sm border border-[#E9E1D5] p-3 rounded shadow-md flex items-center gap-3">
                    <div className="p-2 bg-[#EFECE6] rounded text-[#1B365D]">
                      <Scale className="w-5 h-5 text-[#C59B27]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#1B365D] tracking-wide uppercase">Marcelo Advocacia</p>
                      <p className="text-[10px] text-[#5C6F84]">Compreensão técnica e apoio humano</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SOBRE SECTION */}
      <section id="sobre" className="py-14 sm:py-20 lg:py-14 sm:py-20 lg:py-24 bg-[#FDFBF9] border-t border-[#EBE5DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Image Column */}
            <motion.div 
              className="lg:col-span-5 relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative max-w-[280px] sm:max-w-sm mx-auto group">
                {/* Decorative box */}
                <div className="absolute -inset-2 sm:-inset-4 bg-[#FAF6F0] border border-[#EBE5DB] rounded-md -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                
                {/* Image Frame with gold border */}
                <div className="relative rounded bg-[#FDFBF9] p-2 border border-[#E0D9CD] shadow-lg">
                  <img
                    src={lawyerMarcelo}
                    alt="Advogado Marcelo, profissional de direito de família"
                    className="w-full h-auto object-contain rounded select-none filter contrast-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Small gold label overlay */}
                  <div className="absolute bottom-4 right-4 sm:bottom-5 sm:right-5 bg-[#1B365D] text-[#FAF6F0] py-1.5 px-3.5 rounded border border-[#C5A880]/30 shadow-sm">
                    <p className="text-[10px] uppercase font-bold tracking-widest text-[#C0A06D]">OAB Registrada</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Story Column */}
            <motion.div 
              className="lg:col-span-7 space-y-5 sm:space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] font-sans block">
                Sobre o Profissional
              </span>
              
              <h2 className="font-serif text-2xl sm:text-4xl font-semibold tracking-tight text-[#1B365D] leading-tight">
                Atendimento próximo e estratégico
              </h2>

              <div className="h-0.5 w-16 bg-[#C59B27]"></div>

              <div className="space-y-4 text-sm sm:text-base text-[#4E5E6F] leading-relaxed">
                <p className="font-medium text-[#1B365D]">
                  "Acredito que o Direito de Família vai muito além de códigos e processos judiciais. Trata-se de acolher histórias em momentos de transição profunda, buscando segurança jurídica com dignidade."
                </p>
                <p>
                  Sou o <strong>Marcelo</strong>, advogado especializado com sólida vivência prática em solucionar conflitos de natureza familiar e sucessória de forma individualizada. Atuo de forma independente para que cada cliente receba atenção exclusiva, sem repassar sua causa para terceiros ou equipes genéricas.
                </p>
                <p>
                  Minha abordagem une <strong>rigor técnico absoluto</strong> e <strong>sensibilidade humana</strong>. A prioridade máxima é a desjudicialização e a resolução amigável, garantindo acordos ágeis, discretos e que prezem a saúde psicológica da família. Quando a via litigiosa é inevitável, atuo com total combatividade para salvaguardar seus direitos patrimoniais e de convivência.
                </p>
              </div>

              {/* Mini Features/Values list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 sm:pt-4">
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#1B365D]">Atendimento Direto</h4>
                    <p className="text-xs text-[#5C6F84]">Comunicação direta com o Dr. Marcelo por telefone ou WhatsApp.</p>
                  </div>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle className="w-5 h-5 text-[#C59B27] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm text-[#1B365D]">Transparência Total</h4>
                    <p className="text-xs text-[#5C6F84]">Feedback em tempo real das etapas processuais, sem jargões.</p>
                  </div>
                </div>
              </div>

              {/* Visual signature placeholder */}
              <div className="pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif italic text-lg text-[#1B365D] font-medium leading-none">Marcelo Silva de Oliveira</p>
                  <p className="text-[11px] font-medium tracking-wider text-[#5C6F84] uppercase mt-1">OAB/SP nº 432.109 • Especialista em Direito das Famílias</p>
                </div>
                
                {/* Secondary Call to Action to about */}
                <button
                  onClick={() => triggerWhatsApp("Sobre_FALAR_DIRETO")}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-[#C59B27] hover:text-[#1B365D] transition-colors uppercase tracking-[0.1em]"
                >
                  Agendar conversa
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ÁREAS DE ATUAÇÃO SECTION */}
      <section id="areas" className="py-14 sm:py-20 lg:py-24 bg-[#FAF6F0] border-t border-[rgba(197,155,39,0.15)] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header section */}
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] font-sans">
              Especialidades Oferecidas
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#1B365D] leading-tight">
              Direito de Família e Planejamento Sucessório
            </h2>
            <div className="h-0.5 w-16 bg-[#C59B27] mx-auto"></div>
            <p className="text-sm sm:text-base text-[#5C6F84]">
              Soluções sob medida para resguardar as relações humanas e o patrimônio que sua família construiu.
            </p>
          </div>

          {/* Cards Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {AREAS_ATUACAO.map((area, index) => {
              const IconComp = IconComponents[area.iconName] || Scale;
              return (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="group relative bg-[#FDFBF9] hover:bg-[#1B365D] border border-[#E9E1D5] hover:border-[#1B365D] rounded p-5 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <div className="space-y-4">
                    {/* Icon frame */}
                    <div className="w-12 h-12 rounded bg-[#FAF6F0] group-hover:bg-[#FAF6F0]/10 border border-[#E0D9CD] group-hover:border-[#FAF6F0]/20 flex items-center justify-center transition-colors">
                      <IconComp className="w-5 h-5 text-[#C59B27] group-hover:text-[#C5A880]" />
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#1B365D] group-hover:text-[#FAF6F0] transition-colors tracking-tight">
                      {area.title}
                    </h3>

                    <p className="text-sm text-[#4E5E6F] group-hover:text-[#FAF6F0]/85 transition-colors leading-relaxed">
                      {area.description}
                    </p>
                  </div>

                  {/* Footer link in card */}
                  <div className="pt-6 mt-4 border-t border-[#EBE5DB]/60 group-hover:border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#1B365D] group-hover:text-[#C5A880] transition-colors uppercase tracking-wider">
                      Consultar especialista
                    </span>
                    <button 
                      onClick={() => triggerWhatsApp(`Atuacao_Card_${area.title}`)}
                      className="cursor-pointer transition-transform duration-300 group-hover:translate-x-1"
                      aria-label={`Consultar Dr. Marcelo sobre ${area.title}`}
                    >
                      <ArrowRight className="w-4 h-4 text-[#C59B27] group-hover:text-[#FAF6F0]" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Quick Disclaimer Below Actuações */}
          <div className="mt-10 sm:mt-12 text-center p-4 sm:p-5 bg-[#FDFBF9] rounded border border-[#E9E1D5] max-w-2xl mx-auto">
            <p className="text-xs text-[#5C6F84] leading-relaxed">
              <strong>Nota Ética:</strong> Toda nossa atuação jurídica é amparada estritamente pelas disposições do Estatuto da Advocacia e da Ordem dos Advogados do Brasil (Lei nº 8.906/94), resguardando integralmente o sigilo de dados e a ética profissional.
            </p>
          </div>

        </div>
      </section>

      {/* COMO POSSO AJUDAR SECTION */}
      <section id="como-funciona" className="py-14 sm:py-20 lg:py-14 sm:py-20 lg:py-24 bg-[#FDFBF9] border-t border-[#EBE5DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10 sm:mb-16 lg:mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] font-sans block">
              Metodologia de Trabalho
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#1B365D] leading-tight">
              Como posso te ajudar nesse momento?
            </h2>
            <div className="h-0.5 w-16 bg-[#C59B27] mx-auto"></div>
            <p className="text-xs sm:text-sm text-[#5C6F84]">
              Um processo estruturado de forma inteligente para que você tenha total previsibilidade do início ao fim da sua causa.
            </p>
          </div>

          {/* Chain process Timeline of assistance */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 relative">
            
            {/* Visual dashed connector line (desktop-only) */}
            <div className="hidden lg:block absolute top-[4.5rem] left-[10%] right-[10%] h-[1px] border-t border-dashed border-[#E0D9CD]" />

            {PASSOS_AJUDA.map((passo, idx) => (
              <motion.div
                key={passo.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex flex-col items-center text-center p-5 sm:p-6 bg-[#FAF6F0] rounded border border-transparent hover:border-[#E0D9CD] hover:bg-[#FDFBF9] transition-all duration-300"
              >
                {/* Numeric gold marker */}
                <span className="font-serif text-4xl sm:text-5xl font-extrabold text-[#C59B27]/20 select-none block mb-4 group-hover:text-[#C59B27]/40 leading-none">
                  {passo.number}
                </span>

                {/* Badge title */}
                <h3 className="font-serif text-lg font-bold text-[#1B365D] mb-3 leading-snug">
                  {passo.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#4E5E6F] leading-relaxed">
                  {passo.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Prompt consultation Banner */}
          <div className="mt-10 sm:mt-16 bg-[#162942] rounded-md p-6 sm:p-10 text-center text-[#FAF6F0] relative overflow-hidden shadow-lg border border-[#3E5268]">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none select-none">
              {/* Simple grid lines pattern background */}
              <div className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#C5A880]">Atendimento Confidencial</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Deseja que analisemos a sua situação de forma individualizada?
              </h3>
              <p className="text-xs sm:text-sm text-[#9BB1C9] leading-relaxed max-w-xl mx-auto">
                Dê o primeiro passo rumo à segurança jurídica da sua família. Realizaremos um diagnóstico inicial sob rigoroso sigilo.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => triggerWhatsApp("Como_Posso_Ajudar_Banner")}
                  className="px-6 py-3.5 bg-[#FAF6F0] hover:bg-[#FAF6F0]/90 text-[#1B365D] font-bold text-sm tracking-wide uppercase transition-all duration-300 rounded shadow-md hover:scale-[1.01] inline-flex items-center gap-2.5"
                >
                  <MessageSquare className="w-4 h-4 text-[#C59B27]" />
                  Acolher meu caso agora
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="depoimentos" className="py-14 sm:py-20 lg:py-24 bg-[#FAF6F0] border-t border-[#EBE5DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-4 mb-10 sm:mb-16 lg:mb-20">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] font-sans">
              Feedback dos Clientes
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#1B365D] leading-tight">
              O que dizem sobre nossa condução
            </h2>
            <div className="h-0.5 w-16 bg-[#C59B27] mx-auto"></div>
            <p className="text-xs sm:text-sm text-[#5C6F84]">
              A melhor prova do nosso comprometimento é a palavra de quem confiou suas vidas e bens ao nosso trabalho.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">
            {TESTIMONIALS.map((dep, index) => (
              <motion.div
                key={dep.author}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FDFBF9] rounded p-5 sm:p-8 border border-[#E9E1D5] shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div>
                  {/* Decorative quotes */}
                  <span className="font-serif text-5xl text-[#C59B27]/20 leading-none select-none -mt-4 block grow-0">
                    “
                  </span>
                  
                  {/* Testimonial message text */}
                  <p className="text-[#4E5E6F] text-sm leading-relaxed italic mb-6 relative z-10">
                    {dep.text}
                  </p>
                </div>

                {/* Footer section inside review card */}
                <div className="pt-4 border-t border-[#EBE5DB]/60 flex flex-col">
                  <span className="font-serif text-base font-bold text-[#1B365D]">
                    {dep.author}
                  </span>
                  <span className="text-[11px] font-semibold text-[#C59B27] uppercase tracking-wide mt-0.5">
                    {dep.role}
                  </span>
                  <span className="text-[10px] text-[#5C6F84] mt-0.5 font-medium">
                    {dep.location}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-14 sm:py-20 lg:py-14 sm:py-20 lg:py-24 bg-[#FDFBF9] border-t border-[#EBE5DB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          
          <div className="text-center space-y-4 mb-10 sm:mb-16">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] font-sans">
              Dúvidas Comuns
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#1B365D] leading-tight">
              Perguntas Frequentes
            </h2>
            <div className="h-0.5 w-16 bg-[#C59B27] mx-auto"></div>
            <p className="text-xs sm:text-sm text-[#5C6F84]">
              Esclareça de forma rápida alguns dos principais questionamentos legais sobre o Direito de Família e Sucessões.
            </p>
          </div>

          {/* Accordion container */}
          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx}
                  className="border border-[#E9E1D5] bg-[#FDFBF9] rounded transition-all overflow-hidden"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full text-left px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between gap-4 focus:outline-none hover:bg-[#FAF6F0]/40 transition-colors"
                  >
                    <span className="font-serif text-base sm:text-lg font-bold text-[#1B365D]">
                      {faq.question}
                    </span>
                    <span className="text-[#C59B27] shrink-0">
                      {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </span>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-1 text-sm sm:text-base text-[#4E5E6F] leading-relaxed border-t border-[#FAF6F0]">
                          <p>{faq.answer}</p>
                          
                          {/* Inner WhatsApp deep trigger link */}
                          <div className="mt-4 pt-4 border-t border-[#FAF6F0] flex justify-end">
                            <button
                              onClick={() => triggerWhatsApp(`FAQ_Pergunta_${idx + 1}`)}
                              className="text-xs font-bold text-[#1B365D] hover:text-[#C59B27] flex items-center gap-1 uppercase tracking-wider"
                            >
                              Gostaria de falar sobre isso no meu caso
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* DETAILED DOUBLE-COLUMN CONTACT FORM & DETAILS */}
      <section id="contato" className="py-14 sm:py-20 lg:py-24 bg-[#FAF6F0] border-t border-[#EBE5DB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left Column: Direct info & OAB details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C59B27] font-sans">
                  Contato Integrado
                </span>
                <h2 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight text-[#1B365D] leading-tight">
                  Fale diretamente com Marcelo
                </h2>
                <p className="text-sm text-[#5C6F84] leading-relaxed">
                  Para solicitações de consulta, agendamentos urgentes ou dúvidas preliminares, fique à vontade para utilizar os canais oficiais abaixo. Atendemos presencialmente na capital de São Paulo ou virtualmente para todo o território nacional.
                </p>
              </div>

              {/* Contacts blocks */}
              <div className="space-y-4">
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#1B365D] text-[#FAF6F0] rounded">
                    <Phone className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1B365D] uppercase tracking-wider">Telefone Exclusivo</h4>
                    <p className="text-sm font-semibold text-[#4E5E6F] mt-1">(11) 99876-5432</p>
                    <p className="text-xs text-[#5C6F84]">Segunda a Sexta, das 08h30 às 19h00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#1B365D] text-[#FAF6F0] rounded">
                    <Mail className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1B365D] uppercase tracking-wider">Correio Eletrônico</h4>
                    <p className="text-sm font-semibold text-[#4E5E6F] mt-1">marcelo@marceloadvfam.com.br</p>
                    <p className="text-xs text-[#5C6F84]">Feedback em até 1 dia útil</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[#1B365D] text-[#FAF6F0] rounded">
                    <MapPin className="w-5 h-5 text-[#C5A880]" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-sm text-[#1B365D] uppercase tracking-wider">Endereço do Escritório</h4>
                    <p className="text-sm font-semibold text-[#4E5E6F] mt-1">Av. Paulista, 1000, 14º andar</p>
                    <p className="text-xs text-[#5C6F84]">Bela Vista, São Paulo - SP, CEP 01310-100</p>
                    <p className="text-[11px] text-[#C59B27] font-semibold mt-0.5">*(Atendimento apenas mediante agendamento prévio)*</p>
                  </div>
                </div>

              </div>

              {/* Code of Ethics badges */}
              <div className="p-4 bg-[#FDFBF9] rounded border border-[#E9E1D5] space-y-2">
                <span className="text-[10px] uppercase font-bold tracking-[0.15em] text-[#C59B27] block">Garantias</span>
                <p className="text-xs text-[#5C6F84] leading-relaxed">
                  Contrato de prestação de serviços amparado pela tabela oficial de honorários mínimos fixados pela OAB/SP da seccional competente para total segurança do contratante.
                </p>
              </div>
            </div>

            {/* Right Column: Mini Contact request form */}
            <div className="lg:col-span-7 bg-[#FDFBF9] rounded p-5 sm:p-8 border border-[#EBE5DB] shadow-sm">
              <h3 className="font-serif text-lg sm:text-2xl font-bold text-[#1B365D] mb-2 tracking-tight">
                Agendar Pré-Consulta Confidencial
              </h3>
              <p className="text-xs md:text-sm text-[#5C6F84] mb-6">
                Caso prefira, preencha o formulário eletrônico simplificado para que possamos entrar em contato imediatamente por ligação ou mensagem.
              </p>

              {formSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#FAF6F0] border border-[#C5A880] p-6 rounded text-center space-y-4"
                >
                  <CheckCircle className="w-12 h-12 text-[#C59B27] mx-auto animate-bounce" />
                  <h4 className="font-serif text-lg font-bold text-[#1B365D]">Dados Enviados com Sucesso!</h4>
                  <p className="text-xs text-[#5C6F84] max-w-sm mx-auto">
                    O Dr. Marcelo ou seu assessor de agendamento entrará em contato via telefone/WhatsApp nas próximas horas para confirmar o seu horário. Obrigado pela confiança.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form_name" className="block text-xs font-bold text-[#1B365D] uppercase tracking-wider mb-1.5">
                        Nome Completo *
                      </label>
                      <input
                        id="form_name"
                        type="text"
                        required
                        placeholder="Ex: Maria Eduarda Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-white border border-[#E0D9CD] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] text-xs sm:text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="form_phone" className="block text-xs font-bold text-[#1B365D] uppercase tracking-wider mb-1.5">
                        WhatsApp / Celular *
                      </label>
                      <input
                        id="form_phone"
                        type="tel"
                        required
                        placeholder="Ex: (11) 99999-9999"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-white border border-[#E0D9CD] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] text-xs sm:text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="form_email" className="block text-xs font-bold text-[#1B365D] uppercase tracking-wider mb-1.5">
                        E-mail de Contato
                      </label>
                      <input
                        id="form_email"
                        type="email"
                        placeholder="Ex: maria.silva@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-white border border-[#E0D9CD] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] text-xs sm:text-sm transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="form_area" className="block text-xs font-bold text-[#1B365D] uppercase tracking-wider mb-1.5">
                        Assunto Principal *
                      </label>
                      <select
                        id="form_area"
                        value={formData.area}
                        onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                        className="w-full px-4 py-2.5 rounded bg-white border border-[#E0D9CD] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] text-xs sm:text-sm transition-all"
                      >
                        <option value="Divórcio">Divórcio / Dissolução</option>
                        <option value="Guarda dos filhos">Guarda / Convivência Infantil</option>
                        <option value="Pensão alimentícia">Pensão Alimentícia</option>
                        <option value="Inventário">Inventário / Herança</option>
                        <option value="União estável">União Estável ou Contratos</option>
                        <option value="Planejamento patrimonial">Pactos Patrimoniais</option>
                        <option value="Outro assunto">Outro assunto correlato</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="form_msg" className="block text-xs font-bold text-[#1B365D] uppercase tracking-wider mb-1.5">
                      Resumo da sua Dúvida (Opcional)
                    </label>
                    <textarea
                      id="form_msg"
                      rows={4}
                      placeholder="Descreva de forma geral o que descreve seu caso (sem necessidade de dar nomes ou detalhes sensíveis agora)."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded bg-white border border-[#E0D9CD] focus:outline-none focus:border-[#1B365D] focus:ring-1 focus:ring-[#1B365D] text-xs sm:text-sm transition-all"
                    ></textarea>
                  </div>

                  <p className="text-[10px] text-[#5C6F84] leading-relaxed">
                    * Ao enviar seus dados coletados neste formulário, você declara estar de acordo com as regras de confidencialidade estabelecidas pela LGPD para fins estritamente profissionais da consulta jurídica de Marcelo Adv.
                  </p>

                  <button
                    type="submit"
                    id="submit_contact_form"
                    className="w-full py-4 rounded bg-[#1B365D] hover:bg-[#152947] text-[#FAF6F0] font-bold text-xs sm:text-sm tracking-wide uppercase transition-colors shadow-sm focus:outline-none"
                  >
                    Enviar Solicitação Segura
                  </button>
                  
                  <div className="text-center pt-3">
                    <span className="text-xs text-[#5C6F84]">Ou se preferir um retorno instantâneo: </span>
                    <button
                      type="button"
                      onClick={() => triggerWhatsApp("Formulario_Falar_WhatsApp")}
                      className="text-xs font-bold text-[#C59B27] hover:underline hover:text-[#1B365D] tracking-wide"
                    >
                      CHAMAR NO WHATSAPP AGORA
                    </button>
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* FINAL CALL TO ACTION (CTA) SECTION */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#1B365D] text-[#FAF6F0] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#C59B27_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C5A880]">Direito de Família Integrado</span>
          
          <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-white leading-tight">
            Precisa de orientação jurídica?
          </h2>
          
          <p className="text-sm sm:text-base text-[#9BB1C9] leading-relaxed max-w-xl mx-auto">
            Não tome decisões importantes sem o correto amparo legal. Agende agora uma conversa restrita de forma transparente e amigável.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => triggerWhatsApp("FAQ_Section_Urgent_CTA")}
              id="cta_final_whatsapp"
              className="w-full sm:w-auto px-8 py-4 bg-[#FAF6F0] text-[#1B365D] hover:bg-[#F0EAE1] font-bold text-sm tracking-wide uppercase rounded shadow-lg transition-transform duration-300 hover:scale-[1.01] flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-5 h-5 text-[#C59B27]" />
              Falar pelo WhatsApp
            </button>
            <a
              href="mailto:marcelo@marceloadvfam.com.br"
              className="w-full sm:w-auto px-8 py-4 border border-[#FAF6F0]/20 hover:border-[#FAF6F0]/80 text-[#FAF6F0] font-semibold text-sm rounded tracking-wide transition-all uppercase text-center"
            >
              Enviar um E-mail
            </a>
          </div>

          <p className="text-[10px] text-[#9BB1C9] pt-2">
            * Resguardado sob o artigo 7º do Código de Ética e Disciplina da OAB.
          </p>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#12233B] text-[#9BB1C9] pt-12 sm:pt-16 pb-8 border-t border-[#1D324E]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-10 sm:pb-16 border-b border-[#1D324E]">
            
            {/* Logo and brief company disclaimer column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-baseline gap-1 select-none">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-tight text-[#FAF6F0]">
                  MARCELO ADVOCACIA
                </span>
                <span className="text-xl font-bold text-[#C59B27]">.</span>
              </div>
              <p className="text-xs text-[#9BB1C9] leading-relaxed max-w-sm">
                Atuação jurídica especializada voltada a salvaguardar o amparo social, familiar e patrimonial de nossos clientes com máximo sigilo técnico, clareza e dedicação em cada ato.
              </p>
              <p className="text-[10px] font-semibold text-[#C5A880] tracking-wide">
                MARCELO SILVA DE OLIVEIRA • OAB/SP 432.109
              </p>
            </div>

            {/* Quick Links Column */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#FAF6F0] border-l-2 border-[#C59B27] pl-2">
                Navegação
              </h4>
              <ul className="space-y-2 text-xs">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-white transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Address & Quick Contacts Column */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className="font-serif text-xs font-bold uppercase tracking-widest text-[#FAF6F0] border-l-2 border-[#C59B27] pl-2">
                Contato & Atendimentos
              </h4>
              <ul className="space-y-3.5 text-xs">
                <li className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>Central: (11) 99876-5432</span>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#C59B27]" />
                  <span>E-mail: marcelo@marceloadvfam.com.br</span>
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C59B27] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">
                    Av. Paulista, 1000, 14º andar<br />
                    Bela Vista, São Paulo - SP, CEP 01310-100
                  </span>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright, legal disclaimers compliant to Brazilian OAB regulations */}
          <div className="pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-[#5A7394]">
            <div>
              <p>© {new Date().getFullYear()} Marcelo Advocacia de Família. Todos os direitos reservados.</p>
              <p className="mt-1">Inspirado nos preceitos éticos da OAB de dignidade, integridade e combatividade cível.</p>
            </div>
            
            <div className="text-center md:text-right">
              <p>Atuação em conformidade com o Código de Ética e Disciplina da OAB.</p>
              <p className="mt-0.5">Desenvolvido com excelência técnica e visual profissional.</p>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}
