"use client"
import { useState } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
export const AddTaskForm = () => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <form className="border-[2px] w-full max-w-[530px] mx-auto border-[#D9D9D9] shadow-lg shadow-gray-500 bg-white rounded-3xl md:rounded-none mt-6 ">
      <div className="py-3 px-4 flex gap-4">
        <input
          type="text"
          name="title"
          placeholder="Título"
          className="w-full placeholder:text-black outline-none bg-transparent font-bold text-sm"
         
        />
        <div>
            <input
              type="checkbox"
              className="hidden"
              id="starCheckbox"
              name="favorite"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="starCheckbox" className="cursor-pointer">
             {isChecked ?  <IoIosStar className="text-2xl mr-2 text-yellow-400" /> : <IoIosStarOutline className="text-2xl mr-2 " /> } 
            </label>
        </div>
      </div>
      <div className="border-t-2 py-2 px-4"><textarea name="task" className="w-full outline-none resize-none text-xs" placeholder="Criar Nota..."/></div>
      <button type="submit" className="font-bold  text-sm cursor-pointerbg-red-200 py-2 px-4  duration-300"><GiConfirmed className="text-green-500 hover:text-green-300 duration-300 text-lg"/> </button>
    </form>
  );
};
