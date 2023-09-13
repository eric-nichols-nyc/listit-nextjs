interface Task {
  id: string;
  name: string;
  description?: string;
  priority: string;
  duedate?: any;
  order: string;
  innerRef?: any;
  draggableProps?: any;
  draggableHandleProps?: any;
}