
import TeamSection  from "@/components/team";
import { Header } from "@/components/header";


const members = [
    {
        name: 'Emily Kim',
        role: 'Co-Founder - Software Engineer',
        avatar: './emily.png',
        link: '#',
        paragraph: 'Emily is a senior at the University of Washington Bothell, pursuing a Bachelors in Computer Science. She is interested in increasing the accessibility of financial literacy. When not coding, you can find her sipping tea with her cat.',
    },
    {
        name: 'Jacob Arquiza',
        role: 'Co-Founder - Software Engineer',
        avatar: './jacob.png',
        link: '#',
        paragraph: 'Jacob is a junior at the University of Washington Bothell, pursuing a Bachelors in Computer Science. He’s interested in ML and CS Education. He’s passionate about music and art.',
    },
    {
        name: 'Peter Wong',
        role: 'Co-Founder - Software Engineer',
        avatar: './peter.png',
        link: '#',
        paragraph: 'Peter is a junior at the University of Washington Bothell, pursuing a Bachelors in Computer Science and Psychology. He is interested in enhancing human-computer interaction and advancing artificial intelligence for the betterment of society. He likes to play badminton.',
    },
    {
        name: 'Saif Alhasan Sahib',
        role: 'Co-Founder - Software Engineer',
        avatar: './saif.jpg',
        link: '#',
        paragraph: 'Saif is a senior at the University of Washington Bothell, pursuing a Bachelors in Computer Science and Business Management. He is interested in Tech Sales and financial platforms aimed at first-time investors.',
    },
    {
        name: 'Aayam Baidya',
        role: 'Co-Founder - Software Engineer',
        avatar: './aayam.jpg',
        link: '#',
        paragraph: 'Aayam is a junior at the University of Washington Bothell, pursuing a Bachelors in Computer Science. He is interested in creating meaningful customer oriented AI/ML. In this free time, you can catch him cooking, driving or listening to music.',
    },
]


export default function Home() {
  return (
    <main>
      <Header/>
      <TeamSection members={members}/>
    </main>
  );
}
