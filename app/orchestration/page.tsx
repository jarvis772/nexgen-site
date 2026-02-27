import { getOrchestrationInsights, getOrchestrationNews } from "@/lib/content";
import Nav from "@/components/Nav";
import PillarHeader from "@/components/PillarHeader";
import KeyInsights from "@/components/KeyInsights";
import WhatsNew from "@/components/WhatsNew";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

export const metadata = {
  title: "The Orchestration Layer | Nexgen Precision Medicine",
  description: "How AI coordinates multi-omic data into treatment decisions",
};

export default async function OrchestrationPage() {
  const insights = getOrchestrationInsights();
  const news = getOrchestrationNews();

  return (
    <main>
      <Nav />
      <PillarHeader
        name="The Orchestration Layer"
        subtitle="How AI coordinates multi-omic data into treatment decisions"
        framing="AI in medicine is not one model doing one thing. It is an orchestration problem — coordinating genomics, imaging, pathology, and pharmacogenomics into a unified reasoning layer that supports treatment decisions no single data source could drive alone. This section tracks the architectures, agents, and integration patterns making that possible."
      />
      <KeyInsights updatedAt={insights.updatedAt} items={insights.items} />
      <WhatsNew items={news} />
      <EmailCapture />
      <Footer />
    </main>
  );
}
