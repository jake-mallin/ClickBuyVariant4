import NextLink from 'next/link';

import { Image } from '@/components/utility-components/Image';

const Header = () => (
  <header className="root fixed top-0 bg-white w-full py-2 sm:py-4 z-20 shadow-lg md:shadow-none">
    <div className="wrapper px-4 md:px-8">
      <div className="container max-w-[1600px] mx-auto">
        <div className="headerContainer flex items-center justify-between gap-4 md:gap-8">
          <div className="headerLogo mr-auto">
            <NextLink href="/"><Image src="/logo.svg" alt="Click Buy Motors" width="228" height="48" className="h-[40px] sm:h-[48px] md:h-[64px] w-full" /></NextLink>
          </div>
          <nav className="navContainer ml-auto gap-8 hidden md:flex">
            <NextLink href="/" className="text-[#6A7492] hover:underline underline-offset-3 whitespace-nowrap">Home</NextLink>
            <NextLink href="/sell-my-car" className="text-[#6A7492] hover:underline underline-offset-3 whitespace-nowrap">Sell my car</NextLink>
            <NextLink href="/how-it-works" className="text-[#6A7492] hover:underline underline-offset-3 whitespace-nowrap">How it works</NextLink>
            <NextLink href="/faq" className="text-[#6A7492] hover:underline underline-offset-3 whitespace-nowrap">FAQ</NextLink>
            <NextLink href="/contact" className="text-[#6A7492] hover:underline underline-offset-3 whitespace-nowrap">Contact</NextLink>
          </nav>
          <div className="headerCta">
            <NextLink href="/" className="btn">Get a valuation</NextLink>
          </div>
          <div className="menuIcon md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 37.333 32" className="w-auto h-8">
              <path id="bars-solid" d="M0,66.667A2.664,2.664,0,0,1,2.667,64h32a2.667,2.667,0,1,1,0,5.333h-32A2.664,2.664,0,0,1,0,66.667ZM0,80a2.664,2.664,0,0,1,2.667-2.667h32a2.667,2.667,0,1,1,0,5.333h-32A2.664,2.664,0,0,1,0,80ZM37.333,93.333A2.664,2.664,0,0,1,34.667,96h-32a2.667,2.667,0,1,1,0-5.333h32A2.664,2.664,0,0,1,37.333,93.333Z" transform="translate(0 -64)" fill="#212D61"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
