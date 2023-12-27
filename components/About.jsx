import DevImage from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { User2, MailIcon, PhoneCall, GraduationCap, MapPin, Briefcase, ChevronRightCircle, } from 'lucide-react';

const infoData = [
    {
        icon: <User2 size={20} />,
        text: 'Vincent Song',
    },
    {
        icon: <PhoneCall size={20} />,
        text: '(571)-296-4933',
    },
    {
        icon: <MailIcon size={20} />,
        text: 'dela.vincent.15@gmail.com',
    },
    {
        icon: <MapPin size={20} />,
        text: 'Springfield, VA',
    },
    {
        icon: <GraduationCap size={20} />,
        text: 'Bachelor of Science, Computer Science',
    },
    {
        icon: <Briefcase size={20} />,
        text: 'Software Engineer at theCourseForum',
    },
]

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'University of Virginia',
                qualifictaion: 'B.S. Computer Science',
                years: 'August 2021 - May 2025',
            },
            {
                university: 'West Springfield High School',
                qualifictaion: 'Advanced Studies Diploma',
                years: 'August 2017 - June 2021',
            },
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'theCourseForum',
                role: 'Software Engineer',
                years: 'September 2023 - Present',
            },
            {
                company: 'UVA CS Department',
                role: 'Teaching Assistant',
                years: 'January 2023 - December 2023',
            },
            {
                company: 'Vali Cyber',
                role: 'Engineer Intern',
                years: 'June 2023 - July 2023',
            },
            {
                company: 'TRTCLE',
                role: 'Website Coordinator',
                years: 'August 2022 - December 2022',
            },
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'Programming Languages:',
                list: 'Java, Python, C#, C++, JavaScript, TypeScript, PHP, HTML, CSS, SQL, Bash, Go, R, MATLAB',
            },
            {
                name: 'Tools:',
                list: 'Microsoft Office, Git, PostgreSQL, Docker, Heroku, AWS, Azure, Google Cloud Platform, Selenium',
            },
            {
                name: 'Frameworks:',
                list: 'Django, .NET Core, React, Next.js, Flask, Ruby on Rails, JUnit 5, Bootstrap, TailwindCSS',
            },
        ],
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/AWS-CCP.png',
            },
            {
                imgPath: '/about/AZ-900.png',
            },
        ],
    }
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item)=> item.title === title);
    };
    return (
        <section className='xl-h-[860px] pb-12 xl:py24'>
            <div className="container mx-auto">
                <h2 className="section-title mt-8 mb-8 text-center mx-auto">
                <ChevronRightCircle /> About Me 
                </h2>
                <div className="flex flex-col">
                    <div className="flex-1">
                        <Tabs defaultValue='personal'>
                            <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[720px] md:max-w-[520px] sm:max-w-[420px] border md:grid-cols-3 mx-auto'>
                                <TabsTrigger style={{paddingLeft: '100px', paddingRight: '100px'}}value='personal'>Personal Info</TabsTrigger>
                                <TabsTrigger value='qualifications'>Qualifications</TabsTrigger>
                                <TabsTrigger value='skills'>Skills</TabsTrigger>
                            </TabsList>
                            <div className='text-lg mt-12 xl:mt-8 xl:max-w-[720px] mx-auto '>
                                <TabsContent value='personal'>
                                    <div className='grid xl:grid-cols-2 gap-4 xl:gap-6 mb-12'>
                                        {infoData.map((item, index)=> {
                                            return <div className='flex items-center text-center gap-x-4 mx-auto xl:mx-0' key={index}>
                                                    <div>{item.icon}</div>
                                                    <div>{item.text}</div>
                                                </div>
                                        })}
                                    </div>
                                    <div className="flex flex-col  gap-y-2">
                                        <div className="text-primary text-center">Languages</div>
                                        <div className='border-b border-border'></div>
                                        <div className="text-center">English, Korean, Spanish, Tagalog</div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='qualifications'>
                                    <div className="grid md:grid-cols-2 gap-y-8">
                                        <div className="mx-auto flex flex-col gap-y-6">
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <Briefcase />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'experience').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'experience').data.map((item, index)=> {
                                                    const {company, role, years} = item;
                                                    return (
                                                        <div 
                                                            className="flex gap-x-8 group" 
                                                            key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{role}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{company}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="mx-auto flex flex-col gap-y-6">
                                            <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                                                <GraduationCap />
                                                <h4 className="capitalize font-medium">
                                                    {getData(qualificationData, 'education').title}
                                                </h4>
                                            </div>
                                            <div className="flex flex-col gap-y-8">
                                                {getData(qualificationData, 'education').data.map((item, index)=> {
                                                    const {university, qualifictaion, years} = item;
                                                    return (
                                                        <div 
                                                            className="flex gap-x-8 group" 
                                                            key={index}>
                                                            <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                            </div>
                                                            <div>
                                                                <div className="font-semibold text-xl leading-none mb-2">{qualifictaion}</div>
                                                                <div className="text-lg leading-none text-muted-foreground mb-4">{university}</div>
                                                                <div className="text-base font-medium">{years}</div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value='skills'>
                                    <div className="text-center">
                                        <div className="mb-4">
                                            <h4 className="text-xl font-semibold mb-2">Skills</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div>
                                                {getData(skillData, 'skills').data.map(
                                                    (item, index)=> {
                                                        const {name, list} = item;
                                                        return (
                                                            <div className="w-2/4 text-center mx-auto" key={index}>
                                                                <div className="font-medium">{name}</div>
                                                                <div className="font-small">{list}</div>
                                                                <br></br>
                                                            </div>
                                                        )
                                                })}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2">Certifications</h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div className="flex gap-x-8 justify-center">
                                                {getData(skillData, 'tools').data.map((item, index)=> {
                                                    const {imgPath} = item;
                                                    return <div key={index}>
                                                        <Image src={imgPath} width={100} height={100} alt='' priority/>
                                                    </div>
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default About