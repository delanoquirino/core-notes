import Image from "next/image";
import React from "react";
import { IoIosStar, IoIosStarOutline, IoMdClose } from "react-icons/io";

interface Task {
  id: number;
  title: string;
  task: string;
  favorite: boolean;
}

interface TasksProps {
  tasks: Task[];
}

export const CardTask = ({ tasks }: TasksProps) => {
  console.log(tasks);
  return (
    <>
      {tasks.map((item) => {
       return ( <div
        key={item.id}
        className="flex flex-col w-full max-w-[390px] h-[437px] mx-auto shadow-md shadow-gray-300 bg-white rounded-3xl"
      >
        <div className="py-3 px-4 flex gap-4">
          <div className="w-full font-bold text-sm">{item.title}</div>
          <div>
            {item.favorite ? (
              <IoIosStarOutline className="text-2xl mr-2" />
            ) : (
              <IoIosStar className="text-2xl mr-2" />
            )}
          </div>
        </div>
        <div className="flex-1 border-t-2 py-3 px-4">{item.task}</div>
        <div className=" py-3 px-4 flex items-center justify-between">
          <div className="flex gap-2 ">
            <button className="rounded-full duration-300">
              <Image
                className=""
                src="/pincel.svg"
                alt="lapis para editar"
                width={16}
                height={16}
              />
            </button>
            <button className=" w-4 h-4">
              <Image
                src="/ink.svg"
                alt="tinta para trocar de cor"
                width={16}
                height={16}
              />
            </button>
          </div>
          <div className="">
            <button className="p-2 rounded-full duration-300">
              <IoMdClose className="text-[#51646E]" />
            </button>
          </div>
        </div>
      </div>)
      })}
    </>
  );
};
