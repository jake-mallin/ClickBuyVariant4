const LinkList = () => (
  <div className="root relative flex justify-center w-full">
    <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
      <li><a href="/" className="text-[#0A142F] hover:text-[#4294FF]">Home</a></li>
      <li><a href="/sell-my-car" className="text-[#0A142F] hover:text-[#4294FF]">Sell my car</a></li>
      <li><a href="/how-it-works" className="text-[#0A142F] hover:text-[#4294FF]">How it works</a></li>
      <li><a href="/faq" className="text-[#0A142F] hover:text-[#4294FF]">FAQ</a></li>
      <li><a href="/contact" className="text-[#0A142F] hover:text-[#4294FF]">Contact</a></li>
    </ul>
  </div>
);

export default LinkList;
