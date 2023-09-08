import { Image } from '@/components/utility-components/Image';
import { RegInput } from '@/components/blocks/RegInput';

const Features = () => (
  <section className="root relative bg-gradient-to-b from-[#F4F9FF] to-white py-10 md:py-20">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1400px] w-full mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-16 lg:gap-20">
        <div className="imageBlock w-full max-w-md col-span-1 mx-auto">
          <Image src="/featuresImage.jpg" alt="Click Buy Motors" width="580" height="750" className="shadow-[8px_8px_0px_#38488A] md:shadow-[16px_16px_0px_#38488A] lg:shadow-[40px_40px_0px_#38488A] rounded-2xl md:rounded-[24px] lg:rounded-[48px] w-full" />
        </div>
        <div className="promoBlock block w-full col-span-1 sm:col-span-2">
          <h3 className="heading text-3xl md:text-4xl text-center md:text-left text-[#212D61] font-bold mb-8">How it works</h3>
          <div className="promoBlock__item relative mb-8">
            <div className="absolute top-0 left-0 flex justify-center items-center text-white text-xl md:text-3xl font-bold bg-[#B1D3FC] rounded-full w-10 md:w-14 h-10 md:h-14">1</div>
            <div className="text-[#38488A] text-2xl md:text-3xl font-bold mb-2 ml-14 md:ml-20">Enter your registration</div>
            <p className="text-[#6A7492] text-md md:text-xl ml-14 md:ml-20">Simply enter your vehicles registration into any of the Enter Reg boxes around our website.</p>
          </div>
          <div className="promoBlock__item relative mb-8">
            <div className="absolute top-0 left-0 flex justify-center items-center text-white text-xl md:text-3xl font-bold bg-[#B1D3FC] rounded-full w-10 md:w-14 h-10 md:h-14">2</div>
            <div className="text-[#38488A] text-2xl md:text-3xl font-bold mb-2 ml-14 md:ml-20">We&apos;ll provide a valuation</div>
            <p className="text-[#6A7492] text-md md:text-xl ml-14 md:ml-20">We&apos;ll contact you with a valuation for your vehicle. You&apos;ll usually receive this within 24 hours.</p>
          </div>
          <div className="promoBlock__item relative mb-8">
            <div className="absolute top-0 left-0 flex justify-center items-center text-white text-xl md:text-3xl font-bold bg-[#B1D3FC] rounded-full w-10 md:w-14 h-10 md:h-14">3</div>
            <div className="text-[#38488A] text-2xl md:text-3xl font-bold mb-2 ml-14 md:ml-20">Get paid for your car!</div>
            <p className="text-[#6A7492] text-md md:text-xl ml-14 md:ml-20">Once everything&apos;s agreed, we&apos;ll arrange collection or delivery and pay you instantly!</p>
          </div>
          <div className="promoBlockCta mt-16">
            <RegInput />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Features;
