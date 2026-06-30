/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Courses } from "./pages/Courses";
import { Blog } from "./pages/Blog";

// Placeholder for unbuilt pages
function Placeholder({ title }: { title: string }) {
  return (
    <div className="py-24 text-center max-w-2xl mx-auto px-4 relative z-10">
      <h1 className="text-4xl font-heading font-bold mb-4 text-white">{title}</h1>
      <p className="text-slate-400">This section is currently under development. Please check back soon.</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="blog" element={<Blog />} />
          
          {/* Placeholders for the massive scope requested */}
          <Route path="premium" element={<Placeholder title="Premium Courses" />} />
          <Route path="tools" element={<Placeholder title="AI Tools Directory" />} />
          <Route path="portfolio" element={<Placeholder title="Portfolio" />} />
          <Route path="resources" element={<Placeholder title="Free Resources" />} />
          <Route path="contact" element={<Placeholder title="Contact Us" />} />
          
          {/* Legal Placeholders */}
          <Route path="privacy" element={<Placeholder title="Privacy Policy" />} />
          <Route path="terms" element={<Placeholder title="Terms of Service" />} />
          <Route path="cookies" element={<Placeholder title="Cookie Policy" />} />
          
          {/* 404 Catch All */}
          <Route path="*" element={<Placeholder title="404 - Page Not Found" />} />
        </Route>
      </Routes>
    </Router>
  );
}
