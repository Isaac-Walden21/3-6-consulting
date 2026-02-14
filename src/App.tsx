import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import PageLayout from "./components/layout/PageLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  const location = useLocation();

  return (
    <>
      <div className="film-grain" aria-hidden="true" />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route element={<PageLayout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="courses" element={<CoursesPage />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}
