import { JOBS_DATA } from "@/lib/jobs";
import JobListing from "@/components/job-listing";
import { notFound } from "next/navigation";
import { Header } from "@/components/header";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  console.log(id)

  // Find the job in our array
  const job = JOBS_DATA.find((j) => j.id === id);

  // If the ID isn't in our array, show the 404 page
  if (!job) {
    notFound();
  }

  return (
    <main>
        <Header/>
        <JobListing job={job} />
    </main>
  );
}