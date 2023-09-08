import { Image } from '@/components/utility-components/Image';
import { RegInput } from '@/components/blocks/RegInput';

const Hero = () => (
  <section className="root relative overflow-hidden bg-white pt-16 sm:pt-24">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto">
        <div className="heroUnit flex flex-col-reverse items-center justify-center sm:flex-row gap-8 py-12 sm:py-16 md:py-20">
          <div className="heroMessage w-full sm:w-1/2 text-center sm:text-left">
            <h2 className="text-[#212D61] text-4xl sm:leading-relaxed md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6">Sell your car in seconds</h2>
            <p className="text-[#4F77E3] text-l md:text-2xl lg:text-4xl mb-8 sm:mb-12">Get an instant cash offer and vehicle pickup on your schedule.</p>
            <RegInput />
          </div>
          <div className="heroImage w-full sm:w-1/2">
            <Image src="/heroImage.svg" alt="Click Buy Motors" width="1" height="1" className="max-h-32 sm:max-h-48 md:max-h-64 lg:max-h-96 w-full" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
