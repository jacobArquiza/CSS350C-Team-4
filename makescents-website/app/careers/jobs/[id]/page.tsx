import { JOBS_DATA } from "@/lib/jobs";
import JobListing from "@/components/job-listing";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";
import References from "@/components/references";


interface Job {
    id: string; // Add this to match JOBS_DATA
    title: string;
    location: string;
    discipline: string;
    type: string;
    pay: string;
    jobOverview: string;
    jobDuties: string[];
    requiredSkills: string[];
    desiredSkills: string[];
    references?: {
      company: string;
      link: string;
    }[];
}


export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log(id)

  const job = JOBS_DATA.find((j) => j.id === id);

  if (!job) {
    notFound();
  }

  return (
    <main>
        <Header/>
        <JobListing job={job} />
        <div className = "pb-16 mx-auto max-w-5xl px-6">
          <p className="text-sm text-gray-600 pt-5 font-bold">References:</p>
          <References referenceList={job.references || []} />
        </div>
    </main>
  );
}