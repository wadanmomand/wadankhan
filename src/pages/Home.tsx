import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Users, Star, PlayCircle, Zap, Code, Terminal, Bot } from "lucide-react";

const STATS = [
  { label: "Active Students", value: "50,000+" },
  { label: "Premium Courses", value: "24" },
  { label: "AI Tools Reviewed", value: "500+" },
  { label: "Average Rating", value: "4.9/5" },
];

const FEATURED_COURSES = [
  {
    title: "Mastering Prompt Engineering",
    category: "Prompt Engineering",
    description: "Learn advanced techniques to control LLMs like ChatGPT and Claude.",
    lessons: 42,
    rating: 4.9,
    students: "12k",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Vibe Coding with AI",
    category: "AI Automation",
    description: "Build full-stack applications purely through natural language prompting.",
    lessons: 28,
    rating: 5.0,
    students: "8.5k",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Google Gemini Advanced",
    category: "Gemini",
    description: "Deep dive into Google's most capable AI model and its API.",
    lessons: 35,
    rating: 4.8,
    students: "15k",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop"
  }
];

export function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative pt-12 lg:pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 flex flex-col justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full mb-6 w-fit"
              >
                <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
                <span className="text-[10px] uppercase tracking-widest font-semibold text-slate-300">New Course: Vibe Coding</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-heading font-bold tracking-tight leading-[1.1] mb-6"
              >
                Empowering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">AI-First</span> Generation.
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-slate-400 max-w-xl mb-8 leading-relaxed"
              >
                World-class AI Trainer & Prompt Engineer. Mastering ChatGPT, Gemini, and Generative Workflows to scale human creativity.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <Link 
                  to="/premium"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-blue text-white font-bold text-sm hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 group"
                >
                  Explore Premium Courses <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/courses"
                  className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 hover:bg-white/5 text-white font-bold text-sm transition-colors flex items-center justify-center"
                >
                  Free AI Resources
                </Link>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
              >
                {STATS.map((stat, i) => (
                  <div key={i}>
                    <div className="text-2xl md:text-3xl font-heading font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-[10px] uppercase tracking-wider text-slate-500 font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex flex-col gap-6 justify-center"
            >
              <div className="p-6 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-brand-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="px-3 py-1 bg-brand-green/20 text-brand-green text-[10px] font-bold rounded-md uppercase tracking-wider">Best Seller</div>
                    <div className="text-xl font-bold text-brand-green">$199</div>
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">Advanced Prompt Engineering</h3>
                  <p className="text-slate-400 text-sm mb-6">Complete framework for building autonomous agents and scalable AI workflows.</p>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-5 h-5 bg-white/5 rounded flex items-center justify-center text-brand-green">✓</div>
                      24 Interactive Lessons
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-5 h-5 bg-white/5 rounded flex items-center justify-center text-brand-green">✓</div>
                      Private Community Access
                    </div>
                    <div className="flex items-center gap-3 text-xs text-slate-300">
                      <div className="w-5 h-5 bg-white/5 rounded flex items-center justify-center text-brand-green">✓</div>
                      Prompt Library Access
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Link to="/tools" className="p-5 bg-slate-900 border border-white/5 rounded-2xl hover:border-brand-blue/50 transition-all group">
                  <div className="w-10 h-10 bg-brand-blue/20 rounded-lg flex items-center justify-center text-brand-blue mb-4 group-hover:scale-110 transition-transform">
                    <Zap size={20} />
                  </div>
                  <div className="font-bold text-sm text-white mb-1">AI Directory</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">500+ Curated Tools</div>
                </Link>
                <Link to="/blog" className="p-5 bg-slate-900 border border-white/5 rounded-2xl hover:border-brand-green/50 transition-all group">
                  <div className="w-10 h-10 bg-brand-green/20 rounded-lg flex items-center justify-center text-brand-green mb-4 group-hover:scale-110 transition-transform">
                    <Code size={20} />
                  </div>
                  <div className="font-bold text-sm text-white mb-1">Latest Blog</div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-wider">Mastering Gemini 1.5</div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Featured Courses</h2>
              <p className="text-slate-400 max-w-2xl text-lg">Hand-picked premium content to accelerate your AI mastery.</p>
            </div>
            <Link to="/courses" className="inline-flex items-center gap-2 text-sm font-bold text-brand-blue hover:text-blue-400 transition-colors uppercase tracking-wider">
              View all courses <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_COURSES.map((course, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 group flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden bg-slate-900">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                  <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                    {course.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-brand-blue transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-1">
                    {course.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-slate-400 border-t border-white/10 pt-4 font-medium uppercase tracking-wider">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1.5"><PlayCircle size={14} className="text-brand-blue" /> {course.lessons} lessons</span>
                      <span className="flex items-center gap-1.5"><Users size={14} /> {course.students}</span>
                    </div>
                    <span className="flex items-center gap-1 text-brand-green"><Star size={14} className="fill-current" /> {course.rating}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Platform Features */}
      <section className="py-24 relative overflow-hidden border-t border-white/5 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
                Not just courses. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-brand-green">An entire ecosystem.</span>
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed">
                Get access to a comprehensive library of resources, curated tools, and step-by-step guides to integrate AI into your daily workflow.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-blue shrink-0">
                    <Terminal size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Advanced Prompt Library</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Access hundreds of tested, high-quality prompts for ChatGPT, Claude, and Gemini.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-green shrink-0">
                    <Bot size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">AI Tools Directory</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Discover and compare the latest AI tools tailored for business and automation.</p>
                  </div>
                </div>
                
                <div className="flex gap-5">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Vibe Coding Framework</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">Learn Wadan's signature framework for building apps purely with AI and natural language.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-green/20 rounded-3xl transform rotate-3 scale-105 blur-sm" />
              <div className="bg-[#0B1121] rounded-3xl border border-white/10 shadow-2xl p-8 relative">
                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                    <div className="w-3 h-3 rounded-full bg-slate-700" />
                  </div>
                  <div className="text-xs font-mono text-slate-500 flex-1 text-center font-medium">prompt-playground.ts</div>
                </div>
                <div className="space-y-6 font-mono text-sm leading-relaxed">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 text-slate-300">
                    <span className="text-brand-blue font-bold mr-2">User:</span> Create a Next.js component for a pricing card with Framer Motion hover effects.
                  </div>
                  <div className="p-4 rounded-xl bg-slate-900 border border-brand-green/20 text-slate-300 shadow-inner">
                    <span className="text-brand-green font-bold mr-2">AI:</span> I'll design a modern pricing card...<br /><br />
                    <span className="text-purple-400">import</span> {'{'} motion {'}'} <span className="text-purple-400">from</span> <span className="text-amber-300">"framer-motion"</span>;<br />
                    <span className="text-purple-400">export function</span> <span className="text-blue-400">PricingCard</span>() {'{'}<br />
                    &nbsp;&nbsp;<span className="text-slate-500">// Vibe coding in progress...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-24 relative overflow-hidden border-t border-white/5 text-center">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center mix-blend-overlay" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-blue/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-3xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white leading-tight">Ready to master AI?</h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed">Join thousands of students learning to leverage AI for career growth and business automation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/courses" className="px-8 py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm transition-colors shadow-lg shadow-brand-blue/20 flex items-center justify-center">
              Browse Free Courses
            </Link>
            <Link to="/premium" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm transition-colors flex items-center justify-center">
              Unlock Premium Access
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
