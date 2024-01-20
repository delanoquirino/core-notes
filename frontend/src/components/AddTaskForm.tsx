"use client";
import { useEffect } from "react";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";
import { GiConfirmed } from "react-icons/gi";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

type Inputs = {
  title: string;
  task: string;
  favorite: boolean;
};

export const AddTaskForm = ({ onEdit, setOnEdit, getTasks }: any) => {
  const {
    handleSubmit,register,
    reset,setValue,watch,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    if (onEdit) {
      setValue("title", onEdit.title);
      setValue("task", onEdit.task);
      setValue("favorite", onEdit.favorite);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onEdit]);

  const onSubmit: SubmitHandler<Inputs> = async (data: Inputs) => {
    const { title, task, favorite } = data;
    console.log(watch("favorite"));
    const taskData = {
      title: title,
      task: task,
      favorite: favorite,
    };

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          title: taskData.title,
          task: taskData.task,
          favorite: taskData.favorite,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          title: taskData.title,
          task: taskData.task,
          favorite: taskData.favorite,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }
    reset();
    setOnEdit(null);
    getTasks();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border-[2px] w-full max-w-[530px] mx-auto border-[#D9D9D9] shadow-lg shadow-gray-500 bg-white rounded-3xl md:rounded-none mt-6 "
    >
      <div className="py-3 px-4 flex gap-4">
        <input
          type="text"
          id="title"
          placeholder="Título"
          className="w-full placeholder:text-black outline-none bg-transparent font-bold text-sm"
          {...register("title", { required: true })}
        />
        <div>
        
          <input
             type="checkbox"
             id="starCheckbox"
            {...register("favorite")}
             className="hidden"
          />
          <label htmlFor="starCheckbox" className="cursor-pointer">
            { watch("favorite")? (
              <IoIosStar className="text-2xl mr-2 text-yellow-400" />
            ) : (
              <IoIosStarOutline className="text-2xl mr-2 " />
            )}
          </label>
        </div>
      </div>
      <div className="border-t-2 py-2 px-4">
        <textarea
          id="task"
          className="w-full outline-none resize-none text-xs"
          placeholder="Criar Nota..."
          {...register("task", { required: true })}
        />
      </div>
      <button
        type="submit"
        className="font-bold  text-sm cursor-pointerbg-red-200 py-2 px-4  duration-300"
      >
        <GiConfirmed className="text-green-500 hover:text-green-300 duration-300 text-lg" />
      </button>
    </form>
  );
};


