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
        avatar: '/reviews/os.png',
        name: 'Operating Systems',
        job: 'CS 4414 / CS 6456',
        review: 'Topics Include: Baremetal Programming (UART/printf, Timers & Interrupts), Embedded Scheduling, Memory Allocation & Task Management, Virtual Memory & User/Kernel Separation, System Calls, Filesystems (xv6, FAT32), Device Drivers (USB & Sound), libc (newlib), Raspberry Pi Development, Multicore Processing, and DOOM on GameHAT.'
    },
    {
        avatar: '/reviews/db.png',
        name: 'Database Systems',
        job: 'CS 4750',
        review: 'Topics Include: Database Design (ER Modeling, Normalization), SQL & Relational Algebra, Indexing & Transaction Processing, Database Programming & Interfacing, Relational & NoSQL Databases, Distributed Databases & Scaling, Load Balancing, Caching, Content Delivery Networks, Storage Systems (Object Storage, Data Warehouses), and Messaging Queues.'
    },
    {
        avatar: '/reviews/internet.png',
        name: 'Internet Scale Applications',
        job: 'CS 4260',
        review: 'Topics Include: HTTP & CGI, Monolithic and Microservice Architecture, JavaScript & the DOM, Events & CSS, JavaScript Objects & Classes, JSON & Asynchronous Programming, Modals & Node, Microservices, Databases (SQL & NoSQL), Databases at Scale & CRUD, Authentication, Virtualization, Platforms & Orchestration, Load Testing, and Software Testing.'
    },
    {
        avatar: '/reviews/ml.png',
        name: 'Machine Learning',
        job: 'CS 4774 / CS 6316',
        review: 'Topics Include: Linear Models for Regression and Classification, Bayesian Inference & Decision Theory, Kernel Methods & Support Vector Machines, Neural Networks, Graphical Models & Bayesian Networks, Mixture Models & Clustering, Expectation-Maximization (EM) Algorithm, Dimensionality Reduction & PCA, and Hidden Markov Models.'
    },
    {
        avatar: '/reviews/nlp.png',
        name: 'Natural Language Processing',
        job: 'CS 6770',
        review: 'Topics Include: Text Classification, Word Embeddings (LSA, Word2Vec), Language Modeling (n-gram & Neural LMs), Statistical Machine Translation, Sequence-to-Sequence Models, Text Generation & Summarization, Transformers (GPT, BERT), Parameter-Efficient Fine-Tuning, In-Context Learning & LLM Practice, and NLP Applications for Science and Society.'
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