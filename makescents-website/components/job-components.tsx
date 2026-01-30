interface Props{
    title: string,
    list: string[]
}

export default function JobBulletedList({title, list} : Props)
{
    return (
        <div>
            <h2 className="font-bold text-4xl pt-8 pb-4">{title}</h2>
            <ul className="list-disc pl-5 space-y-2">
            {list.map((duty, index) => (
                <li key={index} className="leading-relaxed">
                {duty}
                </li>
            ))}
            </ul>
        </div>

    )
}
