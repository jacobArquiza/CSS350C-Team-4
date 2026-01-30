import { Header } from "@/components/header";
import ContentSection from "@/components/content-4";

const content = {
    missionStatement: "Empower anyone with a platform to fulfill their financial curiosity anywhere in the world.",
    missionStatementReferences: [
      {
        company: "Phillips",
        link: "https://www.usa.philips.com/a-w/about.html?srsltid=AfmBOopDzldSbV3HL8gR3sutmZ8j3NJSxYnLKIkU2KTiYtG1IC32kfb1"
      },
      {
        company: "Google",
        link: "https://www.google.com/intl/en_uk/search/howsearchworks/our-approach/"
      },
      {
        company: "Microsoft",
        link: "https://www.microsoft.com/en-us/about"
      },
      {
        company: "Sony",
        link: "https://www.sony.com/en/SonyInfo/CorporateInfo/vision/"
      },
      {
        company: "Alibaba",
        link: "https://www.alibabagroup.com/en-US/about-alibaba"
      },
    ],

    coreValues: [
      {
        value: "Excellence",
        description: "Focus on achieving great product",
        icon: "Sparkles",
      },
      {
        value: "Right over Right",
        description: "Focus on having the correct solution over being correct all the time",
        icon: "SearchCheck",
      },
      {
        value: "One Team",
        description: "Team over self",
        icon: "Users",
      },
      {
        value: "Customer Obsession",
        description: "Focus on the customer’s needs and wants",
        icon: "Heart",
      },
      {
        value: "Ownership",
        description: "Own your work, be honest with rights and wrongs",
        icon: "Hand",
      },
    ],

    coreValueReferences: [
      {
        company: "Google",
        link: "https://about.google/company-info/philosophy/"
      },
      {
        company: "Amazon",
        link: "https://www.amazon.jobs/content/en/our-workplace/leadership-principles"
      },
      {
        company: "Qualtrics",
        link: "https://www.qualtrics.com/qualtrics-life/qualtrics-culture-values-tacos/"
      },
      {
        company: "Neflix",
        link: "https://jobs.netflix.com/culture"
      },
      {
        company: "Nvidia",
        link: "https://www.nvidia.com/en-in/about-nvidia/culture-at-nvidia/"
      },
    ],
}

export default function Home() {
  return (
    <main>
      <Header/>
      <ContentSection contentData={content}/>
    </main>
  );
}
