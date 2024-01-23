"use client";
import axios from "axios";
import { Loading, GridContainer, CardTasks } from "components";

import { useTaskContext } from "contexts";

import { toast } from "react-toastify";

import { TaskContextProps, TaskType } from "types/types";

export const ListTasks = () => {
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
      const newArray = tasks.filter((task: TaskType) => task.id !== id);
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
      const updatedTasks = tasks.map((task: TaskType) =>
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
              {favoriteTasks.map((taskData: TaskType) => {
                return (
                  <CardTasks
                    key={taskData.id}
                    taskData={taskData}
                    handleEdit={() => handleEdit(taskData)}
                    handleDelete={() => handleDelete(taskData.id)}
                    handleColorSelected={(cor: string) =>
                      handleColorSelected(cor, taskData.id)
                    }
                  />
                );
              })}
            </GridContainer>
          </div>
          <div className="mt-8">
            <h2 className="text-[#464646] pl-2">Outras</h2>
            <GridContainer>
              {noFavoriteTasks.map((taskData: TaskType) => {
                return (
                  <CardTasks
                    key={taskData.id}
                    taskData={taskData}
                    handleEdit={() => handleEdit(taskData)}
                    handleDelete={() => handleDelete(taskData.id)}
                    handleColorSelected={(cor: string) =>
                      handleColorSelected(cor, taskData.id)
                    }
                  />
                );
              })}
            </GridContainer>
          </div>
        </>
      )}
    </>
  );
};
