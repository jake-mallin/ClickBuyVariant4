import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { PageHeader } from '@/components/blocks/PageHeader';
import { PromoBanner } from '@/components/blocks/PromoBanner';
import { Address } from '@/components/blocks/Address';
import { OpeningHours } from '@/components/blocks/OpeningHours';
import { ContactForm } from '@/components/blocks/ContactForm';
import { Map } from '@/components/blocks/Map';
import { Carousel } from '@/components/blocks/Carousel';

export default function SellMyCar() {
  return (
    <main className="">
      <Header />

      {/* <PageHeader /> */}

      <section className="root relative bg-white pt- before:bg-gradient-to-b before:from-[#F4F9FF] before:to-white before:absolute before:top-[100%] before:left-0 before:w-full before:h-96">

        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1600px] mx-auto">
            
            <div className="pageHeader relative min-h-[240px] md:min-h-[360px] lg:min-h-[420px] flex flex-col items-center justify-center gap-10 sm:flex-row py-12 md:py-16 lg:py-20 overflow-hidden before:bg-gradient-to-b before:from-[#F4F9FF] after:to-white">
              <div className="pageHeaderMessage max-w-[800px] px-4 md:px-8 pt-6 pb-12 md:pt-12 md:pb-12 text-center">
                <h1 className="relative text-[#212D61] font-bold text-3xl md:text-5xl mb-6">Contact Us</h1>
                <p className="relative text-[#4F77E3] text-xl md:text-[26px]">We&apos;re available to contact 24/7. We&apos;ll get back to you the next working day.</p>
              </div>
            </div>

          </div>
        </div>

      </section>

      <section className="root py-10 sm:py-20">
        <div className="wrapper px-4 md:px-8">
          <div className="container max-w-[1600px] mx-auto">
            
            <div className="relative sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-12 md:gap-20">
              <div className="contactWidget contactWidget--contact">
                <div className="contactHeading text-[#212D61] mb-4 text-xl md:text-2xl font-bold flex items-center gap-2">
                  <svg className="fill-[#EC008C] h-6 w-6" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><path  d="m29.474 9.12-13-7c-.295-.159-.652-.159-.947 0l-13 7c-.325.174-.527.512-.527.88v19c0 .552.447 1 1 1h26c.553 0 1-.448 1-1v-19c0-.368-.202-.706-.526-.88zm-20.474 10.88h14v3h-14zm14-2h-14v-3h14zm-14 10v-3h14v3zm19 0h-3v-14c0-.552-.447-1-1-1h-16c-.553 0-1 .448-1 1v14h-3v-17.403l12-6.461 12 6.461z"/></svg>
                  Our dealership
                </div>
                <div className="contactAddress">
                  <Address />
                </div>
                <div className="contactContacts mb-8">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="tel:01782478220" className="flex items-center gap-2 text-[#212D61] hover:text-[#EC008C] font-normal">
                        <i className="contactContact__icon">
                          <svg className="fill-[#EC008C] h-6 w-6" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m28.316 21.052-6-2c-.394-.133-.827-.006-1.09.315l-1.488 1.818c-4.072-1.651-7.273-4.853-8.925-8.924l1.819-1.487c.321-.263.447-.697.316-1.091l-2-6c-.136-.408-.517-.683-.948-.683h-2.313c-2.584 0-4.687 2.102-4.687 4.686-.002 5.692 2.214 11.044 6.238 15.071 4.025 4.026 9.377 6.243 15.07 6.243 2.587 0 4.692-2.105 4.692-4.692v-2.308c0-.431-.275-.812-.684-.948zm-1.316 3.256c0 1.484-1.208 2.692-2.692 2.692-5.159 0-10.008-2.009-13.655-5.657s-5.654-8.498-5.653-13.657c0-1.481 1.206-2.686 2.687-2.686h1.592l1.554 4.662-1.843 1.508c-.328.268-.451.712-.309 1.11 1.845 5.17 5.869 9.194 11.04 11.039.396.143.842.02 1.11-.309l1.508-1.843 4.661 1.554z"/></svg>
                        </i> 01782 478220
                      </a>
                    </li>
                    <li>
                      <a href="mailto:enquiries@clickdealer.co.uk" className="flex items-center gap-2 text-[#212D61] hover:text-[#EC008C] font-normal">
                        <i className="contactContact__icon">
                          <svg className="fill-[#EC008C] h-6 w-6" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m26 15h-20c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-11c0-1.103-.897-2-2-2zm-1.944 2-8.056 4.834-8.056-4.834zm-18.056 11v-9.834l9.485 5.691c.314.189.712.191 1.029 0l9.486-5.691.001 9.834z"/><path d="m15 12v-6.586l-2.293 2.293c-.391.391-1.023.391-1.414 0s-.391-1.023 0-1.414l3.999-3.999c.391-.392 1.03-.387 1.416 0l3.999 3.999c.391.391.391 1.023 0 1.414s-1.023.391-1.414 0l-2.293-2.293v6.586c0 .552-.447 1-1 1s-1-.448-1-1z"/></svg>
                        </i> enquiries@clickdealer.co.uk
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="contactWidget contactWidget--hours">
                <div className="contactHeading text-[#212D61] mb-4 text-xl md:text-2xl font-bold flex items-center gap-2">
                  <svg className="fill-[#EC008C] h-6 w-6" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m27 4h-3v-1c0-.553-.447-1-1-1s-1 .447-1 1v1h-12v-1c0-.553-.447-1-1-1s-1 .447-1 1v1h-3c-1.654 0-3 1.346-3 3v20c0 1.654 1.346 3 3 3h22c1.654 0 3-1.346 3-3v-20c0-1.654-1.346-3-3-3zm1 23c0 .552-.448 1-1 1h-22c-.552 0-1-.448-1-1v-17h24zm0-19h-24v-1c0-.552.448-1 1-1h3c0 .553.447 1 1 1s1-.447 1-1h12c0 .553.447 1 1 1s1-.447 1-1h3c.552 0 1 .448 1 1z"/><path d="m16 26c3.859 0 7-3.141 7-7s-3.141-7-7-7-7 3.141-7 7 3.141 7 7 7zm0-12c2.757 0 5 2.243 5 5s-2.243 5-5 5-5-2.243-5-5 2.243-5 5-5z"/><path d="m15 19v-3c0-.553.447-1 1-1s1 .447 1 1v2h2c.553 0 1 .447 1 1s-.447 1-1 1h-3c-.553 0-1-.447-1-1z"/></svg>
                  Opening Hours
                </div>
                <OpeningHours />
              </div>

              <div className="contactWidget contactWidget--form row-span-2">
                <div className="contactHeading text-[#212D61] mb-4 text-xl md:text-2xl font-bold flex items-center gap-2">
                  <svg className="fill-[#EC008C] h-6 w-6" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m25 2h-18c-2.757 0-5 2.243-5 5v12c0 2.757 2.243 5 5 5h3.531l4.7 5.64c.191.228.472.36.769.36s.578-.132.769-.36l4.7-5.64h3.531c2.757 0 5-2.243 5-5v-12c0-2.757-2.243-5-5-5zm3 17c0 1.654-1.346 3-3 3h-4c-.297 0-.578.132-.769.36l-4.231 5.078-4.231-5.078c-.191-.228-.472-.36-.769-.36h-4c-1.654 0-3-1.346-3-3v-12c0-1.654 1.346-3 3-3h18c1.654 0 3 1.346 3 3z"/><path d="m24 18c0 .552-.447 1-1 1h-14c-.553 0-1-.448-1-1s.447-1 1-1h14c.553 0 1 .448 1 1z"/><path d="m24 13c0 .552-.447 1-1 1h-14c-.553 0-1-.448-1-1s.447-1 1-1h14c.553 0 1 .448 1 1z"/><path d="m24 8c0 .552-.447 1-1 1h-9c-.553 0-1-.448-1-1s.447-1 1-1h9c.553 0 1 .448 1 1z"/></svg>
                  Get in touch
                </div>
                <ContactForm />
              </div>

              <div className="contactWidget contactWidget--map col-span-2">
                <div className="contactHeading text-[#212D61] mb-4 text-xl md:text-2xl font-bold flex items-center gap-2">
                  <svg className="fill-[#EC008C] h-6 w-6" enable-background="new 0 0 32 32" height="512" viewBox="0 0 32 32" width="512" xmlns="http://www.w3.org/2000/svg"><path d="m18 11c0-2.206-1.794-4-4-4s-4 1.794-4 4 1.794 4 4 4 4-1.794 4-4zm-6 0c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2z"/><path d="m29.924 19.617c-.154-.373-.52-.617-.924-.617h-9.799c1.5-2.394 2.799-5.241 2.799-7.941 0-4.444-3.589-8.059-8-8.059s-8 3.615-8 8.059c0 3.324 1.963 6.864 3.854 9.511l-7.518 6.683c-.311.276-.418.715-.271 1.103s.52.644.935.644h18c.266 0 .52-.105.707-.293l8-8c.286-.286.372-.716.217-1.09zm-21.924-8.558c0-3.341 2.691-6.059 6-6.059s6 2.718 6 6.059c0 3.875-3.4 8.586-6 11.476-2.581-2.865-6-7.589-6-11.476zm12.586 15.941h-14.956l5.434-4.83c1.175 1.466 2.123 2.431 2.228 2.536.393.394 1.029.388 1.416 0 .131-.132 1.567-1.586 3.131-3.707h8.747z"/></svg>
                  Map
                </div>
                <Map />
              </div>

            </div>

          </div>
        </div>
      </section>

      <PromoBanner />

      <Carousel />

      <Footer />

    </main>
  )
}
