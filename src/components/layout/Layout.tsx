import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { motion } from "motion/react";
import { useLocation } from "react-router-dom";

export function Layout() {
  const location = useLocation();
  
  return (
    <div className="min-h-screen flex flex-col relative bg-slate-900 overflow-x-hidden">
      {/* Background gradients from the theme */}
      <div className="fixed top-[-100px] right-[-100px] w-[500px] h-[500px] bg-brand-blue/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-[-100px] left-[-100px] w-[500px] h-[500px] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <Navbar />
      <main className="flex-1 w-full pt-[88px] relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="h-full"
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
