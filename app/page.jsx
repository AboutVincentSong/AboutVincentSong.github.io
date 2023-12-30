import Image from 'next/image';

import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Work from '@/components/Work';
import Reviews from '@/components/Reviews';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Services />
      <br></br>
      <br></br>
      <br></br>
      <Work />
      <Reviews />
    </main>
  )
}
