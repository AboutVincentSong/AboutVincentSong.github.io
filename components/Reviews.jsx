'use client';

import Image from "next/image";
import { useTheme } from 'next-themes';

import { ChevronRightCircle } from 'lucide-react';

import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const reviewsData = [
    {
        avatar: '/reviews/asd.png',
        name: 'Operating Systems',
        job: 'CS 4414 / CS 6456',
        review: 'Topics Include: Agile Methodologies, Requirements Elicitation/Specification, Risk Management, Django, Heroku, DevOps, MVC Architecture, Usability, Personas/Wireframes, Verification/Validation, SE Code of Ethics, DEI, Security, Maintenance, and Licensing.'
    },
    {
        avatar: '/reviews/dsa2.png',
        name: 'Database Systems',
        job: 'CS 4750',
        review: 'Topics Include: Graphs, BFS/DFS, Topological Sorting, Dijkstra\'s Algorithm, Divide & Conquer Algorithms, Master Theorem, Greedy Algorithms, Minimum Spanning Trees, Huffman Coding, Dynamic Programming, Network Flow, Reductions, and Machine Learning Algorithms.'
    },
    {
        avatar: '/reviews/softwaretesting.png',
        name: 'Internet Scale Applications',
        job: 'CS 4260',
        review: 'Topics Include: Faults, Errors, Failures, RIPR Model, Model Driven Test Design (MDTD), Test Automation w/ JUnit 5 and Selenium; Input-Space Partition (ISP), Graph-based, Logic-based, Syntax-based, and Bypass Testing; Test-Driven Development (TDD).'
    },
    {
        avatar: '/reviews/cybersecurity.png',
        name: 'Machine Learning',
        job: 'CS 4774 / CS 6316',
        review: 'Topics Include: Encryption, Networking, Web Security, Anonymity, SQL Injection Attacks, Cross Site Scripting (CSS), Cross-Site Request Forgery (CSRF) Cryptocurrency, Rootkits, Viruses, Buffer Overflows, Binary Exploits, Digital Forensics, and Virtual Machines.'
    },
    {
        avatar: '/reviews/sde.png',
        name: 'Natural Language Processing',
        job: 'CS 6770',
        review: 'Topics Include: Java, Git, Build Tools (Gradle), Whitebox/Blackbox Testing (Mockito), Defensive Programming, Refactoring, Functional Programming, Integration, Software Design Principles, GUI, Design Patterns, JSON, Web-Services, SQLite, JDBC, Hibernate.'
    },
    {
        avatar: '/reviews/dsa1.png',
        name: '2D + 3D Computer Vision',
        job: 'CS 4501 / CS 6501',
        review: 'Topics Include: Interfaces, Polymorphism, Vectors, Java Generics, Linked Lists/Iterators, Stacks/Queues, Big-O Notation, Amortized Analysis, BST/AVL Trees, Insertion Sort, Mergesort, Quicksort, Hash Tables, Priority Queues/Binary Heap, and Concurrency/Threads.'
    },
]

const Reviews = () => {
  const { theme } = useTheme();
  return (
    <section className="mb-12 xl:mb-32">
        <div className="container mx-auto">
            <h2 className="section-title mb-12 text-center mx-auto"><ChevronRightCircle />Relevant Coursework</h2>
            <Swiper 
                slidesPerView={1} 
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{
                    clickable: true
                }}
                className={`h-[350px] ${theme === 'dark' ? 'dark-slider-bullets' : ''}`}
            >
                {reviewsData.map((person, index)=>{
                    return <SwiperSlide key={index}>
                        <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                            <CardHeader className="p-0 mb-4">
                                <div className="flex items-center gap-x-4">
                                    <Image 
                                        src={person.avatar}
                                        width={70}
                                        height={70}
                                        alt=''
                                        priority
                                        className={`${theme === 'dark' ? 'white-logo' : ''}`}
                                    />
                                    <div className="flex flex-col">
                                        <CardTitle>{person.name}</CardTitle>
                                        <p>{person.job}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardDescription className="text-md text-muted-foreground">
                                {person.review}
                            </CardDescription>
                        </Card>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
    </section>
  )
}

export default Reviews