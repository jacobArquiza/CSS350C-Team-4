import Image from "next/image";
import Hero from "../../components/hero-section"
import TeamSection  from "@/components/team";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main>
      <Header/>
      <TeamSection/>
    </main>
  );
}
