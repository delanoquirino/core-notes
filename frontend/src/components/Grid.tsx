import React from 'react'
import { CardTask } from './CardTask'

interface Task {
    id: number;
    title: string;
    task: string;
    favorite: boolean;
  }
  
  interface GridProps {
    tasks: Task[];
  }

export const Grid = ({tasks}:GridProps) => {
  return (
    <div className=" mt-9">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <CardTask />
    </div>
  </div>
  )
}
