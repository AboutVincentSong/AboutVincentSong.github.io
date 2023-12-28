import { Award, Goal, UsersRound, ChevronRightCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
    {
        icon: <Award size={72} strokeWidth={0.8} />,
        title: 'Honors/Awards',
        description: 'Dean\'s List (Fall \'21, Spring \'22, Spring \'23) Issued by University of Virginia · Jan 2022; 1st Place Hack TJ 7.5 EastBanc: TransitIQ Issued by TJHSST, EastBanc Technologies · Dec 2020',
    },
    {
        icon: <Goal size={72} strokeWidth={0.8} />,
        title: 'Leadership',
        description: 'UVA: Google DSC Club Executive/Web Developer; WSHS: Vice President of  CSHS, Virginia TSA Video Game Design Team Lead, Robotics Club Co-founder/Secretary.',
    },
    {
        icon: <UsersRound size={72} strokeWidth={0.8} />,
        title: 'Clubs/Organizations',
        description: 'UVA Google DSC, HooHacks, Association for Computing Machinery, Machine Learning Club, UVA Rocketry, Gizmologists, Project: Code, UVA MARS, Data Science and Analytics Club',
    },
];

const Services = () => {
  return (
    <section className='mb-12'>
        <div className='container mx-auto'>
            <h2 className='section-title mb-12 text-center mx-auto'><ChevronRightCircle /> Additional Info</h2>
            <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
                {servicesData.map((item, index) => {
                    return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
                        <CardHeader className='text-primary absolute -top-[60px]'>
                            <div className='w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center'>{item.icon}</div>
                        </CardHeader>
                        <CardContent className='text-center'>
                            <CardTitle className='mb-4'>{item.title}</CardTitle>
                            <CardDescription className='text-lg'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    </section>
  )
}

export default Services