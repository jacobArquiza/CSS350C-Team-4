import { Header } from "@/components/header";
import ContentSection from "@/components/content-4";

const missionStatement = {
    bigText: "Microsoft’s mission is to empower every person and every organization on the planet to achieve more.",
    paragraphOne: "We’re living in an era in which technology has the potential to power awesome advancements across every sector of our economy and society. This places us at a historic intersection of opportunity and responsibility. Our mission has never been more important. To realize it, we must create a future that benefits everyone.",
    paragraphTwo: "",
}

export default function Home() {
  return (
    <main>
      <Header/>
      <ContentSection contentData={missionStatement}/>
    </main>
  );
}
