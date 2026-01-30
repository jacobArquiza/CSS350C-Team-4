import { Header } from "@/components/header";
import ContentSection from "@/components/content-3";
import JobsList from "@/components/jobs";

const data = {
    bigText: "Join us in building a more financially literate future.",
    smallText: "As we grow, we're actively searching for new talent to join us in our mission. Become part of our community and build something special with us.",
    btnText: "Meet the Team",
    btnPath: "/about",
    imgPath: "https://images.unsplash.com/photo-1530099486328-e021101a494a?q=80&w=2747&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}

enum kDiscipline {
    engineering, product, support, marketing_and_communications, business, design_and_creative,
    people_and_talent, finance_and_accounting, legal_and_policy, project_management
}

enum kEmploymentType {
    full_time, internship, part_time, contract, temporary
}

const jobs = [
    {
        id: 1001,
        title:"Marketing Coorindator",
        location:"Bothell, WA",
        year:"2026",
        discipline: kDiscipline.marketing_and_communications,
        employmentType: kEmploymentType.full_time,
    },
    {
        id: 1002,
        title:"Fiduciary Associate",
        location:"Bothell, WA",
        year:"2026",
        discipline: kDiscipline.finance_and_accounting,
        employmentType: kEmploymentType.full_time,
    }
]

export default function Home() {
  return (
    <main>
        <Header/>
        <ContentSection contentData={data}/>
        <JobsList jobs={jobs}/>
    </main>
  );
}
