import React from "react";
import { IoIosStarOutline } from "react-icons/io";

export const AddTaskForm = () => {
  return (
    <form className="border-[2px] w-[90%] md:w-[60%] lg:w-[40%] mx-auto border-[#D9D9D9] shadow-lg shadow-gray-500 bg-white rounded-3xl md:rounded-none mt-6 ">
      <div className="py-3 px-4 flex gap-4">
        <input
          type="text"
          placeholder="Título"
          className="w-full placeholder:text-black outline-none bg-transparent font-bold text-sm"
        />
        <div>
            <input
              type="checkbox"
              className="hidden"
              id="starCheckbox"
            />
            <label htmlFor="starCheckbox" className="cursor-pointer">
              <IoIosStarOutline className="text-2xl mr-2" />
            </label>
        </div>
      </div>
      <div className="border-t-2 p-2"><textarea className="w-full px-2 py-1 outline-none resize-none text-xs" placeholder="Criar Nota..."/></div>
    </form>
  );
};
