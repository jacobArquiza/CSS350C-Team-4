import { Header } from "@/components/header";
import Features2 from "@/components/features-2";
import Features5 from "@/components/features-5";
import Features11 from "@/components/features-11";
import FeaturesSection from "@/components/features-7";

const featureSectionContent = {
  title: "Built for Scaling teams",
  subtitle: "Empower your team with workflows that adapt to your needs, whether you prefer git synchronization or a AI Agents interface.",
  
  featureOneTitle: "Faaast",
  featureOneDescription: "It supports an entire helping developers and innovate.",

  featureTwoTitle: "Powerful",
  featureTwoDescription: "It supports an entire helping developers and businesses.",

  featureThreeTitle: "Security",
  featureThreeDescription: "It supports an helping developers businesses innovate.",

  featureFourTitle: "AI Powered",
  featureFourDescription: "It supports an helping developers businesses innovate.",
}

const featuresElevenContent = {
  featureOneTitle: "Advanced tracking system",
  featureOneDescription: "Quick AI lives a single hotkey away - ready to quickly appear as a floating window above your other apps..",

  featureTwoTitle: "Advanced UX, Instantly locate all your assets.",


  featureThreeTitle: "Advanced UX, Instantly locate all your assets.",


  featureFourTitle: "Advanced tracking system",
  featureFourDescription: "Quick AI lives a single hotkey away apps..",
}

export default function Home() {
  return (
    <main>
      <Header/>
      <FeaturesSection content={featureSectionContent}/>
      <Features11 content={featuresElevenContent}/>
    </main>
  );
}
