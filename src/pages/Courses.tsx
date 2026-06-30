import { useState } from "react";
import { motion } from "motion/react";
import { Search, PlayCircle, Users, Star, Award, BookOpen } from "lucide-react";
import { cn } from "../lib/utils";

const CATEGORIES = [
  "All",
  "AI Basics",
  "ChatGPT",
  "Gemini",
  "Prompt Engineering",
  "Vibe Coding",
  "AI Image Generation"
];

const COURSES = [
  {
    title: "ChatGPT for Beginners",
    category: "ChatGPT",
    description: "Learn the fundamentals of interacting with ChatGPT to boost your daily productivity.",
    lessons: 12,
    students: "25k",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1675271591211-126ad94e495d?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Advanced Prompting Techniques",
    category: "Prompt Engineering",
    description: "Master zero-shot, few-shot, and chain-of-thought prompting for complex tasks.",
    lessons: 18,
    students: "15k",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Introduction to Google Gemini",
    category: "Gemini",
    description: "Explore the multimodal capabilities of Google's flagship AI model.",
    lessons: 10,
    students: "18k",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1599839619722-39751411ea63?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Midjourney Mastery",
    category: "AI Image Generation",
    description: "Create stunning visuals using advanced Midjourney v6 parameters and prompts.",
    lessons: 24,
    students: "12k",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Vibe Coding: The Basics",
    category: "Vibe Coding",
    description: "Start building web applications without writing a single line of code manually.",
    lessons: 15,
    students: "8k",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "AI Business Automation",
    category: "AI Basics",
    description: "Automate your workflows using Zapier, Make, and OpenAI's API.",
    lessons: 30,
    students: "9k",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop"
  }
];

export function Courses() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = COURSES.filter(course => {
    const matchesCategory = activeCategory === "All" || course.category === activeCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      {/* Header */}
      <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Free AI Courses
        </h1>
        <p className="text-lg text-slate-400">
          Start your journey into Artificial Intelligence. High-quality, completely free education designed to take you from beginner to expert.
        </p>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row justify-between gap-6 mb-12">
        <div className="flex overflow-x-auto pb-2 -mx-4 px-4 md:mx-0 md:px-0 hide-scrollbar gap-2">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "whitespace-nowrap px-4 py-2 rounded-full text-sm font-bold tracking-wider transition-all duration-300 uppercase",
                activeCategory === category
                  ? "bg-brand-blue text-white shadow-md"
                  : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="relative w-full md:w-72 shrink-0">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search courses..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-full pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-brand-blue text-white transition-colors placeholder:text-slate-500"
          />
        </div>
      </div>

      {/* Grid */}
      {filteredCourses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course, i) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              key={i}
              className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 backdrop-blur-md hover:border-white/20 transition-all duration-300 flex flex-col group cursor-pointer"
            >
              <div className="aspect-video relative overflow-hidden bg-slate-900 shrink-0">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-md text-[10px] font-bold text-white uppercase tracking-wider border border-white/10">
                  {course.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-brand-blue transition-colors">
                  {course.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-1 line-clamp-2">
                  {course.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4 text-xs font-medium uppercase tracking-wider text-slate-400 border-t border-white/10 pt-4 mb-6">
                  <span className="flex items-center gap-1.5"><PlayCircle size={14} className="text-brand-blue" /> {course.lessons} Lessons</span>
                  <span className="flex items-center gap-1.5"><Award size={14} className="text-brand-green" /> Certificate</span>
                  <span className="flex items-center gap-1.5"><Users size={14} /> {course.students}</span>
                  <span className="flex items-center gap-1 text-brand-green"><Star size={14} className="fill-current" /> {course.rating}</span>
                </div>

                <button className="w-full py-3 rounded-xl bg-white/5 hover:bg-brand-blue border border-white/10 hover:border-transparent text-white font-bold text-sm transition-all group-hover:shadow-lg">
                  Start Course
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-white/5 rounded-3xl border border-white/10 border-dashed backdrop-blur-md">
          <BookOpen size={48} className="mx-auto text-slate-500 mb-4" />
          <h3 className="text-lg font-heading font-bold text-white mb-2">No courses found</h3>
          <p className="text-slate-400">Try adjusting your search or filter criteria.</p>
        </div>
      )}
    </div>
  );
}
