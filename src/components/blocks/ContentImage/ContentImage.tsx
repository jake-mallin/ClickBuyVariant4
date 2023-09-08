import { Image } from '@/components/utility-components/Image';

const ContentImage = () => (
  
  <section className="root relative bg-white py-16">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto flex flex-col-reverse md:flex-row w-full gap-8 sm:gap-12 md:gap-16 lg:gap-20">
        <div className="aboutText grow-1 w-full md:w-2/3">
          <h1 className="text-[#212D61] text-4xl md:text-5xl mb-6 font-bold">A car buying service you can trust</h1>
          <p className="text-[#6A7492] mb-8">Welcome to Click Car Buy, your trusted partner in selling your car quickly and hassle-free! If you&apos;re looking to sell your car and want a seamless experience, look no further. At Click Car Buy, we pride ourselves on offering top-dollar prices for all types of vehicles, whether they&apos;re old or new, running or not. Our process is designed to be simple and convenient, saving you time and effort.</p>
          <p className="text-[#6A7492] mb-8">When you choose Click Car Buy, you&apos;re choosing a company that values transparency and fair deals. Our team of expert appraisers will assess your car&apos;s value based on its make, model, condition, and market trends, ensuring you receive the best offer possible. Say goodbye to lengthy negotiations and tiresome paperwork because we handle it all for you. Once we agree on a price, we&apos;ll take care of the paperwork and logistics, making the selling process a breeze. Join thousands of satisfied customers who have trusted Click Car Buy to sell their cars quickly and for the right price.</p>
          <p className="text-[#6A7492]">Contact us today, and let us turn your car into cash!</p>

          <div className="aboutText__ctas mt-10 flex flex-wrap gap-6">
            <a href="/sell-my-car" className="btn">Start your quote</a>
            <a href="/contact" className="btn">Get in touch</a>
          </div>
        </div>
        <div className="aboutImage relative w-full md:w-1/3">
          <Image src="/contentImage.jpg" alt="Click Buy Motors" width="200" height="200" className="aspect-square shadow-[8px_8px_0px_#38488A] md:shadow-[16px_16px_0px_#38488A] lg:shadow-[40px_40px_0px_#38488A] rounded-2xl md:rounded-[24px] lg:rounded-[48px] w-full" />
        </div>
      </div>
    </div>
  </section>
);

export default ContentImage;
