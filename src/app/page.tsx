import Link from "next/link";
import { 
  ArrowRight, Leaf, ShieldCheck, BarChart3, Bot, CheckCircle2, Globe2, 
  Store, Target, LineChart, Search, Sparkles, FileText, Check, AlertTriangle, MessageSquare
} from "lucide-react";
import TrustStrip from "@/components/TrustStrip";
import MobileMenu from "@/components/MobileMenu";

export const metadata = {
  title: 'AGRIMATCH — AI-Powered Agricultural Commerce',
  description: 'AGRIMATCH connects farmers directly with verified businesses through AI-powered agricultural supply discovery, matching and procurement tools.',
  openGraph: {
    title: 'AGRIMATCH — AI-Powered Agricultural Commerce',
    description: 'AGRIMATCH connects farmers directly with verified businesses through AI-powered agricultural supply discovery, matching and procurement tools.',
    type: 'website',
  }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. NAVBAR (Premium Floating Glassmorphism) */}
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl z-50 transition-all duration-300">
        <div className="bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-2xl px-5 h-[72px] flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#176B3A] to-[#2F8F46] flex items-center justify-center shadow-md shadow-green-900/20 group-hover:shadow-green-900/40 group-hover:scale-105 transition-all duration-300">
              <Leaf className="w-5 h-5 text-white transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-[#112417]">AGRIMATCH</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-1 p-1 bg-gray-50/50 rounded-full border border-gray-100/50">
            {[
              { label: 'How It Works', href: '#how-it-works' },
              { label: 'For Farmers', href: '#farmers' },
              { label: 'For Businesses', href: '#businesses' },
              { label: 'AI Intelligence', href: '#ai' },
              { label: 'Trust', href: '/trust' }
            ].map(link => (
              <Link 
                key={link.label} 
                href={link.href} 
                className="px-4 py-2 text-[13px] font-bold text-gray-500 rounded-full hover:bg-white hover:text-gray-900 hover:shadow-sm transition-all duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-3 py-2 bg-gray-50 hover:bg-gray-100 rounded-lg border border-gray-200 cursor-pointer text-gray-600 transition-colors">
              <Globe2 className="w-4 h-4 text-gray-400" /> EN
            </div>
            <Link href="/login" className="hidden sm:block text-sm font-bold text-gray-600 hover:text-gray-900 px-3 transition-colors">Log in</Link>
            <Link href="/login" className="hidden sm:flex relative group overflow-hidden bg-[#176B3A] text-white rounded-[12px] font-bold text-sm h-10 px-6 justify-center items-center gap-2 shadow-[0_4px_12px_-4px_rgba(23,107,58,0.5)] hover:shadow-[0_8px_16px_-4px_rgba(23,107,58,0.6)] hover:-translate-y-0.5 transition-all duration-300">
              <span className="relative z-10 flex items-center gap-2">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-[#176B3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Link>
            {/* Mobile Menu Component */}
            <div className="lg:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* 2. HERO */}
        <section className="relative pt-12 pb-20 md:pt-32 md:pb-32 px-4 overflow-hidden">
          {/* Ambient Background Elements */}
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute top-[20%] right-[-5%] w-[40%] h-[40%] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-[20%] right-[20%] h-[1px] bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              
              {/* Text Content */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-xs font-bold text-green-700 uppercase tracking-wider mb-6 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" /> AI-Powered Agricultural Commerce
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-[4rem] font-extrabold text-[#112417] leading-[1.05] mb-6 tracking-tight">
                  Where agricultural supply meets <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#176B3A] to-[#2F8F46]">real business demand.</span>
                </h1>
                
                <p className="text-[17px] md:text-[19px] text-gray-600 mb-10 leading-[1.6] max-w-[500px]">
                  Connect farmers directly with businesses through AI-powered discovery, matching, market intelligence and procurement tools.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link href="/register?role=farmer" className="relative group overflow-hidden bg-[#176B3A] text-white rounded-[16px] font-bold text-base h-[56px] px-8 flex justify-center items-center gap-2 shadow-[0_8px_20px_-6px_rgba(23,107,58,0.5)] hover:shadow-[0_12px_25px_-6px_rgba(23,107,58,0.6)] hover:-translate-y-0.5 transition-all duration-300">
                    <span className="relative z-10 flex items-center gap-2">I'm a Farmer <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" /></span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-[#176B3A] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                  <Link href="/register?role=business" className="bg-white text-[#17231C] border border-gray-200 rounded-[16px] font-bold text-base h-[56px] px-8 flex justify-center items-center gap-2 shadow-sm hover:border-[#176B3A] hover:bg-gray-50 hover:-translate-y-0.5 transition-all duration-300">
                    I'm a Business
                  </Link>
                </div>
                
                <div className="flex items-center gap-4 text-sm font-medium text-gray-500">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover"/></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover"/></div>
                    <div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"><img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=100&auto=format&fit=crop" className="w-full h-full object-cover"/></div>
                  </div>
                  <p>Trusted by <span className="font-bold text-gray-900">10,000+</span> users</p>
                </div>
              </div>
              
              {/* Visual Composition */}
              <div className="relative hidden md:block group/hero">
                {/* Glow behind image */}
                <div className="absolute inset-0 bg-[#176B3A] blur-[80px] opacity-20 rounded-full transform group-hover/hero:scale-105 transition-transform duration-1000"></div>
                
                {/* Main Image */}
                <div className="relative aspect-[4/3] rounded-[32px] overflow-hidden shadow-2xl border-[6px] border-white/80 bg-gray-100 transform group-hover/hero:scale-[1.02] transition-transform duration-700 ease-in-out">
                  <img src="/agrimatch_hero.jpg" alt="Farmer holding freshly harvested produce" className="w-full h-full object-cover object-center" />
                  
                  {/* Internal dark gradient at bottom for contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  <div className="absolute top-6 left-6 z-20 bg-black/40 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider border border-white/20">
                    AGRIMATCH INTELLIGENCE
                  </div>
                </div>
                
                {/* Desktop Floating Cards */}
                <div className="hidden md:block">
                  {/* AI QUALITY CARD - Glassmorphism */}
                  <div className="absolute bottom-10 -left-8 bg-white/90 backdrop-blur-xl p-5 rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 w-[240px] group/card hover:-translate-y-2 hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.2)] transition-all duration-500 ease-out z-30">
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-500 mb-3">
                      <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center"><Sparkles className="w-3.5 h-3.5 text-[#176B3A]" /></div> AI QUALITY
                    </div>
                    <div className="font-extrabold text-[#112417] text-2xl mb-1">Grade A</div>
                    <div className="text-xs text-gray-500 mb-4 font-medium">Preliminary visual class</div>
                    <div className="flex justify-between text-xs mb-1.5 font-bold">
                      <span className="text-gray-600">Confidence</span>
                      <span className="text-[#176B3A]">87%</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2 mb-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-green-400 to-[#176B3A] h-full rounded-full w-[87%] transform origin-left scale-x-90 group-hover/card:scale-x-100 transition-transform duration-1000 ease-out"></div>
                    </div>
                  </div>
                  
                  {/* MARKET CONTEXT CARD - Glassmorphism */}
                  <div className="absolute top-12 -right-8 bg-white/90 backdrop-blur-xl p-5 rounded-[24px] shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] border border-white/50 w-[250px] group/card hover:-translate-y-2 hover:shadow-[0_30px_50px_-15px_rgba(0,0,0,0.15)] transition-all duration-500 ease-out delay-100 z-30">
                    <div className="text-[10px] font-bold text-gray-400 tracking-wider mb-2 uppercase">MARKET CONTEXT</div>
                    <div className="font-bold text-[#112417] text-sm mb-1">Mango</div>
                    <div className="font-extrabold text-[#176B3A] text-2xl mb-3">₹48 – ₹54 <span className="text-sm font-medium text-gray-500">/ kg</span></div>
                    <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-medium mb-3">
                      <span className="w-1.5 h-1.5 bg-[#F2C94C] rounded-full shadow-[0_0_8px_rgba(242,201,76,0.8)]"></span> Prototype indicative range
                    </div>
                    <div className="flex justify-between items-center text-xs border-t border-gray-100 pt-3">
                      <span className="text-gray-500 font-medium">Demand</span>
                      <span className="font-bold text-green-600 flex items-center gap-1 bg-green-50 px-2 py-0.5 rounded-md">High ↑</span>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* 3. TRUST STRIP */}
        <TrustStrip />

        {/* 4. THE PROBLEM */}
        <section className="py-24 px-4 bg-[#112417] text-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Agriculture produces. <br className="hidden md:block" />
                <span className="text-[#F2C94C]">Markets connect poorly.</span>
              </h2>
              <p className="text-xl text-green-100/80">
                Finding the right buyer shouldn't be harder than growing the crop.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-[24px] shadow-2xl backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Leaf className="w-24 h-24 text-white" /></div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">For Farmers</h3>
                <p className="text-green-100/90 mb-8 relative z-10 text-lg">Finding the right buyer can be difficult. Farmers often face:</p>
                <ul className="space-y-4 mb-10 text-green-50/80 relative z-10">
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-[#F2C94C] rounded-full shrink-0"></span> Fragmented buyer discovery</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-[#F2C94C] rounded-full shrink-0"></span> Limited demand visibility</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-[#F2C94C] rounded-full shrink-0"></span> Unclear price context</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-[#F2C94C] rounded-full shrink-0"></span> Subjective quality disputes</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-[#F2C94C] rounded-full shrink-0"></span> Manual and tedious negotiation</li>
                </ul>
                <Link href="#farmers" className="inline-flex items-center gap-2 text-[#F2C94C] font-bold hover:gap-3 transition-all relative z-10">
                  How AGRIMATCH helps farmers <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-[24px] shadow-2xl backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity"><Store className="w-24 h-24 text-white" /></div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">For Businesses</h3>
                <p className="text-green-100/90 mb-8 relative z-10 text-lg">Finding the right supply takes time. Businesses often face:</p>
                <ul className="space-y-4 mb-10 text-green-50/80 relative z-10">
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span> Fragmented supplier discovery</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span> Inconsistent produce information</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span> Difficult quality comparison</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span> Slow manual procurement cycles</li>
                  <li className="flex items-start gap-3"><span className="mt-1.5 w-1.5 h-1.5 bg-blue-400 rounded-full shrink-0"></span> Scattered communication and tracking</li>
                </ul>
                <Link href="#businesses" className="inline-flex items-center gap-2 text-blue-400 font-bold hover:gap-3 transition-all relative z-10">
                  How AGRIMATCH helps businesses <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 5. HOW AGRIMATCH WORKS */}
        <section id="how-it-works" className="py-24 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto relative px-4 sm:px-6">
            <div className="text-center mb-16 md:mb-24">
              <span className="text-[#176B3A] font-extrabold tracking-widest text-xs uppercase mb-3 block">The Journey</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">From harvest to business</h2>
            </div>
            
            <div className="relative">
              {/* Desktop connecting dashed line */}
              <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-green-200 to-transparent border-t-2 border-dashed border-green-300/50 z-0"></div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-6 gap-y-12 relative z-10">
                {[
                  { num: '01', title: 'LIST', desc: 'Farmer lists Mango — 20 tonnes.' },
                  { num: '02', title: 'UNDERSTAND', desc: 'AI helps interpret quality & visual condition.' },
                  { num: '03', title: 'DISCOVER', desc: 'AGRIMATCH finds compatible business demand.' },
                  { num: '04', title: 'OFFER', desc: 'Business sends offer for 20 tonnes.' },
                  { num: '05', title: 'DECIDE', desc: 'Farmer reviews buyer terms & context.' },
                  { num: '06', title: 'COMPLETE', desc: 'Track payment, pickup, and delivery.' }
                ].map((step, i) => (
                  <div key={i} className="flex flex-col items-center text-center group">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white border-[6px] border-gray-100 group-hover:border-green-100 text-[#176B3A] flex items-center justify-center font-black text-xl md:text-2xl mb-5 shadow-sm group-hover:shadow-lg group-hover:-translate-y-2 group-hover:scale-110 transition-all duration-300 relative z-10 overflow-hidden">
                      <div className="absolute inset-0 bg-green-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
                      <span className="relative z-10">{step.num}</span>
                    </div>
                    <h3 className="font-extrabold text-gray-900 mb-2.5 tracking-wide group-hover:text-[#176B3A] transition-colors">{step.title}</h3>
                    <p className="text-sm text-gray-500 font-medium leading-relaxed px-1 md:px-3">{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 6. SEE IN ACTION */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">See AGRIMATCH in action.</h2>
            <p className="text-xl text-gray-500">Explore how farmers and businesses use the platform to move from supply discovery to direct trade.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider flex items-center justify-between">
                Farmer Marketplace Preview
                <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded">Prototype UI</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="font-bold text-lg">Mango • 20 tonnes</div>
                <div className="text-sm text-gray-500 mb-4">Eluru, Andhra Pradesh</div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded-lg border border-gray-100">
                    <div className="text-xs text-gray-500">AI Assessment</div>
                    <div className="font-semibold text-green-700">Grade A</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-gray-100">
                    <div className="text-xs text-gray-500">Market Context</div>
                    <div className="font-semibold">₹48–₹54/kg</div>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-200 text-sm text-blue-600 font-bold">3 business matches found</div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
              <div className="text-sm font-bold text-gray-400 mb-4 uppercase tracking-wider flex items-center justify-between">
                Business Procurement Preview
                <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-1 rounded">Prototype UI</span>
              </div>
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
                <div className="text-xs font-bold text-blue-800 mb-2">LOOKING FOR</div>
                <div className="font-semibold text-blue-900">Grade A Mango • 20 tonnes</div>
                <div className="text-sm text-blue-700 mb-4">Andhra Pradesh (Within 10 days)</div>
                <div className="bg-white p-3 rounded-lg border border-blue-100 flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">ABC Foods</div>
                    <div className="text-xs text-green-600 font-bold">92% Match</div>
                  </div>
                  <button className="px-3 py-1 bg-blue-600 text-white rounded-lg text-sm font-medium">Make Offer</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. FOR FARMERS */}
        <section id="farmers" className="py-24 px-4 bg-green-900 text-white">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop" alt="Indian agriculture fields" className="w-full h-full object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="text-sm font-bold text-green-400 mb-4 uppercase tracking-wider">Built around the farmer</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8">Sell directly. Understand your market. Choose your buyers.</h2>
              <div className="space-y-6">
                <div><h3 className="font-bold text-lg text-green-100">Sell your produce</h3><p className="text-green-200/80 text-sm">Create a listing in minutes.</p></div>
                <div><h3 className="font-bold text-lg text-green-100">Understand your produce</h3><p className="text-green-200/80 text-sm">Upload an image for AI-assisted visual assessment.</p></div>
                <div><h3 className="font-bold text-lg text-green-100">Understand the market</h3><p className="text-green-200/80 text-sm">View indicative market context.</p></div>
                <div><h3 className="font-bold text-lg text-green-100">Discover demand</h3><p className="text-green-200/80 text-sm">See businesses looking for compatible supply.</p></div>
                <div><h3 className="font-bold text-lg text-green-100">Review offers</h3><p className="text-green-200/80 text-sm">Compare quantity, price, terms and buyer information.</p></div>
                <div><h3 className="font-bold text-lg text-green-100">Track your sale</h3><p className="text-green-200/80 text-sm">Follow the transaction from offer to completion.</p></div>
              </div>
              <div className="mt-8">
                <Link href="/login" className="btn-primary bg-white text-green-900 hover:bg-green-50 inline-flex items-center gap-2">Start Selling <ArrowRight className="w-4 h-4" /></Link>
                <p className="text-xs text-green-400 mt-4">AGRIMATCH does not purchase or resell your produce. You remain the seller.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 8. FOR BUSINESSES */}
        <section id="businesses" className="py-24 px-4 bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-wider">Procurement, without the fragmentation</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">Procure from the source.</h2>
              <div className="space-y-6">
                <div><h3 className="font-bold text-lg text-gray-800">Describe what you need</h3><p className="text-gray-500 text-sm">"100 tonnes Grade A mangoes in Andhra Pradesh."</p></div>
                <div><h3 className="font-bold text-lg text-gray-800">Let AI structure it</h3><p className="text-gray-500 text-sm">AGRIMATCH extracts Product, Quantity, Quality, Region, Deadline.</p></div>
                <div><h3 className="font-bold text-lg text-gray-800">Discover supply</h3><p className="text-gray-500 text-sm">See compatible producers instantly.</p></div>
                <div><h3 className="font-bold text-lg text-gray-800">Compare</h3><p className="text-gray-500 text-sm">Compare Quantity, Quality, Location, Availability, and Verification.</p></div>
                <div><h3 className="font-bold text-lg text-gray-800">Make an offer</h3><p className="text-gray-500 text-sm">Send clear commercial terms directly to the seller.</p></div>
                <div><h3 className="font-bold text-lg text-gray-800">Manage</h3><p className="text-gray-500 text-sm">Track requirements, offers and orders in one place.</p></div>
              </div>
              <div className="mt-8">
                <Link href="/login" className="btn-primary inline-flex items-center gap-2">Start Procuring <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1000&auto=format&fit=crop" alt="Business procurement produce" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* 9. AI INTELLIGENCE */}
        <section id="ai" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Intelligence at every step of the trade.</h2>
            <p className="text-xl text-gray-500">What does AGRIMATCH actually use AI for?</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            <div className="card text-center !p-4 bg-gray-50">
              <h3 className="font-bold text-sm mb-2 text-gray-900">01 Produce Intelligence</h3>
              <p className="text-xs text-gray-600">Upload a produce image and receive an AI-assisted visual assessment.</p>
            </div>
            <div className="card text-center !p-4 bg-gray-50">
              <h3 className="font-bold text-sm mb-2 text-gray-900">02 Market Intelligence</h3>
              <p className="text-xs text-gray-600">Understand indicative price context and demand signals.</p>
            </div>
            <div className="card text-center !p-4 bg-gray-50">
              <h3 className="font-bold text-sm mb-2 text-gray-900">03 Matching Intelligence</h3>
              <p className="text-xs text-gray-600">Match agricultural supply with business requirements.</p>
            </div>
            <div className="card text-center !p-4 bg-gray-50">
              <h3 className="font-bold text-sm mb-2 text-gray-900">04 Procurement Intelligence</h3>
              <p className="text-xs text-gray-600">Businesses can describe requirements naturally.</p>
            </div>
            <div className="card text-center !p-4 bg-gray-50">
              <h3 className="font-bold text-sm mb-2 text-gray-900">05 AI Assistant</h3>
              <p className="text-xs text-gray-600">Ask AGRIMATCH questions about listings, offers, suppliers and orders.</p>
            </div>
          </div>
        </section>

        {/* 10. AI PROCUREMENT EXAMPLE */}
        <section className="py-16 px-4 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-center text-2xl font-bold mb-12">Natural Language to Structured Procurement</h3>
            
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1 bg-white/10 p-6 rounded-2xl border border-white/20 w-full">
                <div className="text-sm font-bold text-blue-300 mb-2">BUSINESS REQUEST</div>
                <div className="text-xl font-medium">"I need 100 tonnes of Grade A mangoes in Andhra Pradesh within 10 days."</div>
              </div>
              
              <ArrowRight className="hidden md:block w-8 h-8 text-blue-400 shrink-0" />
              
              <div className="flex-1 bg-white text-gray-900 p-6 rounded-2xl w-full">
                <div className="flex items-center gap-2 text-sm font-bold text-blue-600 mb-4 border-b border-gray-100 pb-2">
                  <Bot className="w-4 h-4" /> AGRIMATCH AI UNDERSTANDS
                </div>
                <div className="grid grid-cols-2 gap-y-2 text-sm">
                  <span className="text-gray-500">Product</span><span className="font-bold">Mango</span>
                  <span className="text-gray-500">Quantity</span><span className="font-bold">100 tonnes</span>
                  <span className="text-gray-500">Quality</span><span className="font-bold">Grade A</span>
                  <span className="text-gray-500">Region</span><span className="font-bold">Andhra Pradesh</span>
                  <span className="text-gray-500">Deadline</span><span className="font-bold">10 days</span>
                </div>
                <div className="mt-4 pt-4 border-t border-gray-100 text-center text-sm font-bold text-green-600">
                  3 compatible suppliers found
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 11. MATCHING EXPLAINED */}
        <section className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Why did AGRIMATCH match this?</h2>
            <p className="text-gray-500 mt-2">AGRIMATCH doesn't just show a match. It explains the factors behind it.</p>
          </div>
          
          <div className="max-w-md mx-auto card border-green-200">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-green-600 mb-1">92%</div>
              <div className="text-sm font-bold text-gray-500 uppercase">Prototype Match Score</div>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 mb-6">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Product matches</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Quantity available</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Quality requirement matches</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Region matches</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-500" /> Availability matches</li>
            </ul>
            <div className="p-3 bg-yellow-50 text-yellow-800 text-xs rounded-lg border border-yellow-200">
              <strong>Potential limitation:</strong> Delivery distance needs confirmation.
            </div>
          </div>
        </section>

        {/* 12. MARKET CONTEXT */}
        <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold">Understand the market before you trade.</h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="card text-center">
                <div className="font-bold text-gray-900 mb-2">Mango</div>
                <div className="text-xl font-bold text-[var(--color-brand-primary)]">₹48–₹54/kg</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-2">Indicative</div>
              </div>
              <div className="card text-center">
                <div className="font-bold text-gray-900 mb-2">Rice</div>
                <div className="text-xl font-bold text-[var(--color-brand-primary)]">₹50–₹58/kg</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-2">Prototype Context</div>
              </div>
              <div className="card text-center">
                <div className="font-bold text-gray-900 mb-2">Cotton</div>
                <div className="text-xl font-bold text-[var(--color-brand-primary)]">₹7,000–₹7,500/q</div>
                <div className="text-[10px] uppercase tracking-wider text-gray-400 mt-2">Prototype Context</div>
              </div>
              <div className="card text-center">
                <div className="font-bold text-gray-900 mb-2">Vegetables</div>
                <div className="text-sm font-bold text-gray-500 mt-3">Market context</div>
              </div>
            </div>
            <p className="text-center text-sm text-gray-500 max-w-2xl mx-auto">
              Indicative information only. Actual transaction prices may vary based on quality, quantity, location, timing and negotiated terms.
            </p>
          </div>
        </section>

        {/* 13. DIRECT COMMERCE EXPLANATION */}
        <section className="py-32 px-4 max-w-7xl mx-auto text-center relative overflow-hidden">
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-24 tracking-tight text-gray-900 relative z-10">AGRIMATCH is infrastructure.</h2>
          
          <div className="flex flex-col items-center max-w-3xl mx-auto relative z-10">
            {/* FARMER NODE */}
            <div className="bg-white border-2 border-green-500 text-green-700 px-8 py-4 rounded-full font-bold text-xl shadow-lg flex items-center gap-3">
              <Leaf className="w-6 h-6" /> FARMER
            </div>
            
            {/* Flow line down */}
            <div className="w-1 h-12 bg-gradient-to-b from-green-500 to-gray-800 relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
            </div>
            
            {/* AGRIMATCH CORE PLATFORM */}
            <div className="w-full bg-[#112417] text-white p-10 md:p-12 rounded-[2rem] border border-gray-800 shadow-2xl relative overflow-hidden group">
              {/* Internal glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
              
              <div className="flex items-center justify-center gap-3 mb-10 relative z-10">
                <div className="w-10 h-10 bg-[#176B3A] rounded-xl flex items-center justify-center shadow-lg"><Leaf className="w-5 h-5 text-white" /></div>
                <h3 className="font-extrabold text-3xl tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-[#F2C94C]">AGRIMATCH</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative z-10">
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Bot className="w-8 h-8 text-green-400 mb-3" />
                  <span className="font-bold text-sm text-gray-200">AI</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Target className="w-8 h-8 text-blue-400 mb-3" />
                  <span className="font-bold text-sm text-gray-200">Matching</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <ShieldCheck className="w-8 h-8 text-[#F2C94C] mb-3" />
                  <span className="font-bold text-sm text-gray-200">Trust</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                  <Store className="w-8 h-8 text-purple-400 mb-3" />
                  <span className="font-bold text-sm text-gray-200">Commerce</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors md:col-span-1 col-span-2">
                  <Sparkles className="w-8 h-8 text-pink-400 mb-3" />
                  <span className="font-bold text-sm text-gray-200">Intelligence</span>
                </div>
              </div>
            </div>
            
            {/* Flow line down */}
            <div className="w-1 h-12 bg-gradient-to-b from-gray-800 to-blue-600 relative">
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-blue-600 rounded-full animate-ping opacity-75" style={{animationDelay: '1s'}}></div>
            </div>
            
            {/* BUSINESS NODE */}
            <div className="bg-white border-2 border-blue-600 text-blue-800 px-8 py-4 rounded-full font-bold text-xl shadow-lg flex items-center gap-3">
              <Store className="w-6 h-6" /> BUSINESS
            </div>
          </div>
          
          <p className="mt-16 text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed relative z-10">
            Farmers remain sellers. Businesses remain buyers. AGRIMATCH provides the digital infrastructure that helps them discover, evaluate, negotiate and manage trade.
          </p>
        </section>

        {/* 14. TRANSACTION JOURNEY */}
        <section className="py-24 px-4 bg-gray-900 text-white text-center">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-16">From Offer to Order</h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center text-left">
              <div className="bg-white text-gray-900 p-6 rounded-2xl shadow-xl">
                <div className="flex justify-between items-start border-b border-gray-100 pb-4 mb-4">
                  <div>
                    <h3 className="font-bold">ABC Foods</h3>
                    <div className="text-xs text-green-600 flex items-center gap-1 mt-1"><CheckCircle2 className="w-3 h-3"/> Verification status visible</div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="font-bold text-lg">Mango • 20 tonnes</div>
                  <div className="text-gray-500">₹51 / kg</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl mb-4">
                  <div className="text-sm text-gray-500 mb-1">Total</div>
                  <div className="text-xl font-bold text-green-700">₹10,20,000</div>
                </div>
                <div className="text-sm text-gray-600 mb-6 space-y-1">
                  <div>Buyer pickup</div>
                  <div>Payment on delivery</div>
                  <div className="text-xs text-gray-400 mt-2">Valid until Oct 04, 2026</div>
                </div>
                <button className="w-full btn-primary">Review Offer →</button>
              </div>
              
              <div>
                <div className="space-y-6 text-xl font-bold text-gray-400">
                  <div className="text-white flex items-center gap-4"><CheckCircle2 className="w-6 h-6 text-green-500"/> Offer Accepted</div>
                  <div className="flex items-center gap-4"><div className="w-6 h-6 rounded-full border-2 border-gray-600"></div> Order Created</div>
                  <div className="flex items-center gap-4"><div className="w-6 h-6 rounded-full border-2 border-gray-600"></div> Payment Processing</div>
                  <div className="flex items-center gap-4"><div className="w-6 h-6 rounded-full border-2 border-gray-600"></div> Pickup</div>
                  <div className="flex items-center gap-4"><div className="w-6 h-6 rounded-full border-2 border-gray-600"></div> Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 15. TRUST & VERIFICATION */}
        <section id="trust" className="py-24 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Trust should be visible, not assumed.</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Verification status is displayed throughout the platform so participants can understand what information has been provided and verified.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="card">
              <div className="w-10 h-10 mx-auto rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-4"><ShieldCheck className="w-5 h-5"/></div>
              <h3 className="font-bold mb-2">WHO</h3>
              <p className="text-xs text-gray-500">Identity and profile information.</p>
            </div>
            <div className="card">
              <div className="w-10 h-10 mx-auto rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4"><Target className="w-5 h-5"/></div>
              <h3 className="font-bold mb-2">WHAT</h3>
              <p className="text-xs text-gray-500">Produce and requirement information.</p>
            </div>
            <div className="card">
              <div className="w-10 h-10 mx-auto rounded-full bg-yellow-50 text-yellow-600 flex items-center justify-center mb-4"><FileText className="w-5 h-5"/></div>
              <h3 className="font-bold mb-2">HOW</h3>
              <p className="text-xs text-gray-500">Offer and transaction terms.</p>
            </div>
            <div className="card">
              <div className="w-10 h-10 mx-auto rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-4"><LineChart className="w-5 h-5"/></div>
              <h3 className="font-bold mb-2">WHAT HAPPENED</h3>
              <p className="text-xs text-gray-500">Order and transaction timeline.</p>
            </div>
          </div>
        </section>

        {/* 16. AGRICULTURAL CATEGORIES */}
        <section className="py-24 px-4 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">One platform for agricultural supply.</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["Grains", "Fruits", "Vegetables", "Flowers", "Spices", "Seeds", "Cotton", "Oilseeds", "Nursery & Plants", "Other Produce"].map((cat) => (
                <div key={cat} className="px-6 py-3 bg-white rounded-full border border-gray-200 text-sm font-medium shadow-sm hover:border-green-300 hover:text-green-700 cursor-pointer transition-colors">
                  {cat}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 17. BANNERS */}
        <section className="py-12 px-4 max-w-7xl mx-auto space-y-6">
          <div className="bg-blue-900 text-white rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-lg">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Tell AGRIMATCH what you need.</h2>
              <p className="text-blue-200">Describe your procurement requirement in plain language. Our AI helps structure it.</p>
            </div>
            <Link href="/login" className="btn-primary bg-white text-blue-900 hover:bg-gray-50 whitespace-nowrap">Create a Requirement →</Link>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 z-0"></div>
              <div className="relative z-10 mb-8">
                <h2 className="text-2xl font-bold mb-2">Have produce ready to sell?</h2>
                <p className="text-green-200 text-sm">List your produce and let verified business demand find you.</p>
              </div>
              <Link href="/login" className="relative z-10 btn-primary bg-white text-green-900 hover:bg-gray-50 w-fit">Sell Produce →</Link>
            </div>
            
            <div className="bg-gray-900 text-white rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
              <div className="absolute inset-0 bg-black/20 z-0"></div>
              <div className="relative z-10 mb-8">
                <h2 className="text-2xl font-bold mb-2">Looking for agricultural supply?</h2>
                <p className="text-gray-300 text-sm">Create a requirement and discover matching producers instantly.</p>
              </div>
              <Link href="/login" className="relative z-10 btn-primary bg-white text-gray-900 hover:bg-gray-50 w-fit">Find Supply →</Link>
            </div>
          </div>
        </section>

        {/* 20. VISION & FINAL CTA */}
        <section className="py-32 px-4 text-center max-w-3xl mx-auto">
          <div className="text-sm font-bold text-gray-400 mb-6 uppercase tracking-widest">Building infrastructure for direct commerce</div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-gray-900">
            Agricultural supply is everywhere. Finding the right business shouldn't be.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/login" className="btn-primary text-base py-4 px-8">I'm a Farmer →</Link>
            <Link href="/login" className="btn-secondary text-base py-4 px-8">I'm a Business →</Link>
          </div>
        </section>
      </main>

      {/* FLOATING AI ASSISTANT BUTTON */}
      <button className="fixed bottom-[85px] right-4 md:bottom-6 md:right-6 z-50 bg-[var(--color-brand-primary)] text-white p-4 rounded-full shadow-2xl flex items-center justify-center hover:bg-green-800 transition-colors group">
        <MessageSquare className="w-6 h-6" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-in-out whitespace-nowrap font-medium group-hover:ml-3 group-hover:mr-2">Ask AGRIMATCH</span>
      </button>

      {/* 22. FOOTER */}
      <footer className="bg-gray-900 text-white pt-16 pb-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-[var(--color-brand-primary)] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">AGRIMATCH</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI-powered agricultural commerce infrastructure.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="#farmers" className="hover:text-white transition-colors">For Farmers</Link></li>
              <li><Link href="#businesses" className="hover:text-white transition-colors">For Businesses</Link></li>
              <li><Link href="#ai" className="hover:text-white transition-colors">AI Intelligence</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link href="/trust" className="hover:text-white transition-colors">Trust</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/help" className="hover:text-white transition-colors">Help</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 AGRIMATCH. Prototype built for AVIRBHAV 2026.</p>
        </div>
      </footer>
    </div>
  );
}
