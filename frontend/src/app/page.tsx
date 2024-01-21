"use client";
import { AddTaskForm } from "@/components/AddTaskForm";
import { CardTask } from "@/components/CardTask";
import { TaskProvider, useTaskContext } from "@/context/TaskContext";
import axios from "axios";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  return (
    <>
      <ToastContainer autoClose={3000} position={"bottom-left"} />

      <main className="flex min-h-screen flex-col items-center bg-[#F0F2F5]">
        <div className="container mx-auto px-4">
          <AddTaskForm />

          <div className=" mt-9">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <CardTask />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
