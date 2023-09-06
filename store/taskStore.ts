
import { create } from 'zustand';

interface TaskStore {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  addTask: (task: Task) => void;
  removeTask: (id: string) => void;
  updateTask: (id: string, task: Task) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  setTasks(tasks) {
    set({ tasks });
  },
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (id) => set((state) => ({ tasks: state.tasks.filter((task) => task.id !== id) })),
  updateTask: (id, task) => set((state) => ({ tasks: state.tasks.map((t) => t.id === id ? task : t) })),
} as TaskStore))