import Hero from "@/components/Hero";
import Blog from "@/src/components/blog";
import Reviews from "@/components/Reviews";
import LatestVideos from "@/components/LatestVideos";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import SplashScreen from "@/components/SplashScreen";
import About from "@/components/About";

export default function Home() {
  return (
    <SplashScreen>
      <main>
        <Hero />
        <About />
        <Blog />
        <LatestVideos />
        <Reviews />
        <FloatingWhatsApp />
      </main>
    </SplashScreen>
  );
}
