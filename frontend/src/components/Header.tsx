import Image from "next/image";
import React from "react";
import { IoMdClose } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";

export const Header = () => {
  return (
    <header className="fixed bg-white w-full">
      <div className="px-6 py-2 flex justify-between gap-8">
        <div className="flex flex-1">
          <div className="flex gap-3 md:gap-4 items-center justify-center mr-4 md:mr-7">
            <div className=" relative w-[20px] h-[20px] md:w-[30px] md:h-[30px]">
              <Image src="/logo.svg" alt="logo" fill={true} />
            </div>
            <h1 className="hidden sm:block text-[11.45px] md:text-sm">
              CoreNotes
            </h1>
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
        </div>

        <button className="flex-1 hidden sm:block">
          <IoMdClose className="text-[#51646E] ml-auto" />
        </button>
      </div>
    </header>
  );
};
