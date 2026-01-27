"use client"
import { useState } from 'react';

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
  return (
     <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <ul className="space-y-4">
                {jobs.map((job) => (
                    <li key={job.id} className="p-4 border rounded-lg hover:bg-gray-50">
                    <h3><strong>[{job.year}] [{kEmploymentTypeArray[job.employmentType]}]</strong> {job.title}</h3>
                    <div className="flex flex-row justify-between">
                        <p className="text-sm text-gray-600">{kDisciplineArray[job.discipline]}</p>
                        <p className="text-sm text-gray-600">{job.location}</p>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
    </section>
  );
}