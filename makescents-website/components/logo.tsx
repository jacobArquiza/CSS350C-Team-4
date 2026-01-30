import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('relative flex items-center gap-2', className)}>
            <Image
                src="/MakesCents-Logo.png" // Ensure your PNG is in the /public folder
                alt="MakesCents Logo"
                width={120}    // Adjust based on your PNG's aspect ratio
                height={30}
                className={cn(
                    "h-6 w-auto transition-all duration-300",
                    // Use filters to mimic "uniColor" if needed
                    uniColor && "brightness-0 invert dark:brightness-0 dark:invert-0" 
                )}
                priority
            />
        </div>
    )
}

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <div className={cn('relative', className)}>
            <Image
                src="/logo-icon.png" // A square version of your logo
                alt="MakesCents Icon"
                width={32}
                height={32}
                className={cn(
                    "size-5 transition-all duration-300",
                    uniColor && "brightness-0 invert"
                )}
            />
        </div>
    )
}