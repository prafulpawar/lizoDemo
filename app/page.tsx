"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { Check, ArrowRight, Users, Award, Clock, Zap, Shield, MapPin, ArrowUpRight, Sparkles, Heart, Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react"
import Image from "next/image"


import { InteractiveHoverButton } from "@/components/ui/interactive-hover-button"
import { Hero as AnimatedHero } from "@/components/ui/animated-hero"

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  // --- SLIDER STATE ---
  const [currentSlide, setCurrentSlide] = useState(0);

  // --- SLIDER DATA (7 Pairs) ---
const transformations = [
   
    {
      id: 2,
      // Image: Dining room with furniture wrapped in plastic
      // Reason: Wrapped furniture clearly indicates moving
      label: "Move-In / Move-Out Cleaning",
      desc: "Ensure the property is pristine for the next chapter.",
      before: "/Before2.jpeg",
      after: "/After2.jpeg"
    },
    {
      id: 3,
      // Image: Basement with Christmas tree and toys
      // Reason: Shows a "busy family" home environment
      label: "Residential Cleaning",
      desc: "Consistent cleanliness for busy families and professionals.",
      before: "/Before3.jpeg",
      after: "/After3.jpeg"
    },
    {
      id: 4,
      // Image: Bathroom/Bathtub
      // Reason: Bathrooms require detailed attention/scrubbing
      label: "Deep Cleaning",
      desc: "Detailed attention for spring cleaning or special occasions.",
      before: "/Before4.jpeg",
      after: "/After4.jpeg"
    },
    {
      id: 5,
      // Image: Kitchen
      // Reason: A clean kitchen is essential for rentals/turnovers
      label: "Airbnb & Rental Turnover Cleaning",
      desc: "Fast, reliable turnovers to maintain Superhost status.",
      before: "/Before5.jpeg",
      after: "/After5.jpeg"
    },
    {
      id: 6,
      // Image: Empty room with tiled floor
      // Reason: Looks like a space cleared of construction dust/debris
      label: "Post-Renovation",
      desc: "Removing dust and debris so you can enjoy your new space.",
      before: "/Before6.jpeg",
      after: "/After6.jpeg"
    },
    {
      id: 7,
      // Image: Empty room with carpet
      // Reason: Clearly shows carpet flooring
      label: "Carpet Cleaning",
      desc: "Deep cleaning treatments for carpets, rugs, and stains.",
      before: "/Before7.jpeg",
      after: "/After7.jpeg"
    },

     {
      id: 1,
      // Image: Garage & Driveway with items/junk
      // Reason: Fits "Specialty assistance for organization/moving"
      label: "Seasonal & Specialty Services",
      desc: "Specialized assistance for holidays, moving, and organization.",
      before: "/Before1.jpeg",
      after: "/After1.jpeg"
    },
  ];

  // --- SLIDER FUNCTIONS ---
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === transformations.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? transformations.length - 1 : prev - 1));
  };

  useEffect(() => {
    setIsLoaded(true);
    // 100dvh fix for mobile browsers: compute once on mount, only on mobile
    if (typeof window === "undefined") return;
    if (window.innerWidth >= 768) return; // don't lock height on tablet/desktop
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--app-vh", `${vh * 100}px`);
  }, [])

  const services = [
    {
      title: "Home Cleaning",
      emoji: "🏠",
      description: "Regular or one-time cleaning to keep your home fresh, comfortable, and welcoming.",
    },
    {
      title: "Office Cleaning",
      emoji: "🏢",
      description: "A clean workspace that supports focus, productivity, and professionalism.",
    },
    {
      title: "Deep Cleaning",
      emoji: "🧹",
      description: "Perfect for seasonal resets, move-ins, or when your space needs extra care.",
    },
    {
      title: "Rental & Airbnb Turnovers",
      emoji: "🏡",
      description: "Quick, reliable cleanings that help you impress guests and protect your property.",
    },
  ];

  const stats = [
    { number: "500+", label: "Homes Cleaned", icon: Users },
    { number: "4.9★", label: "Average Rating", icon: Award },
    { number: "5 Yrs", label: "Experience", icon: Clock },
  ]

  const serviceAreas = ["Ottawa", "Kanata", "Vanier", "Stittsville",
    "Nepean", "Alta Visa", "Riverside South", "Findlay Creek", "Orleans", "Westboro", "Manotick", "Crystal Beach", "Kanata",
    "Greely", "Barrhaven", "Bells Corners", "Smithfall"]



  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Delays each child animation
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
  };

  // Tablet media query
  const [isTablet, setIsTablet] = useState(false);
  useEffect(() => {
    const checkTablet = () => {
      // Treat most tablets (portrait + landscape) as "tablet" layout
      // Roughly Tailwind sm-lg: from ~small tablets up to small laptops
      setIsTablet(window.innerWidth >= 640 && window.innerWidth < 1200);
    };
    checkTablet();
    window.addEventListener('resize', checkTablet);
    return () => window.removeEventListener('resize', checkTablet);
  }, []);

  return (
    <main className="min-h-screen bg-white">

      <Navbar />

        {/* Tablet-only Hero (with stats, all-in-one) */}
      {isTablet && (
        <section style={{ minHeight: 'calc(var(--app-vh, 100vh))' }} className="pt-20 pb-0 px-6 relative  flex flex-col transition-all duration-1000 overflow-auto">
          <div className="absolute inset-0 z-0" style={{ backgroundImage: "linear-gradient(135deg, rgba(60, 100, 180, 0.08) 0%, rgba(60, 100, 180, 0.04) 100%)" }} />
          <div className="max-w-2xl mx-auto relative z-10 flex flex-col h-full flex-1">
            <div className="flex flex-col flex-1">
              <h1 className="text-5xl font-bold text-foreground mb-2 mt-4"> Welcome to Lizzo Cleaning </h1>
              <h2 className="text-3xl font-medium text-primary mb-2">Where every space feels like home.</h2>
              <p className="text-3xl text-foreground/70 mb-4 leading-relaxed max-w-lg">  We’re a local team passionate about turning your space into a calm, fresh-feeling place to live and work.
                 <br/>
                 Warm, reliable cleaning from a local team who treats your space like their own.
                 <br/>
                 Busy family mornings, last-minute guests, or just some peace of mind we’re here to help.</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center gap-3"><Check size={20} className="text-primary flex-shrink-0" /><span className="text-2xl font-medium text-foreground">Trained, trusted cleaners</span></li>
                <li className="flex items-center gap-3"><Check size={20} className="text-primary flex-shrink-0" /><span className="text-2xl font-medium text-foreground">Flexible scheduling</span></li>
                <li className="flex items-center gap-3"><Check size={20} className="text-primary flex-shrink-0" /><span className="text-2xl font-medium text-foreground">Transparent pricing</span></li>
              </ul>
              <div className="flex flex-row gap-4 mt-6">
                <Link href="/contact" className="w-1/2 px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold inline-flex items-center justify-center gap-2">Book Your Cleaning <ArrowRight size={20} /></Link>
              </div>
              <div className="flex flex-row gap-4 mt-6 mb-4 ">
                <a href="tel:+1 (613) 854-7507" className="w-1/2 px-8 py-3.5 border-2 border-foreground text-foreground rounded-lg hover:bg-foreground/5 transition-all font-semibold inline-flex items-center justify-center gap-2">Call Now</a>
              </div>
            </div>
            {/* Stats Section for tablet at bottom */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-auto mb-8 flex-shrink-0">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-foreground/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Default Hero (mobile/desktop) */}
      {!isTablet && (
      <section
        style={{ minHeight: 'calc(var(--app-vh, 100vh))' }}
        className={`pt-24 pb-0 px-4 sm:px-6 lg:px-8 relative flex flex-col transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}
      >
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(60, 100, 180, 0.08) 0%, rgba(60, 100, 180, 0.04) 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10 flex-1 flex flex-col h-full justify-between">
          {/* Desktop / Tablet hero */}
          <div className="flex flex-col flex-1 sm:grid sm:grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left flex flex-col flex-1 pb-4 sm:pb-0">

              {/* 1. Main Heading */}
              <h1
                className="
            text-4xl
            sm:text-4xl
            md:text-7xl
            lg:text-4xl
            font-bold
            text-foreground
          "
              >
                Welcome to Lizzo Cleaning 
              </h1>

              {/* 2. Slogan */}
              <h2
                className="
            text-md
            sm:text-xl
            md:text-4xl
            lg:text-xl
            font-medium
            text-primary
            mb-4
          "
              >
            Where every space feels like home. 
              </h2>

              {/* 3. Paragraph */}
              <p
                className="
            text-lg
            sm:text-2xl
            md:text-4xl
            lg:text-sm
            text-foreground/70
            mb-5
            leading-relaxed
            max-w-lg
          "
              >
                 We’re a local team passionate about turning your space into a calm, fresh-feeling place to live and work.
                 <br/>
                 Warm, reliable cleaning from a local team who treats your space like their own.
                 Busy family mornings, last-minute guests, or just some peace of mind we’re here to help.
              </p>

              {/* 4. Checklist */}
              <ul
                className="
            space-y-3
            mb-2
            md:mb-6
            xl:mb-9
            2xl:mb-2
          "
              >
                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span
                    className="
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-lg
                font-medium
                text-foreground
              "
                  >
                    Trained, trusted cleaners
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span
                    className="
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-lg
                font-medium
                text-foreground
              "
                  >
                    Flexible scheduling
                  </span>
                </li>

                <li className="flex items-center gap-3">
                  <Check size={20} className="text-primary flex-shrink-0" />
                  <span
                    className="
                text-lg
                sm:text-xl
                md:text-2xl
                lg:text-lg
                font-medium
                text-foreground
              "
                  >
                    Transparent pricing
                  </span>
                </li>
              </ul>

              {/* 5. Buttons */}
              <div
                className="
            flex flex-col
            sm:flex-row
            gap-4
            mt-auto
            sm:mt-16
            md:mt-2
            lg:mt-0
            mb-2
          "
              >
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:shadow-lg font-semibold inline-flex items-center justify-center gap-2"
                >
                  Book Your Cleaning <ArrowRight size={20} />
                </Link>

                <a
                  href="tel:+1 (613) 854-7507"
                  className="px-8 py-3.5 border-2 border-foreground text-foreground rounded-lg hover:bg-foreground/5 transition-all font-semibold inline-flex items-center justify-center gap-2"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Right Side Image */}
            <div className="animate-slide-in-right hidden lg:block">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-3xl blur-3xl" />
                <img
                  src="/professional-cleaning-service-modern-clean.jpg"
                  alt="Professional cleaning team working"
                  className="relative rounded-2xl lg:w-[40%] xl:w-[45%] object-cover shadow-2xl ml-40"
                />
              </div>
            </div>
          </div>

          {/* Stats Secn */}
          <section
            className="
      mt-16
      sm:mt-28
      md:mt-6
      lg:mt-2
      2xl:mt-6
      hidden sm:block
    "
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-4">
                      <Icon size={32} className="text-primary" />
                    </div>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-foreground/70 font-medium">
                      {stat.label}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        </div>
      </section>
      )}

      {/* How It Works - Scroll animated cards */}
      <section className="relative py-14 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">How It Works</h2>
            <p className="text-black-500 text-xl md:text-xl max-w-2xl mx-auto font-medium">How We Make Cleaning Easy for You</p>
            <p className="text-slate-500 text-sm md:text-sm max-w-xl mx-auto font-medium">
              We always arrive on time and treat your home like it’s our own, no corners cut, no surprises.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Tell Us About Your Space",
                desc: "No long forms,  just a few simple details.",
                icon: "📋",
              },
              {
                number: "02",
                title: "Choose the Day & Time You Prefer",
                desc: "One-time or routine visits that fit your schedule.",
                icon: "📅",
              },
              { number: "03", title: "Book & Relax", desc: "We take care of everything  from arrival to spotless finish.", icon: "💳" },
              { number: "04", title: "Enjoy Your Time Back", desc: "Go back to your life while we make your space shine.", icon: "✨" },
            ].map((step, i) => (
              <div
                key={i}
                className="group relative p-6 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1"
              >
                <div className="text-5xl mb-6 grayscale group-hover:grayscale-0 transition-all duration-300 transform group-hover:scale-110 origin-center">
                  {step.icon}
                </div>
                <div className="text-4xl font-extrabold text-blue-900 mb-3 opacity-90 group-hover:opacity-100">
                  {step.number}
                </div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg leading-snug">{step.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="relative py-14 md:py-14 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">We clean so you can focus</h2>
              <p className="text-foreground/60 mb-8 text-lg leading-relaxed">
                Whether it's your home, office, or rental property, Lizzo Cleaning delivers reliable, consistent results
                every time with trained professionals.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Check, text: "Trained, trusted cleaners" },
                  { icon: Zap, text: "Flexible scheduling" },
                  { icon: Shield, text: "Fully bonded & insured" },
                  { icon: Users, text: "Transparent pricing" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 fade-up p-3 rounded-lg hover:bg-primary/10 transition"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <div className="p-2 rounded-lg bg-primary/20">
                      <item.icon className="text-primary" size={20} />
                    </div>
                    <span className="text-foreground font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="scale-in">
              <div className="relative glass rounded-2xl overflow-hidden neon-border neon-glow h-96">
                <img
                  src="/happy-customers-cleaning-service.jpg"
                  alt="Happy customers"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}

      <section className="py-10 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Part 1: Why Lizzo Cleaning */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">

            {/* Left: Copy */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Why Lizzo Cleaning
              </div>

              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Cleaning That Respects <br />
                <span className="text-primary">Your Space and Your Time</span>
              </h2>

              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  We know life gets busy. Cleaning shouldn’t be another source of stress.
                  That’s why our team shows up on time, listens to your needs, and pays
                  attention to the small details that make a big difference.
                </p>
                <p className="font-medium text-slate-900">
                  When you invite us into your space, we treat it with care, respect,
                  and professionalism, every single visit.
                </p>
              </div>
            </div>

            {/* Right: Visual Features (Representing the text) */}
            <div className="grid gap-6">
              {[
                {
                  icon: Clock,
                  title: "Respect for Your Time",
                  desc: "We prioritize punctuality and efficient scheduling."
                },
                {
                  icon: Sparkles,
                  title: "Attention to Detail",
                  desc: "We spot the small things others might miss."
                },
                {
                  icon: Heart,
                  title: "Care & Professionalism",
                  desc: "We treat your home exactly as if it were our own."
                }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-start gap-5 p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:border-primary/20 transition-all duration-300">
                  <div className="p-3 bg-white rounded-lg shadow-sm text-primary">
                    <feature.icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{feature.title}</h4>
                    <p className="text-slate-500 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </section>

      {/* Services Section */}
      <section className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-4">Our Cleaning Services</h2>
            <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
              Simple, reliable cleaning tailored to your space.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                {/* Emoji Icon */}
                <div className="text-4xl mb-4">
                  {service.emoji}
                </div>

                {/* Title */}
                <h3 className="font-bold text-xl mb-2 text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Single-line pointer/description */}
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA under services */}
          <div className="mt-10 flex justify-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-primary font-medium text-sm border-b border-transparent hover:border-primary transition-colors"
            >
              View Full Service Details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>


      {/* --- SECTION 1: Real Results (Before & After) --- */}
      {/* --- SECTION 1: Real Results (Slider) --- */}
     <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">See The Difference</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Real results from real Ottawa homes. Swipe to see how we transform spaces.
            </p>
          </div>

          {/* Slider Container */}
          <div className="relative max-w-5xl mx-auto">

            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="absolute left-0 cursor-pointer top-65 md:top-50 -translate-y-1/2 -translate-x-2 md:-translate-x-12 z-20 bg-white p-2 rounded-full shadow-lg border border-slate-100 text-slate-700 hover:text-primary hover:scale-110 transition-all"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-0 cursor-pointer top-65 md:top-50 -translate-y-1/2 translate-x-2 md:translate-x-12 z-20 bg-white p-2 rounded-full shadow-lg border border-slate-100 text-slate-700 hover:text-primary hover:scale-110 transition-all"
            >
              <ChevronRight size={24} />
            </button>

            {/* Animated Content */}
            <div className="overflow-hidden min-h-[500px] flex items-center justify-center">
              <AnimatePresence mode='wait'>
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col gap-6 w-full"
                >
                  {/* Images Row */}
                  <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">

                    {/* Before Image */}
                    <div className="relative w-full md:w-1/2 group rounded-2xl overflow-hidden shadow-lg">
                      <div className="absolute top-4 left-4 bg-red-500/90 text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-sm backdrop-blur-sm">
                        BEFORE
                      </div>
                      <img
                        src={transformations[currentSlide].before}
                        alt="Before Cleaning"
                        className="w-full h-64 md:h-80 object-cover bg-slate-100"
                      />
                    </div>

                    {/* Arrow (Desktop) */}
                    <div className="hidden md:flex text-primary/30">
                      <ArrowRight size={40} />
                    </div>

                    {/* After Image */}
                    <div className="relative w-full md:w-1/2 group rounded-2xl overflow-hidden shadow-lg border-2 border-primary/20">
                      <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold z-10 shadow-sm backdrop-blur-sm">
                        AFTER
                      </div>
                      <img
                        src={transformations[currentSlide].after}
                        alt="After Cleaning"
                        className="w-full h-64 md:h-80 object-cover bg-slate-100"
                      />
                    </div>
                  </div>

                  {/* Description Text */}
                  <div className="text-center mt-2">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {transformations[currentSlide].label}
                    </h3>
                    <p className="text-lg text-slate-500">
                      {transformations[currentSlide].desc}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Dots Navigation (Indicators) */}
            <div className="flex justify-center gap-2 mt-6">
              {transformations.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-primary w-8" : "bg-slate-300 hover:bg-primary/50"
                    }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>



      <section className="py-8 relative overflow-hidden bg-slate-50/50">

        {/* 1. Modern Grid Background Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

        {/* 2. Soft Gradient Blurs */}
        <div className="absolute left-0 top-0 -ml-[20%] -mt-[10%] w-[50%] h-[50%] rounded-full bg-primary/5 blur-3xl pointer-events-none" />
        <div className="absolute right-0 bottom-0 -mr-[20%] -mb-[10%] w-[50%] h-[50%] rounded-full bg-blue-400/5 blur-3xl pointer-events-none" />

        <div className="container mx-auto px-4 md:px-6 relative z-10">

          {/* Header */}
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-primary text-xs font-bold uppercase tracking-widest shadow-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Service Coverage
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight"
            >
              Bringing the shine to <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">Ottawa & Surroundings</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="text-slate-500 text-lg leading-relaxed"
            >
              From downtown condos to suburban family homes, our mobile team covers the entire National Capital Region.
            </motion.p>
          </div>

          {/* Grid Area */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 max-w-6xl mx-auto"
          >
            {serviceAreas.map((area, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group relative bg-white rounded-xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10 flex flex-col items-center justify-center text-center gap-3">
                  <div className="p-3 bg-slate-50 rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <MapPin size={20} />
                  </div>
                  <span className="font-semibold text-slate-700 group-hover:text-slate-900">{area}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-16 text-center"
          >
            <Link
              href="/about#contact"
              className="inline-flex items-center gap-1 text-slate-500 hover:text-primary transition-colors border-b border-transparent hover:border-primary pb-0.5"
            >
              Check if we cover your specific street <ArrowUpRight size={16} />
            </Link>
          </motion.div>

        </div>
      </section>


      {/* --- SECTION: Social Proof Block (You're in Good Company) --- */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">

        {/* Background Decoration - Subtle */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left Column: Headlines & Stats */}
            <div>
              <p className="text-sm font-semibold text-primary tracking-wide uppercase mb-2">
                What Our Clients Say
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
                You’re in <br />
                <span className="text-primary">Good Company</span>
              </h2>

              <p className="text-slate-600 text-lg mb-10 max-w-md">
                Join the hundreds of Ottawa families and businesses who trust us with their keys and their comfort.
              </p>

              {/* Stats Row */}
              <div className="space-y-6">
                {[
                  { icon: Users, title: "Trusted by Hundreds", sub: "Local families & businesses" },
                  { icon: Award, title: "4.9 Average Rating", sub: "Consistently 5-star service" },
                  { icon: Clock, title: "5+ Years Experience", sub: "Of consistent care" },
                ].map((stat, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="p-3 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:border-primary/30 transition-colors">
                      <stat.icon className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="font-bold text-xl text-slate-900">{stat.title}</p>
                      <p className="text-sm text-slate-500">{stat.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Reviews */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Amanda */}
              <div className="bg-white p-5 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-base text-slate-700 font-medium italic mb-4">
                  "Lizzo Cleaning always goes above and beyond. We come home smiling after every visit!"
                </p>
                <div className="flex justify-between items-end border-t border-slate-100 pt-3">
                  <div>
                    <p className="font-bold text-slate-900">Amanda</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Ottawa Resident</p>
                  </div>
                  <Quote className="text-slate-200" size={28} />
                </div>
              </div>

              {/* Embassy */}
              <div className="bg-white p-5 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 lg:ml-4">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-base text-slate-700 font-medium italic mb-4">
                  "I used them twice for our diplomats arriving and departing cleaning, very good cleaning, amazing team."
                </p>
                <div className="flex justify-between items-end border-t border-slate-100 pt-3">
                  <div>
                    <p className="font-bold text-slate-900">Lesotho Embassy</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Diplomatic Service</p>
                  </div>
                  <Quote className="text-slate-200" size={28} />
                </div>
              </div>

              {/* Sarah */}
              <div className="bg-white p-5 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-base text-slate-700 font-medium italic mb-4">
                  "Lizzo Cleaning, They're reliable, kind, and always do an incredible job."
                </p>
                <div className="flex justify-between items-end border-t border-slate-100 pt-3">
                  <div>
                    <p className="font-bold text-slate-900">Sarah M.</p>
                  </div>
                  <Quote className="text-slate-200" size={28} />
                </div>
              </div>

              {/* James */}
              <div className="bg-white p-5 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 lg:ml-4">
                <div className="flex gap-1 text-yellow-400 mb-3">
                  {[1, 2, 3, 4, 5].map((s) => <Star key={s} size={16} fill="currentColor" />)}
                </div>
                <p className="text-base text-slate-700 font-medium italic mb-4">
                  "We trust them completely with our office space. Professional, friendly, and consistent."
                </p>
                <div className="flex justify-between items-end border-t border-slate-100 pt-3">
                  <div>
                    <p className="font-bold text-slate-900">James R.</p>
                  </div>
                  <Quote className="text-slate-200" size={28} />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side: Typography */}
          <div className="text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              Get a Free Quote <br /> Tell Us Your Cleaning Needs

            </h2>
            <p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
              We make your space feel calm, fresh, and cared for, so you can focus on what matters most.
              Whether it’s your family home, your office, or a rental turnover, our team shows up with care, consistency, and a smile.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-7 py-3.5 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-medium inline-flex items-center gap-2"
              >
                Book Now <ArrowRight size={18} />
              </Link>
              <a
                href="tel:++1 (613) 854-7507"
                className="px-7 py-3.5 text-slate-600 hover:text-primary font-medium transition-colors inline-flex items-center"
              >
                Call us:  +1 (613) 854-7507
              </a>
            </div>
          </div>

          {/* Right Side: Abstract Visual or Stats */}
          <div className="relative bg-slate-50 rounded-2xl p-8 border border-slate-100">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <span className="block text-3xl font-bold text-slate-900 mb-1">100%</span>
                <span className="text-sm text-slate-500">Satisfaction</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <span className="block text-3xl font-bold text-slate-900 mb-1">5★</span>
                <span className="text-sm text-slate-500">Rated Service</span>
              </div>
              <div className="col-span-2 bg-primary/5 p-6 rounded-xl border border-primary/10">
                <p className="text-primary font-medium">"Lizzo Cleaning transformed our office space!"</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}