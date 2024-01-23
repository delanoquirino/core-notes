"use client";
import axios from "axios";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Task {
  id: number;
  title: string;
  task: string;
  favorite: number;
  bgcolor: string;
}


interface TaskContextProps {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  onEdit: Task | null;
  setOnEdit: React.Dispatch<React.SetStateAction<Task | null>>;
  getTasks: () => Promise<void>;
  loading: boolean;
}



const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [onEdit, setOnEdit] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

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
    setLoading(false);
  }, []);

  const value: TaskContextProps = {
    tasks,
    setTasks,
    onEdit,
    setOnEdit,
    getTasks,
    loading,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
  return useContext(TaskContext);
};
