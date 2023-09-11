interface Task {
  id: string;
  name: string;
  description?: string;
  duedate?: any;
  order?: string;
  innerRef?: any;
  draggableProps?: any;
  draggableHandleProps?: any;
}