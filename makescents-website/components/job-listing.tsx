import JobBulletedList from "./job-components";

interface JobListingProps {
  job: {
    title: string;
    location: string;
    discipline: string;
    type: string;
    pay: string;
    jobOverview: string,
    jobDuties: string[],
    requiredSkills: string[],
    desiredSkills: string[],
  };
}

export default function JobListing({ job }: JobListingProps) {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <header>
          <p className="text-blue-600 font-medium uppercase tracking-wider text-sm">
            {job.discipline}
          </p>
          <h1 className="text-5xl font-bold mt-2">{job.title}</h1>
          <div className="flex gap-4 mt-4 text-gray-500">
            <span>{job.location}</span>
            <span>•</span>
            <span>{job.type}</span>
            <span>•</span>
            <span className="text-green-600 font-semibold">{job.pay}</span>
          </div>
        </header>

        <hr />

        <div className="prose max-w-none">
          <p className="whitespace-pre-wrap leading-relaxed">
            {job.jobOverview}
          </p>
          <JobBulletedList title={"Job Duties"} list = {job.jobDuties}/>
          <JobBulletedList title={"Required Skills"} list = {job.requiredSkills}/>
          <JobBulletedList title={"Desired Skills"} list = {job.desiredSkills}/>
        </div>
      </div>
    </section>
  );
}