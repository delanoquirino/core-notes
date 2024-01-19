import { AddTaskForm } from "@/components/AddTaskForm";
import { CardTask } from "@/components/CardTask";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#F0F2F5]">
      <div className="container p-4">
        <AddTaskForm />
        <div className=" mt-9">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-11">
            <CardTask />
            <CardTask />
            <CardTask />
          </div>
        </div>
      </div>
    </main>
  );
}
