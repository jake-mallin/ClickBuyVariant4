import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/blocks/PageHeader';
import { Features2 } from '@/components/blocks/Features2';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { Carousel } from '@/components/blocks/Carousel';

export default function SellMyCar() {
  return (
    <main className="">
      <Header />
      <PageHeader />

      {/* <ContentBlock /> */}

      <section className="root relative py-10 sm:py-20">
        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1200px] mx-auto">
            <p className="text-center">When you choose Click Car Buy, you&apos;re choosing a company that values transparency and fair deals. Our team of expert appraisers will assess your car&apos;s value based on its make, model, condition, and market trends, ensuring you receive the best offer possible. Say goodbye to lengthy negotiations and tiresome paperwork because we handle it all for you. Once we agree on a price, we&apos;ll take care of the paperwork and logistics, making the selling process a breeze. Join thousands of satisfied customers who have trusted Click Car Buy to sell their cars quickly and for the right price.</p>
          </div>
        </div>
      </section>

      <Features2 />

      <PromoBanner />

      <Carousel />

      <Footer />
    </main>
  )
}
