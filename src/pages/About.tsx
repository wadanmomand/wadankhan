import { motion } from "motion/react";
import { Brain, Code, Target, Award, CheckCircle2 } from "lucide-react";

export function About() {
  return (
    <div className="py-12 md:py-24 relative z-10">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white leading-[1.1] tracking-tight">
              Hi, I'm Wadan Momand.
            </h1>
            <div className="text-lg md:text-xl text-slate-400 space-y-6 leading-relaxed">
              <p>
                I am an AI Educator, Prompt Engineer, and Consultant dedicated to democratizing artificial intelligence.
              </p>
              <p>
                With a passion for teaching and a deep understanding of LLMs, I help individuals and businesses leverage AI to unlock unprecedented productivity and creativity.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="text-3xl font-heading font-bold text-brand-blue mb-1">50k+</div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Global Students</div>
              </div>
              <div className="bg-white/5 px-6 py-4 rounded-2xl border border-white/10 backdrop-blur-md">
                <div className="text-3xl font-heading font-bold text-brand-green mb-1">100+</div>
                <div className="text-xs uppercase tracking-wider text-slate-500 font-bold">Workshops Led</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-green/20 rounded-3xl transform rotate-3 blur-sm" />
            <img 
              src="/profile.jpg" 
              alt="Wadan Momand" 
              className="relative rounded-3xl shadow-2xl object-cover aspect-[4/5] w-full border border-white/10"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white/5 border-y border-white/10 py-24 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-blue/20 flex items-center justify-center text-brand-blue mb-6">
                <Target size={24} />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-white">My Mission</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                To bridge the gap between complex AI technology and everyday users. I believe that prompt engineering and AI literacy will be the most critical skills of the next decade, and my goal is to make this knowledge accessible to everyone, regardless of their technical background.
              </p>
            </div>
            
            <div>
              <div className="w-12 h-12 rounded-xl bg-brand-green/20 flex items-center justify-center text-brand-green mb-6">
                <Brain size={24} />
              </div>
              <h2 className="text-3xl font-heading font-bold mb-4 text-white">My Vision</h2>
              <p className="text-slate-400 leading-relaxed text-lg">
                A future where human creativity is exponentially amplified by AI. Where anyone can build software through 'Vibe Coding', automate tedious tasks, and focus purely on high-level strategy and creative problem-solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Core Expertise</h2>
            <p className="text-slate-400 text-lg">Specialized skills developed through thousands of hours of research, practice, and teaching.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Prompt Engineering", icon: <Code />, desc: "Advanced zero-shot, few-shot, and chain-of-thought methodologies for complex reasoning." },
              { title: "Vibe Coding", icon: <Brain />, desc: "Building full-stack web applications entirely through natural language prompting." },
              { title: "AI Automation", icon: <Target />, desc: "Connecting APIs and LLMs to automate business workflows and reduce manual labor." },
              { title: "LLM Fine-tuning", icon: <Award />, desc: "Preparing datasets and fine-tuning models for specific domain expertise." },
              { title: "AI Image/Video", icon: <CheckCircle2 />, desc: "Mastery of Midjourney, Stable Diffusion, Runway, and Veo for professional content." },
              { title: "Technical Education", icon: <Brain />, desc: "Translating complex technical concepts into digestible, actionable lessons." },
            ].map((skill, i) => (
              <div key={i} className="bg-white/5 p-6 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors backdrop-blur-md group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{skill.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
