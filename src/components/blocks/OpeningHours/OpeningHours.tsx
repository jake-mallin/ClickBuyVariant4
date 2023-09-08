const OpeningHours = () => (
  <div className="root relative">
    <ul className="openTime mb-4">
      <li className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] leading-9"><div className="openDay flex items-center gap-2">Monday</div><div className="openTime">09:00 - 17:00</div></li>
      <li className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] leading-9"><div className="openDay flex items-center gap-2">Tuesday</div><div className="openTime">09:00 - 17:00</div></li>
      <li className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] leading-9"><div className="openDay flex items-center gap-2">Wednesday</div><div className="openTime">09:00 - 17:00</div></li>
      <li className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] leading-9"><div className="openDay flex items-center gap-2">Thursday</div><div className="openTime">09:00 - 17:00</div></li>
      <li className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] leading-9 font-bold text-[#212D61]"><div className="openDay flex items-center gap-2">Friday</div><div className="openTime">09:00 - 17:00</div></li>
      <li className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] leading-9"><div className="openDay flex items-center gap-2">Saturday</div><div className="openTime">09:00 - 16:00</div></li>
      <li className="flex justify-between items-center border-b-[1px] border-[#D9D9D9] leading-9"><div className="openDay flex items-center gap-2">Sunday</div><div className="openTime">Closed</div></li>
    </ul>    
    <p className="openMessage">Our enquiry services are available 24/7. We will get back to you within our working hours </p>
  </div>
);

export default OpeningHours;
