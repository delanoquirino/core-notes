"use client"
import { AddTaskForm } from "@/components/AddTaskForm";
import { Grid } from "@/components/Grid";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";



export default function Home() {
  const [tasks,setTasks] = useState([]);
  const [onEdit,setOnEdit] = useState(null)
  
  //buscar dados na api
  const getTasks = async () => {
    try{
      const res = await axios.get("http://localhost:8000");
      setTasks(res.data.sort((a: { title: number; },b: { title: number; }) => (a.title > b.title ? 1: -1)))
    } catch ({error}:any) {
      toast.error(error);
    }
  }

  useEffect(() => {
    getTasks();
  }, [setTasks])


  return (
    <>
    <ToastContainer autoClose={3000} position={"bottom-left"} />
       
    <main className="flex min-h-screen flex-col items-center bg-[#F0F2F5]">
      <div className="container mx-auto px-4">
        <AddTaskForm />
       <Grid tasks={tasks} />
      </div>
    </main>
    </>
  );
}
