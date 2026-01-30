"use client"

import { useState } from 'react';
import Link from "next/link"

enum kDiscipline {
    engineering, product, support, marketing_and_communications, business, design_and_creative,
    people_and_talent, finance_and_accounting, legal_and_policy, project_management
}

enum kEmploymentType {
    full_time, internship, part_time, contract, temporary
}
const kDisciplineArray = [
    "Engineering", "Product", "Support", "Marketing and Communications", "Business", "Design and Creative",
    "People and Talent", "Finance and Accounting", "Legal and Policy", "Project Management",
]

const kEmploymentTypeArray = [
    "Full Time", "Internship", "Part Time", "Contract", "Temporary",
]

interface ListProps {
  jobs: {
    id: number,
    title: string,
    location: string,
    year: string,
    discipline: kDiscipline,
    employmentType: kEmploymentType,
  }[]; 
}

export default function JobsList ({ jobs }: ListProps) {
    const [activeDisciplineFilter, setActiveDisciplineFilter] = useState<number | "All">("All");
    let filteredJobs = activeDisciplineFilter === "All" ? jobs : jobs.filter(job => job.discipline === activeDisciplineFilter)
    const [activeEmploymentTypeFilter, setActiveEmploymentTypeFilter] = useState<number | "All">("All");
    
    filteredJobs = activeEmploymentTypeFilter === "All" ? filteredJobs : filteredJobs.filter(job => job.employmentType === activeEmploymentTypeFilter)

    return (
        <section className="py-16 md:py-32">
                <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                    <div className="flex flex-wrap gap-2 border-b pb-8 justify-center">
                        <button 
                            onClick={() => setActiveDisciplineFilter("All")}
                            className={`px-4 py-2 rounded-full text-sm transition ${activeDisciplineFilter === "All" ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                            All Departments
                        </button>
                        {kDisciplineArray.map((name, index) => (
                            <button
                                key={name}
                                onClick={() => setActiveDisciplineFilter(index)}
                                className={`px-4 py-2 rounded-full text-sm transition ${activeDisciplineFilter === index ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-2 border-b pb-8 justify-center">
                        <button 
                            onClick={() => setActiveEmploymentTypeFilter("All")}
                            className={`px-4 py-2 rounded-full text-sm transition ${activeEmploymentTypeFilter === "All" ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                        >
                            All Employment Types
                        </button>
                        {kEmploymentTypeArray.map((name, index) => (
                            <button
                                key={name}
                                onClick={() => setActiveEmploymentTypeFilter(index)}
                                className={`px-4 py-2 rounded-full text-sm transition ${activeEmploymentTypeFilter === index ? 'bg-black text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
                            >
                                {name}
                            </button>
                        ))}
                    </div>
                    <p className="text-right">Showing {filteredJobs.length} of {jobs.length} Jobs</p>
                    <ul className="space-y-4">
                        {filteredJobs.map((job) => (
                            <li key={job.id}>
                                <Link 
                                    href={`/careers/jobs/${job.id}`} 
                                    className="block p-4 border rounded-lg hover:bg-gray-50 transition"
                                >
                                    <h3><strong>[{job.year}] [{kEmploymentTypeArray[job.employmentType]}]</strong> {job.title}</h3>
                                    <div className="flex flex-row justify-between">
                                        <p className="text-sm text-gray-600">{kDisciplineArray[job.discipline]}</p>
                                        <p className="text-sm text-gray-600">{job.location}</p>
                                    </div>
                                    <p className="text-xs text-gray-500 font-bold">JOB ID: {job.id}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
        </section>
    );
}