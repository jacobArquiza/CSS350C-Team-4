import { Header } from "@/components/header";
import Features2 from "@/components/features-2";
import Features5 from "@/components/features-5";
import Features11 from "@/components/features-11";
import FeaturesSection from "@/components/features-7";

const featureSectionContent = {
  title: "Empowering your financial future",
  subtitle: "MakesCents is an educational web app designed to help you master personal finance. We break down complex jargon into beginner-friendly lessons so you can start investing with confidence",
  
  featureOneTitle: "Interactive Lessons",
  featureOneDescription: "Structured, step-by-step guidance designed to build your knowledge from the ground up.",

  featureTwoTitle: "Jargon Free",
  featureTwoDescription: "We translate complex financial terminology into simple explanations anyone can understand.",

  featureThreeTitle: "Progressive Learning",
  featureThreeDescription: "Modules that evolve with you, taking you from foundational basics to essential investing skills.",

  featureFourTitle: "Inform Decisions",
  featureFourDescription: "Gain the confidence and trusted starting point needed to apply your learning in the real world.",
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
      <section className="overflow-hidden">
        <div className="mx-auto max-w-5xl space-y-4 px-6 pb-16">
          <h1 className="text-3xl font-bold">MakeCents</h1>
          <p>MakesCents is an educational financial literacy web app designed to help individuals who are new to personal finance learn how to invest. Many people want to make better financial decisions but feel overwhelmed by financial jargon and do not know where to start. MakesCents solves this problem by breaking down complex financial concepts into clear, beginner-friendly lessons that teach both foundational knowledge and essential vocabulary.</p>
          <p>MakesCents welcomes people of all ages who are new to managing their finances, such as students, young professionals, and individuals seeking to improve their financial confidence. The application provides structured lessons, simple explanations, and practical learning paths that guide users step-by-step.</p>
          <p>MakesCents key features include interactive lessons, financial terminology explanations, and progressive learning modules that help users over time. </p>
          <p>MakesCents wants to be a trusted starting point for financial education, so that users can have the knowledge they need to make informed financial decisions and apply their learning in the real world.</p>
        </div>
      </section>
      
      {/* <Features11 content={featuresElevenContent}/> */}
    </main>
  );
}
