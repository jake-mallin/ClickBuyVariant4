import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/blocks/PageHeader';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { Carousel } from '@/components/blocks/Carousel';
import { ContentImageSteps } from '@/components/blocks/ContentImageSteps';

export default function SellMyCar() {
  return (
    <main className="">
      <Header />

      {/* <PageHeader /> */}

      <section className="root relative bg-white before:bg-gradient-to-b before:from-[#F4F9FF] before:to-white before:absolute before:top-[100%] before:left-0 before:w-full before:h-96">

        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1600px] mx-auto">
            
            <div className="pageHeader relative min-h-[240px] md:min-h-[360px] lg:min-h-[420px] flex flex-col items-center justify-center gap-10 sm:flex-row py-12 md:py-16 lg:py-20 overflow-hidden">
              <div className="pageHeaderMessage max-w-[800px] px-4 md:px-8 pt-6 pb-12 md:pt-12 md:pb-12 text-center">
                <h1 className="relative text-[#212D61] font-bold text-3xl md:text-5xl mb-6">How does it work?</h1>
                <p className="relative text-[#4F77E3] text-xl md:text-[26px]">Our simple 3 step process makes everything seamless</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      <ContentImageSteps />

      <PromoBanner />

      <Carousel />

      <Footer />
    </main>
  )
}
