import React from 'react';
import { StockExamples } from './StockExamples';
import { Footer } from './Footer';
import { SearchIcon, InfoIcon } from 'lucide-react';
export const Hero = () => {
  return <div className="block max-w-[700px] w-[700px] mx-[285px] font-lato leading-[14px] text-sm z-2">
      {/* Heading */}
      <h1 className="box-border text-[56px] leading-[72px] font-bold min-h-[14px] uppercase text-[#F5F7FA] m-0">
        Make{' '}
        <span className="bg-clip-text text-transparent animate-tracking-in-expand delay-500" style={{
        backgroundImage: 'linear-gradient(109.6deg, rgb(139, 255, 251) 11.2%, rgb(40, 116, 255) 91.1%)'
      }}>
          Confident
        </span>
        <br />
        Investment Decisions
      </h1>
      {/* Search Section */}
      <div className="mt-[42px]">
        <div id="pc-fake-search-input">
          <div className="relative font-normal flex text-black text-sm animate-fake-input transition-all duration-[0.06s] ease-in-out cursor-pointer">
            <div className="w-[700px] bg-[#3A4168] text-left text-[21px] font-light text-white/70 cursor-text border border-white/5 rounded-[14px] p-[14px_21px]">
              Search stocks here...
            </div>
            <SearchIcon className="block opacity-50 w-[56.0938px] h-[50.3333px] text-[21px] leading-[21px] align-middle cursor-default absolute top-0 right-0 left-[643.906px] text-white/70 rounded-r transition-opacity duration-300 pointer-events-none" />
          </div>
        </div>
        <div className="leading-[14px] h-[1.33333px] font-bold uppercase tracking-[0.7px] text-black/85 select-none border-y border-black/0 my-[7px]"></div>
        {/* Stock Examples */}
        <StockExamples />
      </div>
      {/* Footer */}
      <Footer />
    </div>;
};