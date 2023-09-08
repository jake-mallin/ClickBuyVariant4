const PromoBanner = () => (
  <section className="root relative bg-gradient-to-r from-[#212D61] to-[#3E5CB1] py-10 md:py-20">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto flex flex-col md:flex-row justify-center md:items-center md:justify-between gap-6 md:gap-12">
        <div className="grow-0 max-w-[500px]">
          <h3 className="heading text-center md:text-left text-white text-4xl font-bold mb-6">What are you waiting for?</h3>
          <div className="subheading text-center md:text-left text-white text-2xl font-light">Start your enquiry today and receive your quote usually within 24 hours!</div>
        </div>
        <div className="grow-0">
          <div className="heroCta relative inline-flex bg-gradient-to-r from-[#EC008C] to-[#FC6767]">
            <form className="inline-flex flex-row justify-start items-center gap-4 bg-gradient-to-r from-[#212D61] to-[#3E5CB1] m-[1px] p-4 pl-0">
              <input type="text" placeholder="Enter your reg" className="text-[#23323C] text-xl placeholder-white bg-transparent text-center" />
              <button type="submit" className="btn">Get a valuation</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PromoBanner;
