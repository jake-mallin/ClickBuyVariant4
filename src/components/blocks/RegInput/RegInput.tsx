const RegInput = () => (
  <div className="root heroCta relative inline-flex bg-gradient-to-r from-[#EC008C] to-[#FC6767]">
    <form className="inline-flex flex-row justify-start items-center gap-4 bg-white m-[1px] p-4">
      <input type="text" placeholder="Enter your reg" className="w-[140px] md:w-[220px] text-[#23323C] text-md md:text-xl placeholder-[#555555] text-center" />
      <button type="submit" className="btn">Get a valuation</button>
    </form>
  </div>
);

export default RegInput;
