import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Star, Check, Menu, X } from 'lucide-react';

export default function NorthscaleWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeService, setActiveService] = useState('tiktok');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            NORTHSCALE
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#services" className="hover:text-blue-400 transition">Services</a>
            <a href="#pricing" className="hover:text-blue-400 transition">Priser</a>
            <a href="#portfolio" className="hover:text-blue-400 transition">Cases</a>
            <a href="#contact" className="hover:text-blue-400 transition">Kontakt</a>
            <button className="bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 px-6 py-2 rounded-lg font-semibold transition transform hover:scale-105">
              Book Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-800/95 backdrop-blur-sm border-t border-slate-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#services" className="block hover:text-blue-400">Services</a>
              <a href="#pricing" className="block hover:text-blue-400">Priser</a>
              <a href="#portfolio" className="block hover:text-blue-400">Cases</a>
              <a href="#contact" className="block hover:text-blue-400">Kontakt</a>
              <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 px-6 py-2 rounded-lg font-semibold">
                Book Demo
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              ✨ Fra ide til vækst
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Skaler din forretning med 
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> strategi & design</span>
            </h1>
            
            <p className="text-xl text-slate-300 leading-relaxed">
              Vi hjælper virksomheder med at nå deres målgruppe gennem TikTok-strategi, webdesign og data-drevet marketing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 px-8 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
                Booking Demo <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
              </button>
              <button className="px-8 py-4 rounded-lg font-bold text-lg border-2 border-slate-400 hover:border-blue-400 hover:text-blue-400 transition">
                Se vores work
              </button>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 backdrop-blur-sm">
              <div className="space-y-4">
                <div className="h-3 bg-slate-600 rounded w-3/4"></div>
                <div className="h-3 bg-slate-600 rounded w-full"></div>
                <div className="h-3 bg-slate-600 rounded w-2/3"></div>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-3xl font-bold">300%</div>
                  <div className="text-sm text-slate-400">Vækst i 6 mdr</div>
                </div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-400/10 rounded-lg p-4 border border-blue-500/30">
                  <div className="text-3xl font-bold">2M+</div>
                  <div className="text-sm text-slate-400">Views opnået</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Vores Services</h2>
            <p className="text-xl text-slate-300">To stærke løsninger til at vokse din virksomhed</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1: TikTok Strategy */}
            <div className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-blue-400 transition cursor-pointer"
              onClick={() => setActiveService('tiktok')}>
              <div className="text-5xl mb-4">🎬</div>
              <h3 className="text-2xl font-bold mb-4">TikTok Strategi & Content</h3>
              <p className="text-slate-300 mb-6">
                Vi udvikler en skræddersyet TikTok-strategi for din virksomhed - fra konceptudvikling til produktion, annoncering og optimering.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-200">
                  <Check size={20} className="text-cyan-400" /> Strategi & målgruppe-analyse
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Check size={20} className="text-cyan-400" /> Content-produktion og redigering
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Check size={20} className="text-cyan-400" /> Annonce-setup og optimering
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Check size={20} className="text-cyan-400" /> Løbende growth & data-analyse
                </li>
              </ul>
              
              <p className="text-blue-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition">
                Læs mere <ArrowRight size={18} />
              </p>
            </div>

            {/* Service 2: Webdesign */}
            <div className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-cyan-400 transition cursor-pointer"
              onClick={() => setActiveService('webdesign')}>
              <div className="text-5xl mb-4">🌐</div>
              <h3 className="text-2xl font-bold mb-4">Webdesign & Service</h3>
              <p className="text-slate-300 mb-6">
                Vi bygger professionelle, konverteringsoptimerede hjemmesider for virksomheder uden digitalt tilstedeværelse.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-200">
                  <Check size={20} className="text-cyan-400" /> Custom webdesign (engangsgebyr)
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Check size={20} className="text-cyan-400" /> Vedligeholdelse & support
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Check size={20} className="text-cyan-400" /> SEO-optimering inkluderet
                </li>
                <li className="flex items-center gap-3 text-slate-200">
                  <Check size={20} className="text-cyan-400" /> Månedsgebyr for drift
                </li>
              </ul>
              
              <p className="text-cyan-400 font-semibold flex items-center gap-2 group-hover:gap-3 transition">
                Læs mere <ArrowRight size={18} />
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Sådan arbejder vi</h2>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: 1, title: "Konsultation", desc: "Vi forstår dine mål, målgruppe og budget" },
              { step: 2, title: "Strategi", desc: "Vi udvikler en klar handlingsplan" },
              { step: 3, title: "Execution", desc: "Vi udfører med præcision og kreativitet" },
              { step: 4, title: "Optimering", desc: "Vi måler, analyserer og forbedrer løbende" }
            ].map((item) => (
              <div key={item.step} className="relative">
                {/* Connector line */}
                {item.step < 4 && (
                  <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-transparent"></div>
                )}
                
                <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-xl p-6 border border-slate-600">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-slate-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Simpel Pricing</h2>
          <p className="text-xl text-slate-300 text-center mb-16">Ingen skjulte gebyrer. Transparent og fair.</p>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-blue-400 transition">
              <h3 className="text-2xl font-bold mb-2">Starter</h3>
              <p className="text-slate-400 mb-6">Perfekt til at starte</p>
              <div className="text-4xl font-bold mb-6">2.000 kr<span className="text-lg text-slate-400">/mnd</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-200">
                  <Check size={18} className="text-cyan-400" /> 8 social posts/uge
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <Check size={18} className="text-cyan-400" /> 1 artikel (500 ord)
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <Check size={18} className="text-cyan-400" /> Basis optimering
                </li>
              </ul>

              <button className="w-full bg-slate-600 hover:bg-slate-500 px-6 py-3 rounded-lg font-semibold transition">
                Vælg plan
              </button>
            </div>

            {/* Growth - Featured */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 border-2 border-blue-400 relative transform md:scale-105 md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-400 to-cyan-300 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                POPULÆR
              </div>

              <h3 className="text-2xl font-bold mb-2">Growth</h3>
              <p className="text-blue-100 mb-6">Det bedste valg for de fleste</p>
              <div className="text-4xl font-bold mb-6">4.000 kr<span className="text-lg text-blue-100">/mnd</span></div>
              
              <ul className="space-y-3 mb-8 text-slate-900">
                <li className="flex items-center gap-2 font-semibold">
                  <Check size={18} /> 12 posts/uge + Stories
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <Check size={18} /> 2 artikler + email-kampagne
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <Check size={18} /> Strategi-call 1x/mnd
                </li>
                <li className="flex items-center gap-2 font-semibold">
                  <Check size={18} /> Premium support
                </li>
              </ul>

              <button className="w-full bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition">
                Vælg plan
              </button>
            </div>

            {/* Premium */}
            <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-cyan-400 transition">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-slate-400 mb-6">Fuld service</p>
              <div className="text-4xl font-bold mb-6">6.000 kr<span className="text-lg text-slate-400">/mnd</span></div>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-slate-200">
                  <Check size={18} className="text-cyan-400" /> Alt fra Growth
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <Check size={18} className="text-cyan-400" /> Video produktion
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <Check size={18} className="text-cyan-400" /> Dedicated account manager
                </li>
                <li className="flex items-center gap-2 text-slate-200">
                  <Check size={18} className="text-cyan-400" /> 4 strategi-calls/mnd
                </li>
              </ul>

              <button className="w-full bg-slate-600 hover:bg-slate-500 px-6 py-3 rounded-lg font-semibold transition">
                Vælg plan
              </button>
            </div>
          </div>

          {/* Webdesign Pricing */}
          <div className="mt-16 pt-16 border-t border-slate-700">
            <h3 className="text-3xl font-bold mb-8 text-center">Webdesign Priser</h3>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
                <h4 className="text-xl font-bold mb-2">Setup (Engangsgebyr)</h4>
                <div className="text-3xl font-bold mb-4">5.000 - 15.000 kr</div>
                <p className="text-slate-400 mb-4">Afhænger af complexity</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-cyan-400" /> Custom webdesign
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-cyan-400" /> Mobile-responsive
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-cyan-400" /> SEO-optimeret
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600">
                <h4 className="text-xl font-bold mb-2">Månedlig Service</h4>
                <div className="text-3xl font-bold mb-4">500 - 1.000 kr</div>
                <p className="text-slate-400 mb-4">Vedligeholdelse & support</p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-cyan-400" /> Hosting + SSL
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-cyan-400" /> Backup & sikkerhed
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-cyan-400" /> Support
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio/Cases Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Resultater der taler</h2>
          <p className="text-xl text-slate-300 mb-16">Se hvad vi har skabt for andre virksomheder</p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Fitness Center",
                result: "300% stigning i bookinger",
                time: "6 mdr",
                desc: "TikTok strategi + content produktion"
              },
              {
                name: "E-handel butik",
                result: "2.5M views",
                time: "3 mdr",
                desc: "Viral kampagne med ROI på 500%"
              },
              {
                name: "Restaurantskæne",
                result: "150% flere reservationer",
                time: "4 mdr",
                desc: "Lokalt TikTok-fokus + webdesign"
              }
            ].map((item, idx) => (
              <div key={idx} className="group bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-8 border border-slate-600 hover:border-blue-400 transition overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-cyan-400/0 group-hover:from-blue-500/10 group-hover:to-cyan-400/10 transition duration-500"></div>
                <div className="relative">
                  <div className="flex items-baseline gap-2 mb-2">
                    <div className="text-4xl font-bold text-cyan-400">{item.result}</div>
                  </div>
                  <p className="text-slate-400 text-sm mb-4">i løbet af {item.time}</p>
                  <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                  <p className="text-slate-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 border-y border-slate-700">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Det siger vores kunder</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Valdemar Nørgaard",
                title: "Partner",
                text: "Northscale forstod vores vision fra dag et. Resultatet var en TikTok-strategi der genuint skalerede vores forretning.",
                stars: 5
              },
              {
                name: "Matti Byrgesen Hansen",
                title: "Partner",
                text: "Professionelle, responsive og altid data-drevet. De blev hurtigt en vigtig del af vores vækstteam.",
                stars: 5
              },
              {
                name: "Benjamin Møltorp",
                title: "Partner",
                text: "Fra strategi til execution - de håndterer alt med høj kvalitet. Kan kun anbefale dem varmt.",
                stars: 5
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-xl p-6 border border-slate-600">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.stars)].map((_, i) => (
                    <Star key={i} size={18} fill="#cyan" className="text-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-200 mb-6 italic">"{item.text}"</p>
                <div>
                  <p className="font-bold">{item.name}</p>
                  <p className="text-sm text-slate-400">{item.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Klar til at vokse?</h2>
          <p className="text-xl text-slate-300 mb-12">
            Lad os hjælpe dig med at nå dine mål gennem strategi, design og data-drevne resultater.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 px-10 py-4 rounded-lg font-bold text-lg transition transform hover:scale-105 flex items-center justify-center gap-2">
              Book en gratis konsultation <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
          </div>

          <div className="mt-12 grid md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-slate-400 mb-2">Email</p>
              <p className="font-semibold">agency@northscale.eu</p>
            </div>
            <div>
              <p className="text-slate-400 mb-2">Telefon</p>
              <p className="font-semibold">+45 42 73 96 00</p>
            </div>
            <div>
              <p className="text-slate-400 mb-2">Location</p>
              <p className="font-semibold">Aalborg, Danmark</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-700 bg-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <p className="font-bold text-lg mb-2">NORTHSCALE</p>
              <p className="text-slate-400 text-sm">Vækst gennem strategi og kreativitet</p>
            </div>
            <div>
              <p className="font-semibold mb-4">Services</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400">TikTok Strategi</a></li>
                <li><a href="#" className="hover:text-blue-400">Webdesign</a></li>
                <li><a href="#" className="hover:text-blue-400">Content Produktion</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Virksomhed</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400">Om os</a></li>
                <li><a href="#" className="hover:text-blue-400">Cases</a></li>
                <li><a href="#" className="hover:text-blue-400">Kontakt</a></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-4">Sociale medier</p>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-blue-400">LinkedIn</a></li>
                <li><a href="#" className="hover:text-blue-400">Instagram</a></li>
                <li><a href="#" className="hover:text-blue-400">TikTok</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-slate-700 pt-8 text-center text-slate-400 text-sm">
            <p>&copy; 2026 Northscale. Alle rettigheder forbeholdt.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out 0.2s both;
        }

        @media (max-width: 768px) {
          .md\:scale-105 {
            transform: scale(1);
          }
          .md\:-translate-y-4 {
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
