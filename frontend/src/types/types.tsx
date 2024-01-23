export type TaskType = {
  id: number;
  title: string;
  task: string;
  favorite: number;
  bgcolor: string;
};

export type TaskContextProps = {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  onEdit: TaskType | null;
  setOnEdit: React.Dispatch<React.SetStateAction<TaskType | null>>;
  getTasks: () => Promise<void>;
  loading: boolean;
};

export type Inputs = {
  title: string;
  task: string;
  favorite: number;
  bgcolor: string;
};

export type GridContainerProps = {
  children: React.ReactNode;
};

export interface TaskProps {
  taskData: TaskType;
  handleEdit: () => void;
  handleDelete: () => void;
  handleColorSelected: (cor: string) => void;
}
