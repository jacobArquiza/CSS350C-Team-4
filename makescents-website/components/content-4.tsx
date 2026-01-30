import { Button } from '@/components/ui/button'
import References from './references'

import * as Icons from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ContentProps {
  contentData: {
    missionStatement: string;
    missionStatementReferences: {
      company: string;
      link: string;
    }[]; 
    coreValues: {
      value: string;
      description: string;
      icon: string;
    }[];
    coreValueReferences: {
      company: string;
      link: string;
    }[];
  };
}
export default function ContentSection({contentData}:ContentProps) {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <Image
                    className="rounded-(--radius) opacity-[0.9]"
                    // className="rounded-(--radius) grayscale"
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Abstract Object"
                    height="30000"
                    width="3000"
                />
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <div className="grid-rows-2">
                        <h2 className="text-4xl font-medium">{contentData.missionStatement}</h2>
                        <p className="text-sm text-gray-600 pt-5 font-bold">References:</p>
                        <div className="space-y-6 relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-5">
                            <References referenceList={contentData.missionStatementReferences}/>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-3xl font-medium pb-4">Our core values</h2>
                        <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-2">
                        {contentData.coreValues.map(({ value, description, icon }, index) => {
                            const IconComponent = (Icons as any)[icon];
                            return (
                                <div key={index} className="space-y-3">
                                    <div className="flex items-center gap-2">
                                        {IconComponent ? (
                                            <IconComponent className="size-4" />
                                        ) : (
                                            <div className="size-4 bg-gray-200 rounded-full" /> 
                                        )}
                                        <h3 className="font-bold">{value}</h3>
                                    </div>
                                    <p className="text-sm text-gray-500">{description}</p>
                                </div>
                            );
                        })}
                        </div>
                        <div className="">
                            <p className="text-sm text-gray-600 pt-5 font-bold text-right">References:</p>
                            <References referenceList={contentData.coreValueReferences}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
