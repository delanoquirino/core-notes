"use client";
import axios from "axios";
import Image from "next/image";
import { IoIosStar, IoIosStarOutline, IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";
import { EditBgColor } from "./EditBgColor";
import { useTaskContext } from "@/context/TaskContext";
import { Loading } from "./Loading";
import { GridContainer } from "./GridContainer";


type Task = {
  id: number;
  title: string;
  task: string;
  favorite: number;
  bgcolor: string;
};

interface TaskContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  setOnEdit: React.Dispatch<React.SetStateAction<Task | null>>;
  loading: boolean;
}

export const CardTask = () => {
  const { tasks, setTasks, setOnEdit, loading } =
    useTaskContext() as TaskContextProps;

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
    try {
      const response = await axios.delete("http://localhost:8800/" + id);
      const newArray = tasks.filter((task: Task) => task.id !== id);
      setTasks(newArray);
      toast.success(response.data);
    } catch (error) {
      console.error("Error ao deletar", error);
    }
  };

  const handleColorSelected = async (cor: string, taskId: number) => {
    const url = `http://localhost:8800/tasks/${taskId}/color`;

    try {
      await axios.put(url, { bgcolor: cor });
      const updatedTasks = tasks.map((task: Task) =>
        task.id === taskId ? { ...task, bgcolor: cor } : task
      );

      setTasks(updatedTasks);
    } catch (error) {
      console.error("Erro ao atualizar a cor no backend:", error);
    }
  };

  const favoriteTasks = tasks.filter(
    (taskData: { favorite: number }) => taskData.favorite === 1
  );
  const noFavoriteTasks = tasks.filter(
    (taskData: { favorite: number }) => taskData.favorite !== 1
  );

  return (
    <>
      {loading ? (
        <div>
          <Loading />
        </div>
      ) : (
        <>
          <div className="mt-8">
            <h2 className="text-[#464646] pl-2">Favoritas</h2>
            <GridContainer>
              {favoriteTasks.map(
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
                      className="flex flex-col w-full max-w-[300px] h-[350px] mx-auto shadow-md shadow-gray-300 bg-white rounded-3xl"
                    >
                      <div className="py-3 px-4 flex gap-4">
                        <h2 className="w-full font-bold text-sm">
                          {taskData.title}
                        </h2>
                        <div>
                          {taskData.favorite ? (
                            <IoIosStar className="text-2xl mr-2 text-yellow-400" />
                          ) : (
                            <IoIosStarOutline className="text-2xl mr-2" />
                          )}
                        </div>
                      </div>
                      <p className="h-full border-t-2 py-3 px-4">
                        {taskData.task}
                      </p>
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
                            ColorSelected={(cor) =>
                              handleColorSelected(cor, taskData.id)
                            }
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
            </GridContainer>
          </div>
          <div className="mt-8">
            <h2 className="text-[#464646] pl-2">Outras</h2>
            <GridContainer>
              {noFavoriteTasks.map(
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
                      className="flex flex-col w-full max-w-[300px] h-[350px] mx-auto shadow-md shadow-gray-300 bg-white rounded-3xl"
                    >
                      <div className="py-3 px-4 flex gap-4">
                        <h2 className="w-full font-bold text-sm">
                          {taskData.title}
                        </h2>
                        <div>
                          {taskData.favorite ? (
                            <IoIosStar className="text-2xl mr-2 text-yellow-400" />
                          ) : (
                            <IoIosStarOutline className="text-2xl mr-2" />
                          )}
                        </div>
                      </div>

                      <div className="h-full border-t-2 py-3 px-4">
                        <p>{taskData.task}</p>
                      </div>

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
                            ColorSelected={(cor) =>
                              handleColorSelected(cor, taskData.id)
                            }
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
            </GridContainer>
          </div>
        </>
      )}
    </>
  );
};
