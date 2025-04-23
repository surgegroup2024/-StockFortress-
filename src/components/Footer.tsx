import React from 'react';
import { UserIcon } from 'lucide-react';
export const Footer = () => {
  return <div>
      <div className="absolute bottom-0 mx-0 left-0 right-0">
        <div className="animate-appear-opacity bg-[rgba(158,178,199,0.2)] backdrop-blur-md text-[#F5F7FA]/70 text-[15.4px] font-medium tracking-[0.7px] py-[5.6px]">
          <UserIcon className="inline-block w-[18.1667px] h-[15.3958px] text-[15.4px] mr-[3.5px]" />
          Trusted by more than 248,200 <span>successful</span> value investors
        </div>
      </div>
    </div>;
};