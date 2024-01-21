"use client";
import { AddTaskForm } from "@/components/AddTaskForm";
import { CardTask } from "@/components/CardTask";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer autoClose={3000} position={"bottom-left"} />
      <main className="bg-[#F0F2F5] min-h-screen ">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <AddTaskForm />
          <div className=" pt-9">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <CardTask />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
