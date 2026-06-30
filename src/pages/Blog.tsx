import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, User } from "lucide-react";

const POSTS = [
  {
    title: "The Ultimate Guide to Vibe Coding in 2024",
    category: "Vibe Coding",
    date: "Oct 24, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop",
    excerpt: "Learn how to build production-ready applications purely through natural language prompting without writing code manually.",
  },
  {
    title: "How to use Google Gemini Advanced for Business",
    category: "Gemini",
    date: "Oct 18, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop",
    excerpt: "Discover the hidden features in Gemini Advanced that can automate your business research and data analysis.",
  },
  {
    title: "Prompt Engineering: 5 Techniques to Control Output",
    category: "Prompt Engineering",
    date: "Oct 12, 2024",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop",
    excerpt: "Stop getting generic responses from ChatGPT. Use these 5 advanced prompt structures to get exactly what you need.",
  },
  {
    title: "AI Tools Directory: Top 10 for Content Creators",
    category: "AI Tools",
    date: "Oct 05, 2024",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=600&auto=format&fit=crop",
    excerpt: "My curated list of the top 10 AI tools that every content creator needs in their arsenal this year.",
  }
];

export function Blog() {
  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Insights & Tutorials
        </h1>
        <p className="text-lg text-slate-400">
          The latest thoughts, tutorials, and news about Artificial Intelligence, prompt engineering, and the future of work.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          {POSTS.map((post, i) => (
            <motion.article 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              key={i} 
              className="group flex flex-col md:flex-row gap-8 items-start p-6 bg-white/5 rounded-3xl border border-white/10 hover:border-white/20 transition-all backdrop-blur-md cursor-pointer"
            >
              <div className="w-full md:w-2/5 aspect-[4/3] rounded-2xl overflow-hidden shrink-0 bg-slate-900 border border-white/5 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-4 text-[10px] font-bold text-brand-blue uppercase tracking-widest">
                  <span>{post.category}</span>
                </div>
                <h2 className="text-2xl font-heading font-bold text-white group-hover:text-brand-blue transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-slate-400 text-sm line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-6 text-xs text-slate-500 pt-2 font-medium uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Calendar size={14} /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock size={14} /> {post.readTime}</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Sidebar */}
        <div className="space-y-8">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <h3 className="font-heading font-bold text-lg text-white mb-6">About Wadan</h3>
            <div className="flex items-center gap-4 mb-6">
              <img src="/profile.jpg" alt="Wadan" className="w-16 h-16 rounded-full object-cover border-2 border-white/10" />
              <div>
                <div className="font-bold text-white">Wadan Momand</div>
                <div className="text-xs uppercase tracking-wider text-slate-400 mt-1">AI Educator</div>
              </div>
            </div>
            <p className="text-sm text-slate-400 mb-6 leading-relaxed">
              Teaching you how to leverage AI to automate your life and accelerate your career.
            </p>
            <button className="text-brand-blue text-sm font-bold uppercase tracking-wider hover:text-blue-400 transition-colors flex items-center gap-2 group">
              Read full bio <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <h3 className="font-heading font-bold text-lg text-white mb-6">Categories</h3>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li className="flex items-center justify-between hover:text-brand-blue cursor-pointer transition-colors group">
                <span>Prompt Engineering</span>
                <span className="bg-white/5 text-slate-500 text-[10px] py-1 px-2 rounded-md group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-colors">24</span>
              </li>
              <li className="flex items-center justify-between hover:text-brand-blue cursor-pointer transition-colors group">
                <span>AI Tools</span>
                <span className="bg-white/5 text-slate-500 text-[10px] py-1 px-2 rounded-md group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-colors">18</span>
              </li>
              <li className="flex items-center justify-between hover:text-brand-blue cursor-pointer transition-colors group">
                <span>Vibe Coding</span>
                <span className="bg-white/5 text-slate-500 text-[10px] py-1 px-2 rounded-md group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-colors">12</span>
              </li>
              <li className="flex items-center justify-between hover:text-brand-blue cursor-pointer transition-colors group">
                <span>Tutorials</span>
                <span className="bg-white/5 text-slate-500 text-[10px] py-1 px-2 rounded-md group-hover:bg-brand-blue/20 group-hover:text-brand-blue transition-colors">35</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
