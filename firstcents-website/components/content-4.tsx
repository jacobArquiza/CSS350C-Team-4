import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

interface ContentProps {
  contentData: {
    bigText: string;
    paragraphOne: string,
    paragraphTwo: string,
  };
}

export default function ContentSection({contentData}:ContentProps) {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-5xl px-6">
                <Image
                    className="pb-32"
                    // src="https://ik.imagekit.io/lrigu76hy/tailark/abstract-bg.jpg?updatedAt=1745733473768"
                    src="/watercolor.png"
                    alt="Abstract Object"
                    height="3500"
                    width="3000"
                />
                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">{contentData.bigText}</h2>
                    <div className="space-y-6">
                        <p>{contentData.paragraphOne}</p>
                        <p>
                            {contentData.paragraphTwo}
                        </p>
                        {/* <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href="#">
                                <span>Learn More</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button> */}
                    </div>
                </div>
            </div>
        </section>
    )
}
