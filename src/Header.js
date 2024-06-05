// Header.js
import React from 'react';

function Header() {
    return (
        <div className="flex flex-col bg-black">

        <div className="flex flex-col pt-8 w-full text-white whitespace-nowrap backdrop-blur-[10px] max-md:max-w-full">
          <div className="flex gap-5 justify-between self-center px-5 w-full max-w-[1340px] max-md:flex-wrap max-md:max-w-full">
            <div className="my-auto text-4xl font-bold">Coral</div>
            <div className="flex gap-5 justify-between items-center text-xl font-medium leading-9 max-md:flex-wrap">
              <div className="flex flex-col self-stretch pt-1.5 my-auto font-bold leading-[130%]">
                <div><a href='/'>Home</a></div>
                <div className="shrink-0 mt-1.5 h-0.5 bg-white rounded-2xl" />
              </div>
              <div className="self-stretch my-auto"><a href='/about'>About</a></div>
              <div className="self-stretch my-auto"><a href='/blog'>Blog</a></div>
              <div className="justify-center self-stretch px-4 py-1 text-center text-black bg-white rounded-[100px]">
              <a href='/contact'> Contact</a>
              </div>
            </div>
          </div>
          <div className="mt-4 w-full border border-solid bg-white bg-opacity-20 border-white border-opacity-20 min-h-[1px] max-md:max-w-full" />
        </div>
        </div>
    );
}

export default Header;
