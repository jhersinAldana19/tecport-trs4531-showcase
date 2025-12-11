import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ModelViewer from "@/components/ModelViewer";
import InfoCards from "@/components/InfoCards";
import DownloadSection from "@/components/DownloadSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <ModelViewer />
      <InfoCards />
      <DownloadSection />
      <Footer />
    </main>
  );
};

export default Index;
