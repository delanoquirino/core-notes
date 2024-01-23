import React from "react";
import { IoIosStar, IoIosStarOutline, IoMdClose } from "react-icons/io";
import Image from "next/image";
import { EditBgColor } from "components";
import { TaskProps } from "types/types";

export const CardTasks = ({
  taskData,
  handleEdit,
  handleDelete,
  handleColorSelected,
}: TaskProps) => {
  return (
    <div
      style={{ backgroundColor: taskData.bgcolor }}
      className="flex flex-col w-full h-[350px] shadow-md shadow-gray-300 bg-white rounded-3xl overflow-hidden"
    >
      <div className="py-3 px-4 flex gap-4">
        <h2 className="w-full font-bold text-sm">{taskData.title}</h2>
        <div>
          {taskData.favorite ? (
            <IoIosStar className="text-2xl mr-2 text-yellow-400" />
          ) : (
            <IoIosStarOutline className="text-2xl mr-2" />
          )}
        </div>
      </div>

      <div className="h-full border-t-2 py-3 px-4  ">
        <p style={{ wordWrap: "break-word" }}>{taskData.task}</p>
      </div>

      <div className=" py-3 px-4 flex items-center justify-between">
        <div className="flex gap-2 ">
          <button onClick={handleEdit} className="rounded-full duration-300">
            <Image
              className=""
              src="/pincel.svg"
              alt="lapis para editar"
              width={16}
              height={16}
            />
          </button>
          <EditBgColor
            ColorSelected={handleColorSelected}
            taskId={taskData.id}
          />
        </div>
        <div className="">
          <button
            onClick={handleDelete}
            className="p-2 rounded-full duration-300"
          >
            <IoMdClose className="text-[#51646E]" />
          </button>
        </div>
      </div>
    </div>
  );
};
