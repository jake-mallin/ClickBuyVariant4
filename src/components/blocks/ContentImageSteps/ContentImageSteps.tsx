import { Image } from '@/components/utility-components/Image';

const ContentImageSteps = () => (
  <div className="root relative py-12 md:py-20">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto flex flex-col gap-8 md:gap-16 lg:gap-20">
        <section className="relative flex flex-col sm:flex-row gap-8 md:gap-16 lg:gap-20">
          <div className="aboutText w-full order-2 sm:order-1">
            <h2 className="text-[#121740] text-2xl md:text-3xl mb-6 font-bold flex items-center">
              <div className="flex justify-center items-center text-white text-3xl font-bold bg-[#1AB1F5] rounded-full aspect-square w-10 md:w-14 h-10 md:h-14 mr-6">1</div>
              Profile your vehicle
            </h2>
            <p className="text-[#6A7492] text-xl mb-8">By entering your registration into our valuation tool, we can fetch the majority of details about your vehicle.</p>
            <p className="text-[#6A7492] text-xl">By letting us know a few extra details such as the vehicle condition and mileage, we can more accurately value your vehicle.</p>
          </div>
          <div className="aboutImage relative w-full max-w-[480px] order-1 sm:order-2">
            <Image src="/step1.jpg" alt="Click Buy Motors" width="200" height="200" className="aspect-square shadow-[8px_8px_0px_#38488A] md:shadow-[16px_16px_0px_#38488A] lg:shadow-[40px_40px_0px_#38488A] rounded-2xl md:rounded-[24px] lg:rounded-[48px] w-full" />
          </div>
        </section>
        
        <section className="relative flex flex-col sm:flex-row gap-8 md:gap-16 lg:gap-20">
          <div className="aboutImage relative w-full max-w-[480px] order-1 sm:order-1">
            <Image src="/step2.jpg" alt="Click Buy Motors" width="200" height="200" className="aspect-square shadow-[8px_8px_0px_#38488A] md:shadow-[16px_16px_0px_#38488A] lg:shadow-[40px_40px_0px_#38488A] rounded-2xl md:rounded-[24px] lg:rounded-[48px] w-full" />
          </div>
          <div className="aboutText w-full order-2">
            <h2 className="text-[#121740] text-2xl md:text-3xl mb-6 font-bold flex items-center">
              <div className="flex justify-center items-center text-white text-3xl font-bold bg-[#1AB1F5] rounded-full aspect-square w-10 md:w-14 h-10 md:h-14 mr-6">2</div>
              Get a valuation
            </h2>
            <p className="text-[#6A7492] text-xl">Usually within 48 business hours, we will send you a valuation of your vehicle based on the information that you have provided to us.</p>
          </div>
        </section>

        <section className="relative flex flex-col sm:flex-row gap-8 md:gap-16 lg:gap-20">
          <div className="aboutText w-full order-2 sm:order-1">
            <h2 className="text-[#121740] text-2xl md:text-3xl mb-6 font-bold flex items-center">
              <div className="flex justify-center items-center text-white text-3xl font-bold bg-[#1AB1F5] rounded-full aspect-square w-10 md:w-14 h-10 md:h-14 mr-6">3</div>
              We will collect your vehicle!
            </h2>
            <p className="text-[#6A7492] text-xl">Wherever you are in the UK, we will come and collect your vehicle free of charge!</p>
          </div>
          <div className="aboutImage relative w-full max-w-[480px] order-1 sm:order-2">
            <Image src="/step3.jpg" alt="Click Buy Motors" width="200" height="200" className="aspect-square shadow-[8px_8px_0px_#38488A] md:shadow-[16px_16px_0px_#38488A] lg:shadow-[40px_40px_0px_#38488A] rounded-2xl md:rounded-[24px] lg:rounded-[48px] w-full" />
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default ContentImageSteps;
