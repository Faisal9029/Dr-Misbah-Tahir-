import Hero from "@/components/Hero";
import Blog from "@/components/Blog";
import Reviews from "@/components/Reviews";
import LatestVideos from "@/components/LatestVideos";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SplashScreen from "@/components/SplashScreen";
import About from "@/components/About";
import IRVisionSection from "@/components/IRVisionSection";

export default function Home() {
  return (
    <SplashScreen>
      <main>
        <Hero />
        <IRVisionSection />
        <About />
        <Blog />
        <LatestVideos />
        <Reviews />
        <FloatingWhatsApp />
      </main>
    </SplashScreen>
  );
}
