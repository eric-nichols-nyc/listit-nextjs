interface Task {
  id: string;
  name: string;
  description?: string;
  order: string;
  innerRef?: any;
  draggableProps?: any;
  draggableHandleProps?: any;
}
