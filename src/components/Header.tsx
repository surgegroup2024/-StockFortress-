import React from 'react';
import { ChevronDownIcon } from 'lucide-react';
export const Header = () => {
  return <div className="flex font-lato bg-transparent font-normal min-h-[40px] text-sm z-[102] absolute top-0 left-0 right-0 bottom-[596.365px] w-[1270px]">
      <div className="flex max-w-[1400px] w-[1130px] mx-[70px] flex-row">
        {/* Logo */}
        <div className="flex items-center relative align-middle leading-[14px] flex-grow-0 flex-shrink-0 flex-auto select-none bg-transparent uppercase text-white/90 font-bold transition-colors duration-100 h-[47.6354px] w-[199.104px] self-center py-[11px] pr-[13px]">
          <span className="hidden items-normal absolute align-baseline leading-[14px] select-none bg-transparent text-white/90 transition-all duration-0 h-full w-[1px] self-auto"></span>
          <a href="https://www.alphaspread.com" className="bg-transparent text-white leading-[23.1429px] text-lg tracking-[2.8px]">
            <img src="https://www.alphaspread.com/image/logo.svg" className="inline-block w-[36.2083px] h-[24.5px]" />
            <div className="inline-block align-middle pl-[7px] text-sm leading-[12.6px] text-[#F5F7FA]">
              Alpha Spread
            </div>
          </a>
        </div>
        {/* Navigation Links */}
        <a href="https://www.alphaspread.com/dashboard" className="bg-transparent text-white/70 flex items-center relative align-middle leading-[14px] select-none transition-colors duration-100 h-[36px] w-[93.6771px] self-center rounded mx-[5px] py-[11px] px-[13px]">
          <span className="bg-transparent text-white/70 hidden items-normal absolute align-baseline leading-[14px] select-none transition-all duration-0 h-full w-[1px] self-auto"></span>
          Dashboard
        </a>
        <a className="bg-transparent text-white/70 flex items-center relative align-middle leading-[14px] select-none transition-colors duration-100 h-[36px] w-[88.5312px] self-center rounded mx-[5px] py-[11px] px-[13px] cursor-pointer">
          <span className="bg-transparent text-white/70 hidden items-normal absolute align-baseline leading-[14px] select-none transition-all duration-0 h-full w-[1px] self-auto"></span>
          Tools
          <ChevronDownIcon className="block opacity-90 w-[16.5104px] h-[14px] text-sm float-right ml-[14px]" />
        </a>
        <a href="https://www.alphaspread.com/service-pricing" className="bg-transparent text-white/70 flex items-center relative align-middle leading-[14px] select-none transition-colors duration-100 h-[36px] w-[68.8438px] self-center rounded mx-[5px] py-[11px] px-[13px]">
          <span className="bg-transparent text-white/70 hidden items-normal absolute align-baseline leading-[14px] select-none transition-all duration-0 h-full w-[1px] self-auto"></span>
          Pricing
        </a>
        <a href="https://www.alphaspread.com/about-us" className="bg-transparent text-white/70 flex items-center relative align-middle leading-[14px] select-none transition-colors duration-100 h-[36px] w-[64.1458px] self-center rounded mx-[5px] py-[11px] px-[13px]">
          <span className="bg-transparent text-white/70 hidden items-normal absolute align-baseline leading-[14px] select-none transition-all duration-0 h-full w-[1px] self-auto"></span>
          About
        </a>
        {/* Auth Buttons */}
        <div className="flex ml-[343.698px]">
          <div className="flex items-center relative align-middle leading-[14px] select-none bg-transparent text-white/90 transition-colors duration-100 h-[36px] w-[222px] self-center rounded mx-[5px] py-[11px] px-[13px]">
            <span className="hidden items-normal absolute align-baseline leading-[14px] select-none bg-transparent text-white/90 transition-all duration-0 h-full w-[1px] self-auto"></span>
            <div className="cursor-pointer block min-h-[14px] bg-[#2487EB] text-white shadow-md select-none transition-all duration-100 text-sm relative w-[91px] rounded py-[7px] px-[21px] my-[-7px] ml-[7px]">
              Sign Up
            </div>
            <div className="cursor-pointer block min-h-[14px] bg-transparent text-[#F9FAFB] shadow-[0_0_0_1px_rgba(255,255,255,0.5)_inset] select-none transition-all duration-100 text-sm relative w-[91px] rounded py-[7px] px-[21px] my-[-7px] ml-[7px]">
              Log in
            </div>
          </div>
        </div>
      </div>
    </div>;
};