"use client"
import axios from 'axios';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

interface TaskContextProps {
  tasks: any[]; 
  setTasks: React.Dispatch<React.SetStateAction<any[]>>; 
  onEdit: any; 
  setOnEdit: React.Dispatch<React.SetStateAction<any>>; 
  getTasks: () => Promise<void>; 
}

const TaskContext = createContext<TaskContextProps | undefined>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tasks, setTasks] = useState<any[]>([]); 
  const [onEdit, setOnEdit] = useState<any | null>(null); 

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

  const value: TaskContextProps = {
    tasks,
    setTasks,
    onEdit,
    setOnEdit,
    getTasks,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};

export const useTaskContext = () => {
   return useContext(TaskContext);
};
