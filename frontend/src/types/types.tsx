export type TaskType = {
  id: number;
  title: string;
  task: string;
  favorite: number;
  bgcolor: string;
};

export interface TaskContextProps {
  tasks: TaskType[];
  setTasks: React.Dispatch<React.SetStateAction<TaskType[]>>;
  setOnEdit: React.Dispatch<React.SetStateAction<TaskType | null>>;
  loading: boolean;
}

export type Inputs = {
  title: string;
  task: string;
  favorite: number;
  bgcolor: string;
};

export interface TaskContextFormProps {
  onEdit: TaskType | null;
  setOnEdit: React.Dispatch<React.SetStateAction<TaskType | null>>;
  getTasks: () => Promise<void>;
}

export type GridContainerProps = {
  children: React.ReactNode;
};

export interface TaskProps {
  taskData: TaskType;
  handleEdit: () => void;
  handleDelete: () => void;
  handleColorSelected: (cor: string) => void;
}
