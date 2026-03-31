/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, X, ChevronRight, Star, Shield, Clock, 
  CheckCircle, Users, Activity, MapPin, Phone, Mail, 
  ArrowRight, Briefcase, HeartPulse, Building, Check,
  Calendar, DollarSign, Zap
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-teal-500 rounded-xl flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-300">
              <HeartPulse className="w-6 h-6" />
            </div>
            <span className="text-2xl font-extrabold text-slate-900 tracking-tight">Graceful Care.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a href="#facilities" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">For Facilities</a>
            <a href="#professionals" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">For Professionals</a>
            <a href="#locations" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">Locations</a>
            <a href="#about" className="text-sm font-semibold text-slate-600 hover:text-teal-600 transition-colors">About Us</a>
          </nav>

          <div className="hidden lg:flex items-center gap-6">
            <a href="#apply" className="text-sm font-bold text-slate-700 hover:text-teal-600 transition-colors">Apply for Jobs</a>
            <a href="#request" className="px-6 py-3 bg-slate-900 hover:bg-black text-white rounded-full text-sm font-bold transition-all shadow-md hover:shadow-lg">
              Request Staff
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-slate-100 overflow-hidden shadow-xl absolute w-full"
          >
            <div className="flex flex-col px-6 py-8 gap-6">
              <a href="#facilities" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-800">For Facilities</a>
              <a href="#professionals" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-800">For Professionals</a>
              <a href="#locations" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-800">Locations</a>
              <a href="#about" onClick={() => setIsMobileMenuOpen(false)} className="text-lg font-bold text-slate-800">About Us</a>
              <div className="flex flex-col gap-4 mt-4 pt-6 border-t border-slate-100">
                <a href="#apply" className="w-full py-4 text-center border-2 border-slate-200 rounded-full font-bold text-slate-800">Apply for Jobs</a>
                <a href="#request" className="w-full py-4 text-center bg-slate-900 text-white rounded-full font-bold shadow-md">Request Staff</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative pt-40 pb-24 lg:pt-56 lg:pb-32 overflow-hidden bg-white">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative z-10 text-center">
        <motion.div 
          initial={{opacity: 0, y: 20}} 
          animate={{opacity: 1, y: 0}} 
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-50 text-teal-700 font-bold text-xs tracking-widest uppercase mb-8">
            <div className="w-2 h-2 rounded-full bg-teal-500 animate-pulse"></div>
            #1 HEALTHCARE STAFFING IN KANSAS CITY & MISSOURI
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold tracking-tight mb-8 text-slate-900 leading-[1.05]">
            Premium Healthcare <br className="hidden md:block" />
            Staffing, <span className="text-teal-500">Elevated.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Connecting top-tier nursing professionals with leading healthcare facilities across Kansas City and Missouri. Seamless, reliable, and compassionate care on demand.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#request" className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-black text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
              Request Staff Now <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#apply" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border-2 border-slate-200 rounded-full font-bold text-lg transition-all shadow-sm flex items-center justify-center gap-2">
              Apply as a Professional
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const ForFacilities = () => {
  return (
    <section id="facilities" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <span className="text-teal-600 font-bold tracking-widest uppercase text-sm mb-6 block">For Healthcare Facilities</span>
            <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight leading-[1.15]">
              Fill shifts instantly with pre-vetted, reliable professionals.
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Stop worrying about call-outs and staffing shortages. Graceful Care Staffing provides a seamless platform to request RNs, LPNs, and CNAs exactly when you need them.
            </p>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mt-1">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Rigorous Vetting Process</h4>
                  <p className="text-slate-600">Every professional undergoes strict background checks, credential verification, and interviews.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mt-1">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Zero Upfront Costs</h4>
                  <p className="text-slate-600">Only pay for the hours worked. No hidden fees or subscription traps.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-50 flex items-center justify-center text-teal-600 mt-1">
                  <Check className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Dedicated Account Manager</h4>
                  <p className="text-slate-600">Get personalized support from a local Kansas City expert who understands your facility's needs.</p>
                </div>
              </div>
            </div>
            
            <a href="#contact" className="inline-flex items-center gap-2 text-teal-600 font-bold text-lg hover:text-teal-700 transition-colors group">
              Partner with us today <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right Image/Mockup */}
          <motion.div 
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100 relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1000" 
                alt="Healthcare professionals in a meeting" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-slate-100 flex items-center gap-4 z-20">
              <div className="w-14 h-14 bg-teal-500 rounded-full flex items-center justify-center text-white shadow-lg shadow-teal-500/30">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-500 mb-1">Average Fill Time</p>
                <p className="text-2xl font-extrabold text-slate-900">&lt; 2 Hours</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-white border-b border-slate-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white pointer-events-none"></div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.2em] mb-10">Trusted by leading healthcare facilities</p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Placeholder Logos */}
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800 hover:text-indigo-600 transition-colors"><Activity className="w-8 h-8"/> MedCenter</div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800 hover:text-indigo-600 transition-colors"><HeartPulse className="w-8 h-8"/> CarePlus</div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800 hover:text-indigo-600 transition-colors"><Building className="w-8 h-8"/> CityHospital</div>
          <div className="flex items-center gap-2 text-xl font-bold text-slate-800 hover:text-indigo-600 transition-colors"><Shield className="w-8 h-8"/> SafeHealth</div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-5xl mx-auto">
          {[
            { label: 'Shifts Filled', value: '100k+' },
            { label: 'Active Professionals', value: '15,000+' },
            { label: 'Partner Facilities', value: '500+' },
            { label: 'Satisfaction Rate', value: '98%' },
          ].map((stat, i) => (
            <div key={i} className="text-center group">
              <p className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-indigo-600 transition-colors">{stat.value}</p>
              <p className="text-sm font-semibold text-slate-500 tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">How It Works</h2>
          <p className="text-xl text-slate-600 leading-relaxed">A seamless experience designed for both healthcare facilities and professionals.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* For Facilities */}
          <motion.div 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
          >
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-10 shadow-inner">
              <Building className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-8 tracking-tight">For Facilities</h3>
            <div className="space-y-10 relative">
              {/* Connecting Line */}
              <div className="absolute left-6 top-10 bottom-10 w-px bg-slate-100 hidden sm:block"></div>
              
              {[
                { title: 'Post Shifts Instantly', desc: 'Upload your open shifts in seconds using our intuitive dashboard.', icon: Calendar },
                { title: 'Get Matched', desc: 'Our algorithm matches your needs with verified, qualified professionals.', icon: Users },
                { title: 'Fill Positions', desc: 'Review applicants, approve, and get your shifts covered reliably.', icon: CheckCircle },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 relative z-10 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-indigo-600 font-bold border-2 border-indigo-100 shadow-sm group-hover:border-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                    <p className="text-slate-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-12 inline-flex items-center gap-2 text-indigo-600 font-bold hover:text-indigo-700 group">
              Start Hiring <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* For Professionals */}
          <motion.div 
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
            className="bg-slate-900 rounded-3xl p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-slate-800 text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl"></div>
            <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-cyan-400 mb-10 shadow-inner relative z-10 border border-slate-700">
              <Briefcase className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-8 tracking-tight relative z-10">For Professionals</h3>
            <div className="space-y-10 relative z-10">
              {/* Connecting Line */}
              <div className="absolute left-6 top-10 bottom-10 w-px bg-slate-800 hidden sm:block"></div>

              {[
                { title: 'Create Profile', desc: 'Sign up, upload credentials, and get verified quickly.', icon: Shield },
                { title: 'Pick Your Shifts', desc: 'Browse available shifts near you and choose what fits your schedule.', icon: MapPin },
                { title: 'Get Paid Fast', desc: 'Complete your shift and receive competitive pay with quick deposits.', icon: DollarSign },
              ].map((step, i) => (
                <div key={i} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-cyan-400 font-bold border-2 border-slate-700 shadow-sm group-hover:border-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-900 transition-all duration-300">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="#contact" className="mt-12 inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 relative z-10 group">
              Apply Now <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { icon: Clock, title: 'Flexible Scheduling', desc: 'Work when you want, where you want. Total control over your calendar.' },
    { icon: DollarSign, title: 'Competitive Pay', desc: 'Earn top rates in your area with transparent pricing and fast payouts.' },
    { icon: Shield, title: 'Verified Professionals', desc: 'Every professional undergoes rigorous background checks and credential verification.' },
    { icon: Zap, title: 'Fast Onboarding', desc: 'Get approved and start picking up shifts in as little as 48 hours.' },
    { icon: Phone, title: '24/7 Support', desc: 'Our dedicated team is always available to help you with any issues.' },
    { icon: Activity, title: 'Quality Care', desc: 'Ensuring the highest standard of patient care through better staffing.' },
  ];

  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Why Choose Graceful Care?</h2>
          <p className="text-xl text-slate-600 leading-relaxed">We provide the tools and support needed to make healthcare staffing effortless.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              className="p-8 rounded-3xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:border-slate-200 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 mb-6 shadow-sm border border-slate-100 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{benefit.title}</h3>
              <p className="text-slate-600 leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeatureHighlight = () => {
  return (
    <section className="py-32 bg-slate-900 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <div>
            <span className="text-cyan-400 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">The Platform</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              Manage everything from one powerful dashboard.
            </h2>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed">
              Our intuitive platform gives you complete visibility. Track shifts, manage credentials, process payments, and communicate instantly—all in one place.
            </p>
            <ul className="space-y-5 mb-12">
              {['Real-time shift tracking', 'Automated credential management', 'Instant notifications', 'Detailed reporting & analytics'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300 text-lg">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 flex-shrink-0 border border-indigo-500/30">
                    <Check className="w-4 h-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-semibold transition-colors shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] group">
              Explore Platform <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* UI Mockup */}
          <motion.div 
            initial={{opacity: 0, rotateY: 15, x: 30}}
            whileInView={{opacity: 1, rotateY: 0, x: 0}}
            viewport={{once: true}}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative perspective-1000"
          >
            <div className="bg-slate-800/80 backdrop-blur-xl rounded-3xl border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-700">
              {/* Mockup Header */}
              <div className="bg-slate-900/80 px-4 py-4 border-b border-slate-700/50 flex items-center gap-4">
                <div className="flex gap-2">
                  <div className="w-3.5 h-3.5 rounded-full bg-red-500/80 border border-red-500"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-yellow-500/80 border border-yellow-500"></div>
                  <div className="w-3.5 h-3.5 rounded-full bg-green-500/80 border border-green-500"></div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-slate-800/80 text-slate-400 text-xs px-32 py-1.5 rounded-lg border border-slate-700/50 flex items-center gap-2">
                    <Shield className="w-3 h-3" /> dashboard.gracefulcare.com
                  </div>
                </div>
              </div>
              {/* Mockup Body */}
              <div className="p-8 bg-slate-800/50">
                <div className="flex justify-between items-center mb-8">
                  <h4 className="text-white font-bold text-xl tracking-tight">Upcoming Shifts</h4>
                  <button className="text-sm bg-indigo-600 hover:bg-indigo-500 transition-colors text-white px-4 py-2 rounded-lg font-medium shadow-sm">Post New Shift</button>
                </div>
                <div className="space-y-4">
                  {[
                    { role: 'Registered Nurse (RN)', loc: 'City General Hospital', time: 'Tomorrow, 7:00 AM - 7:00 PM', status: 'Filled' },
                    { role: 'Certified Nursing Assistant', loc: 'Sunrise Care Home', time: 'Oct 24, 11:00 PM - 7:00 AM', status: 'Pending' },
                    { role: 'Licensed Practical Nurse', loc: 'Westside Clinic', time: 'Oct 25, 9:00 AM - 5:00 PM', status: 'Filled' },
                  ].map((shift, i) => (
                    <div key={i} className="bg-slate-700/40 hover:bg-slate-700/60 transition-colors p-5 rounded-2xl border border-slate-600/50 flex justify-between items-center group">
                      <div>
                        <p className="text-white font-semibold text-base mb-1.5">{shift.role}</p>
                        <div className="flex items-center gap-4 text-slate-400 text-sm">
                          <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-slate-500"/> {shift.loc}</span>
                          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-500"/> {shift.time}</span>
                        </div>
                      </div>
                      <div className={`px-3 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase ${shift.status === 'Filled' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'}`}>
                        {shift.status}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { quote: "Graceful Care completely transformed how we handle staffing shortages. The quality of professionals is unmatched.", author: "Sarah Jenkins", role: "Director of Nursing, MedCenter KC" },
    { quote: "I love the flexibility. I can pick up shifts when it suits my schedule, and the pay is always prompt.", author: "David Chen", role: "Registered Nurse (RN)" },
    { quote: "The platform is incredibly easy to use. Posting a shift takes seconds, and we usually have it filled within the hour.", author: "Amanda Torres", role: "Facility Administrator" }
  ];

  return (
    <section className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Don't just take our word for it</h2>
          <p className="text-xl text-slate-600 leading-relaxed">Hear from the facilities and professionals who rely on Graceful Care every day.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div 
              key={i} 
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: i * 0.1 }}
              className="bg-white p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 relative"
            >
              <div className="absolute top-8 right-8 text-slate-100 opacity-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M14.017 21L16.41 14.596C16.635 13.987 16.75 13.35 16.75 12.692V3H23V12.692C23 15.688 22.094 18.25 20.282 20.375C18.47 22.5 16.14 23.708 13.292 24L14.017 21ZM3.017 21L5.41 14.596C5.635 13.987 5.75 13.35 5.75 12.692V3H12V12.692C12 15.688 11.094 18.25 9.282 20.375C7.47 22.5 5.14 23.708 2.292 24L3.017 21Z"/></svg>
              </div>
              <div className="flex gap-1 mb-8 relative z-10">
                {[1,2,3,4,5].map(star => <Star key={star} className="w-5 h-5 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-slate-700 text-lg mb-10 flex-grow leading-relaxed relative z-10">"{t.quote}"</p>
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600 font-bold text-xl border border-indigo-100">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-slate-900">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-slate-900"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-600/40 via-transparent to-cyan-500/20"></div>
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl p-10 md:p-16 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Start Staffing Smarter Today</h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of healthcare facilities and professionals who trust Graceful Care Staffing in Kansas City and beyond.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-indigo-600 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]">
              Hire Staff Now
            </a>
            <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white/30 text-white rounded-full font-bold text-lg transition-colors hover:bg-white/10 hover:border-white/50">
              Apply as Professional
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-20 items-center max-w-7xl mx-auto">
          <motion.div 
            initial={{opacity: 0, x: -30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-200 relative shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000" 
                alt="Healthcare professionals working together" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            </div>
            <div className="absolute -bottom-10 -right-10 bg-white/90 backdrop-blur-xl p-8 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white/50 max-w-xs hidden md:block">
              <div className="flex gap-2 mb-4">
                <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600">
                  <HeartPulse className="w-6 h-6" />
                </div>
              </div>
              <p className="font-bold text-slate-900 text-xl mb-2 tracking-tight">Our Mission</p>
              <p className="text-slate-600 leading-relaxed">To empower healthcare professionals and facilities to deliver exceptional care.</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{opacity: 0, x: 30}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}}
            transition={{ type: "spring", stiffness: 80, damping: 20 }}
          >
            <span className="text-indigo-600 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Built by healthcare professionals, for healthcare professionals.
            </h2>
            <p className="text-xl text-slate-600 mb-6 leading-relaxed">
              Rooted in Kansas City, we understand the unique healthcare landscape of Missouri and the Midwest. Graceful Care Staffing was founded with a simple belief: healthcare staffing shouldn't be complicated.
            </p>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
              Today, we connect thousands of verified professionals with top-tier facilities, ensuring that every shift is filled with quality care and every professional has the flexibility they deserve.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-slate-100">
              <div>
                <h4 className="text-5xl font-extrabold text-indigo-600 mb-2 tracking-tight">98%</h4>
                <p className="text-slate-500 font-semibold tracking-wide uppercase text-xs">Shift Fill Rate</p>
              </div>
              <div>
                <h4 className="text-5xl font-extrabold text-cyan-500 mb-2 tracking-tight">24/7</h4>
                <p className="text-slate-500 font-semibold tracking-wide uppercase text-xs">Live Support</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-6xl mx-auto bg-white rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 overflow-hidden flex flex-col lg:flex-row">
          
          {/* Contact Info */}
          <div className="lg:w-2/5 bg-slate-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3"></div>
            
            <div className="relative z-10">
              <h3 className="text-4xl font-extrabold mb-4 tracking-tight">Get in Touch</h3>
              <p className="text-slate-400 mb-12 text-lg">Fill out the form and our team will get back to you within 24 hours.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Call us</p>
                    <p className="font-semibold text-lg">+1 (800) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Email us</p>
                    <p className="font-semibold text-lg">hello@gracefulcare.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400 mb-1">Headquarters</p>
                    <p className="font-semibold text-lg">123 Main St, Kansas City, MO 64105</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-3/5 p-12">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                  <input type="text" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="Doe" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
                <input type="email" className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-900" placeholder="john@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">I am a...</label>
                <div className="relative">
                  <select className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 appearance-none">
                    <option>Healthcare Facility</option>
                    <option>Healthcare Professional</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                <textarea rows={4} className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-600 focus:border-transparent outline-none transition-all bg-slate-50 focus:bg-white text-slate-900 resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg transition-all btn-primary mt-4">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          <div className="col-span-2 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-cyan-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 group-hover:scale-105 transition-transform">
                <HeartPulse className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-slate-900 tracking-tight">Graceful Care</span>
            </a>
            <p className="text-slate-500 mb-8 max-w-sm leading-relaxed">
              Modern healthcare staffing platform connecting facilities with verified professionals. Fast, reliable, and built for care in Kansas City and Missouri.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Platform</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">For Facilities</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">For Professionals</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Pricing</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Log In</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">About Us</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Careers</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-6 tracking-tight">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-slate-500 hover:text-indigo-600 font-medium transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm font-medium">© {new Date().getFullYear()} Graceful Care Staffing. All rights reserved.</p>
          <div className="flex gap-4">
            {/* Social placeholders */}
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-pointer shadow-sm">in</div>
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-pointer shadow-sm">tw</div>
            <div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-500 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 transition-all cursor-pointer shadow-sm">fb</div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FloatingCTA = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <a href="#contact" className="flex items-center justify-center w-14 h-14 bg-indigo-600 text-white rounded-full shadow-[0_4px_14px_0_rgba(79,70,229,0.39)] hover:scale-105 transition-transform">
        <ArrowRight className="w-6 h-6" />
      </a>
    </div>
  );
};

export default function App() {
  return (
    <div className="font-sans text-slate-900 bg-white overflow-x-hidden selection:bg-teal-200 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <ForFacilities />
        <Stats />
        <HowItWorks />
        <Benefits />
        <FeatureHighlight />
        <Testimonials />
        <CTASection />
        <About />
        <Contact />
      </main>
      <Footer />
      <FloatingCTA />
    </div>
  );
}
