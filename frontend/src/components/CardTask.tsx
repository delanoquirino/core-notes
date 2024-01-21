"use client";
import axios from "axios";
import Image from "next/image";
import { IoIosStar, IoIosStarOutline, IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { EditBgColor } from "./EditBgColor";
import { useTaskContext } from "@/context/TaskContext";

interface Task {
  id: number;
  title: string;
  task: string;
  favorite: number;
  bgcolor: string;
}

interface TasksProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setOnEdit: React.Dispatch<React.SetStateAction<null>>;
}

export const CardTask = () => {
  const { tasks, setTasks, setOnEdit } = useTaskContext();
  const handleEdit = (taskData: {
    id: number;
    title: string;
    favorite: number;
    task: string;
    bgcolor: string;
  }) => {
    setOnEdit(taskData);
  };

  const handleDelete = async (id: number) => {
    await axios
      .delete("http://localhost:8800/" + id)
      .then(({ data }) => {
        const newArray = tasks.filter((task: { id: any }) => task.id! == id);
        setTasks(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));
  };

  

  const updateBgBackend = async (cor: string, taskId: number) => {
    const url = `http://localhost:8800/tasks/${taskId}/color`;
  
    try {
      
      await axios.put(url, { bgcolor: cor });
  
      console.log(`Cor da tarefa ${taskId} atualizada para ${cor}`);
    } catch (error) {
      console.error('Erro ao atualizar a cor no backend:', error);
    }
  };

  const handleColorSelected = (cor: string, taskId: number) => {
    updateBgBackend(cor, taskId);
  };

  return (
    <>
      {tasks.map(
        (taskData: {
          id: number;
          title: string;
          favorite: any;
          task: string;
          bgcolor: string;
        }) => {
          return (
            <div
              key={taskData.id}
              style={{ backgroundColor: taskData.bgcolor }}
              className="flex flex-col w-full max-w-[300px] h-[437px] mx-auto shadow-md shadow-gray-300 bg-white rounded-3xl"
            >
              <div className="py-3 px-4 flex gap-4">
                <div className="w-full font-bold text-sm">{taskData.title}</div>
                <div>
                  {taskData.favorite ? (
                    <IoIosStar className="text-2xl mr-2 text-yellow-400" />
                  ) : (
                    <IoIosStarOutline className="text-2xl mr-2" />
                  )}
                </div>
              </div>
              <div className="flex-1 border-t-2 py-3 px-4">{taskData.task}</div>
              <div className=" py-3 px-4 flex items-center justify-between">
                <div className="flex gap-2 ">
                  <button
                    onClick={() => handleEdit(taskData)}
                    className="rounded-full duration-300"
                  >
                    <Image
                      className=""
                      src="/pincel.svg"
                      alt="lapis para editar"
                      width={16}
                      height={16}
                    />
                  </button>
                  <EditBgColor
                ColorSelected={(cor) => handleColorSelected(cor, taskData.id)}
                taskId={taskData.id} 
              />
                </div>
                <div className="">
                  <button
                    onClick={() => handleDelete(taskData.id)}
                    className="p-2 rounded-full duration-300"
                  >
                    <IoMdClose className="text-[#51646E]" />
                  </button>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};
