// import { AuthPage } from "@/components/AuthPage";
import { Cta } from "@/components/landing/cta";
import { Faq } from "@/components/landing/faq";
import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Pricing } from "@/components/landing/pricing";
import { Testimonials } from "@/components/landing/testimonials";

export default function Home() {
  return (      
      <div className="min-h-screen bg-background">
          <Header />
          <Hero />
          <Features />
          <HowItWorks />
          <Testimonials />
          <Pricing />
          <Faq />
          <Cta />
          <Footer />
      </div>
        );
}