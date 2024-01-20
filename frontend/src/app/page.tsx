"use client";
import { AddTaskForm } from "@/components/AddTaskForm";
import { CardTask } from "@/components/CardTask";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const [tasks, setTasks] = useState([]);
  const [onEdit, setOnEdit] = useState(null);


  const getTasks = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setTasks(
        res.data.sort((a: { title: number }, b: { title: number }) =>
          a.title > b.title ? 1 : -1
        )
      );
    } catch ({ error }: any) {
      toast.error(error);
    }
  };
  
  useEffect(() => {
    getTasks();
  }, [tasks]);
  

  return (
    <>
      <ToastContainer autoClose={3000} position={"bottom-left"} />

      <main className="flex min-h-screen flex-col items-center bg-[#F0F2F5]">
        <div className="container mx-auto px-4">
          <AddTaskForm onEdit={onEdit} setOnEdit={setOnEdit} getTasks={getTasks}/>

          <div className=" mt-9">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          
                <CardTask tasks={tasks} setTasks={setTasks} setOnEdit={setOnEdit} />
              
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
