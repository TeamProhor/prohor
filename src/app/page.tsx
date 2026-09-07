import { Navbar } from "@/components/landing/sections/navbar";
import { Hero } from "@/components/landing/sections/hero";
import { Features } from "@/components/landing/sections/features";
import { Showcase } from "@/components/landing/sections/mesh-showcase";
import { AuroraShowcase } from "@/components/landing/sections/aurora-showcase";
import { AISection } from "@/components/landing/sections/ai-section";
import { ProductDirectionSection } from "@/components/landing/sections/product-direction";
import { WorkflowsSection } from "@/components/landing/sections/workflows-section";
import { Stats } from "@/components/landing/sections/stats";
import { Pills } from "@/components/landing/sections/pills";
import { MadForDesigner } from "@/components/landing/sections/mad-for-designer";
import { Pricing } from "@/components/landing/sections/pricing";
import { Updates } from "@/components/landing/sections/updates";
import { Footer } from "@/components/landing/sections/footer";

export default function EndlessPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <AuroraShowcase />
      <AISection />
      <ProductDirectionSection />
      <WorkflowsSection />
      <Stats />
      <Pills />
      <MadForDesigner />
      <Pricing />
      <Updates />
      <Footer />
    </main>
  );
}
