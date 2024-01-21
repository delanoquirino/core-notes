"use client";
import { AddTaskForm } from "@/components/AddTaskForm";
import { CardTask } from "@/components/CardTask";
import { GridContainer } from "@/components/GridContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer autoClose={3000} position={"bottom-left"} />
      <main className="bg-[#F0F2F5] min-h-screen pt-20">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <AddTaskForm />

          <GridContainer>
            <CardTask />
          </GridContainer>
        </div>
      </main>
    </>
  );
}
