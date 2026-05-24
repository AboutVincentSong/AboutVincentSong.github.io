import { Award, Goal, UsersRound, ChevronRightCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const servicesData = [
    {
        icon: <Award size={72} strokeWidth={0.8} />,
        title: 'Honors/Awards',
        description: 'Highest Distinction, B.S. in Computer Science; UVA Engineering Dean\'s List; Honor of living in 52 East Range, part of the Academical Village; 1st Place Hack TJ 7.5 — EastBanc TransitIQ.',
    },
    {
        icon: <Goal size={72} strokeWidth={0.8} />,
        title: 'Leadership',
        description: 'Google Developer Groups executive and webmaster, teaching assistant experience, and long-running student leadership in CS, robotics, and software teams.',
    },
    {
        icon: <UsersRound size={72} strokeWidth={0.8} />,
        title: 'Clubs/Organizations',
        description: 'Active across engineering communities including Google Developer Groups, theCourseForum, HooHacks, ACM, ML Club, UVA Rocketry, and Project: Code.',
    },
];

const Services = () => {
  return (
    <section className='py-16'>
        <div className='container mx-auto'>
            <div className='mx-auto mb-12 max-w-[760px] text-center'>
              <h2 className='section-title mb-4 text-center mx-auto'><ChevronRightCircle /> Awards, Leadership, and Involvement</h2>
            </div>
            <div className='grid xl:grid-cols-3 justify-center gap-6'>
                {servicesData.map((item, index) => {
                    return <Card className='w-full max-w-[424px] min-h-[270px] flex flex-col justify-center border-border/70 bg-background/80 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl' key={index}>
                        <CardHeader className='text-primary p-0'>
                            <div className='mb-5 flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10'>{item.icon}</div>
                        </CardHeader>
                        <CardContent className='p-0'>
                            <CardTitle className='mb-3 text-xl'>{item.title}</CardTitle>
                            <CardDescription className='text-base leading-relaxed'>{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                })}
            </div>
        </div>
    </section>
  )
}

export default Services
