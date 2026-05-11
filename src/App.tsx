import { AboutSection } from "./components/AboutSection";
import { CommitmentSection } from "./components/CommitmentSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PartnerBuildersSection } from "./components/PartnerBuildersSection";
import { RecognitionSection } from "./components/RecognitionSection";
import { SalesCycleSection } from "./components/SalesCycleSection";
import { ServicesSection } from "./components/ServicesSection";
import { TeamSection } from "./components/TeamSection";
import { TermsSection } from "./components/TermsSection";
import type { PolicyPage } from "./components/TermsSection";

const policyRoutes: Record<string, PolicyPage> = {
  "/privacy-policy": "privacy",
  "/terms-and-conditions": "terms",
  "/disclaimer": "disclaimer",
};

function App() {
  const path = window.location.pathname.replace(/\/$/, "") || "/";
  const policyPage = policyRoutes[path];

  return (
    <>
      <Header />
      {policyPage ? (
        <main className="bg-white pt-24">
          <TermsSection page={policyPage} />
        </main>
      ) : (
        <main>
          <Hero />
          <AboutSection />
          <PartnerBuildersSection />
          <CommitmentSection />
          <ServicesSection />
          <SalesCycleSection />
          
          <TeamSection />
          <RecognitionSection />
          <ContactSection />
        </main>
      )}
      <Footer />
    </>
  );
}

export default App;
