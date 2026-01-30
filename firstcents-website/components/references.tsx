import Link from "next/link"

interface Props{
    referenceList: {
        company: string,
        link: string
    }[]
}

export default function  References({referenceList} : Props){
    return (
        <p className="text-sm text-gray-600">
            {referenceList.map(({ company, link }, index) => (
                <span key={index}>
                <Link href={link} className="hover:underline font-semibold">
                    {company}
                </Link>
                {index < referenceList.length - 1 && (
                    <span className="mx-2 text-gray-400">•</span>
                )}
                </span>
            ))}
        </p>
    )
}