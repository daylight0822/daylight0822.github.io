import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CaseStudyPage from "./pages/CaseStudyPage";
import WorkDetailPage from "./pages/WorkDetailPage";
import ScrollToTop from "./components/ScrollToTop";
import SiteProtection from "./components/SiteProtection";

function App() {
  return (
    <HashRouter>
      <SiteProtection />
      <ScrollToTop />
      <div className="min-h-screen bg-bg">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/case-study" element={<CaseStudyPage />} />
          <Route path="/works/:workId" element={<WorkDetailPage />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;
