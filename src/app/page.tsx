import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/blocks/Hero';
import { Features } from '@/components/blocks/Features';
import { Features2 } from '@/components/blocks/Features2';
import { Carousel } from '@/components/blocks/Carousel';
import { ContentImage } from '@/components/blocks/ContentImage';

export default function Home() {
  return (
    <main className="root">
      <Header />
      
      <Hero />

      <Features />
      <Features2  />

      <ContentImage />

      <Carousel />
      
      <Footer />
    </main>
  )
}
