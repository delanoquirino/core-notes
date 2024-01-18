import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Header = () => {
  return (
    <header className="bg-white w-full">
      <div className="px-6 py-4 flex">
        <div className="flex gap-3 md:gap-4 items-center justify-center mr-4 md:mr-7">
          <div className="relative w-[29px] h-[29px] md:w-[36px] md:h-[36px]">
              <Image src="/logo.svg" alt="My SVG" fill={true} />
          </div>
          <h1 className="text-[11.45px] md:text-sm">CoreNotes</h1>
        </div>
       
        <form className="flex flex-1 items-center w-auto p-2 rounded-sm border-[1px] boder-[#D9D9D9] shadow-lg">
          <input
            type="text"
            placeholder="Pesquisar Notas"
            className="flex-1 outline-none bg-transparent text-[9px] placeholder:text-[#9A9A9A] text-[#9A9A9A]"
          />
          <button hidden>Search</button>
          <HiMagnifyingGlass size={13} className="text-[#9E9E9E]" />
        </form>
       
        <button className="ml-[10%] md:ml-[40%] lg:ml-[50%]">
          <IoMdClose className="text-[#51646E]"/>
        </button>
      </div>
    </header>
  );
};
