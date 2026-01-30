import { Button } from '@/components/ui/button'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface ContentProps {
  contentData: {
    bigText: string;
    smallText: string;
    btnText: string;
    btnPath: string;
    imgPath: string;
  };
}

export default function ContentSection({contentData}:ContentProps) {
    return (
        <section className="pt-16 md:pt-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <img
                    className="rounded-(--radius) grayscale"
                    src={contentData.imgPath}
                    alt="team image"
                    height=""
                    width=""
                    loading="lazy"
                />

                <div className="grid gap-6 md:grid-cols-2 md:gap-12">
                    <h2 className="text-4xl font-medium">{contentData.bigText}</h2>
                    <div className="space-y-6">
                        <p>{contentData.smallText}</p>

                        <Button
                            asChild
                            variant="secondary"
                            size="sm"
                            className="gap-1 pr-1.5">
                            <Link href={contentData.btnPath}>
                                {/* <span>Learn More</span> */}
                                <span>{contentData.btnText}</span>
                                <ChevronRight className="size-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
