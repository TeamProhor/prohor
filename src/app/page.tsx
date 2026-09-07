import { Navbar } from "@/components/templates/endless/sections/navbar";
import { Hero } from "@/components/templates/endless/sections/hero";
import { Features } from "@/components/templates/endless/sections/features";
import { Showcase } from "@/components/templates/endless/sections/showcase";
import { AISection } from "@/components/templates/endless/sections/ai-section";
import { ProductDirectionSection } from "@/components/templates/endless/sections/product-direction";
import { WorkflowsSection } from "@/components/templates/endless/sections/workflows-section";
import { Stats } from "@/components/templates/endless/sections/stats";
import { Pills } from "@/components/templates/endless/sections/pills";
import { MadForDesigner } from "@/components/templates/endless/sections/mad-for-designer";
import { Pricing } from "@/components/templates/endless/sections/pricing";
import { Updates } from "@/components/templates/endless/sections/updates";
import { Footer } from "@/components/templates/endless/sections/footer";

export default function EndlessPage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
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
