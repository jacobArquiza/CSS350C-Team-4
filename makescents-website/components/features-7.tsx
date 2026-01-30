import { BookOpenText as Book, Languages, CircleFadingArrowUp as Progress, Brain } from 'lucide-react'
import Image from 'next/image'

interface props {
    content: {
        title: string,
        subtitle: string,
        
        featureOneTitle: string,
        featureOneDescription: string,

        featureTwoTitle: string,
        featureTwoDescription: string,

        featureThreeTitle: string,
        featureThreeDescription: string,

        featureFourTitle: string,
        featureFourDescription: string,
    }
}

export default function FeaturesSection({content}: props) {
    return (
        <section className="overflow-hidden py-16 md:py-32">
            <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-4xl font-semibold lg:text-5xl">{content.title}</h2>
                    <p className="mt-6 text-lg">{content.subtitle}</p>
                </div>
                <div className="mask-b-from-75% mask-l-from-75% mask-b-to-95% mask-l-to-95% relative -mx-4 pr-3 md:-mx-12">
                    <div className="perspective-midrange">
                        <div className="rotate-x-6 -skew-2">
                            <div className="aspect-88/36 relative">
                                <Image
                                    src="https://images.unsplash.com/photo-1722503585597-548c99b0320c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                    className="absolute inset-0 z-10"
                                    alt="payments illustration dark"
                                    width={2797}
                                    height={1137}
                                />
                                {/* <Image
                                    src="/mail-back.png"
                                    className="hidden dark:block"
                                    alt="payments illustration dark"
                                    width={2797}
                                    height={1137}
                                />
                                <Image
                                    src="/mail-back-light.png"
                                    className="dark:hidden"
                                    alt="payments illustration light"
                                    width={2797}
                                    height={1137}
                                /> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
                    <div className="space-y-3">
                        <div className="flex items-center gap-2">
                            <Book className="size-4" />
                            <h3 className="text-sm font-medium">{content.featureOneTitle}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{content.featureOneDescription}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Languages className="size-4" />
                            <h3 className="text-sm font-medium">{content.featureTwoTitle}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{content.featureTwoDescription}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Progress className="size-4" />
                            <h3 className="text-sm font-medium">{content.featureThreeTitle}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{content.featureThreeDescription}</p>
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2">
                            <Brain className="size-4" />

                            <h3 className="text-sm font-medium">{content.featureFourTitle}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">{content.featureFourDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
