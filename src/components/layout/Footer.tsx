import { Link } from "react-router-dom";
import { Brain, Twitter, Linkedin, Youtube, Github, ArrowRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/5 text-slate-300 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-brand-blue to-brand-green flex items-center justify-center text-white">
                <Brain size={18} />
              </div>
              <span className="font-heading font-bold text-xl tracking-tight uppercase text-white">
                Wadan<span className="text-brand-blue">Momand</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Empowering the next generation of creators and builders through world-class AI education and prompt engineering.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-transparent hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-blue hover:border-transparent hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-red-500 hover:border-transparent hover:text-white transition-all">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Platform</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/courses" className="text-slate-400 hover:text-white transition-colors">Free Courses</Link></li>
              <li><Link to="/premium" className="text-slate-400 hover:text-white transition-colors">Premium Content</Link></li>
              <li><Link to="/tools" className="text-slate-400 hover:text-white transition-colors">AI Tools Directory</Link></li>
              <li><Link to="/resources" className="text-slate-400 hover:text-white transition-colors">Free Resources</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="text-slate-400 hover:text-white transition-colors">About Wadan</Link></li>
              <li><Link to="/blog" className="text-slate-400 hover:text-white transition-colors">AI Blog</Link></li>
              <li><Link to="/portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-400 mb-4">
              Join 50,000+ students receiving weekly AI insights and tutorials.
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email address" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-white transition-colors"
              />
              <button className="bg-brand-blue hover:bg-blue-500 text-white rounded-xl px-4 py-3 text-sm font-semibold transition-colors flex items-center justify-center gap-2">
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <p>© {new Date().getFullYear()} WADANMOMAND.COM — ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
            <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            <Link to="/admin" className="hover:text-white text-brand-blue transition-colors">Admin Access</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
