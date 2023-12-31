import {
  AiOutlineEdit,
  AiOutlineCopy,
  AiOutlineDelete,
  AiOutlineCalendar,
} from 'react-icons/ai';
import { BsFlagFill, BsSun } from 'react-icons/bs';

export const IconSize = 24;

export const items = [
  {
    id: '1',
    name: 'task 1',
    order: 'c',
    priority: 'high',
    description: 'This is an important task',
    duedate: new Date(),
  },
  {
    id: '2',
    name: 'task 2',
    order: 'f',
    priority: 'low',
    description: 'This is my next task',
    duedate: new Date(),
  },
  {
    id: '3',
    name: 'task 3',
    order: 'h',
    priority: 'low',
    description: 'This is a third task',
    duedate: new Date(),
  },
];

export const priorities = [
  {
    id: 'low',
    name: BsFlagFill,
    color: 'blue',
    priority: 'low',
  },
  {
    id: 'medium',
    name: BsFlagFill,
    color: 'orange',
    priority: 'medium',
  },
  {
    id: 'high',
    name: BsFlagFill,
    color: 'red',
    priority: 'high',
  },
];

export const taskData = [
  {
    id: 'edit',
    type: 'button',
    title: 'Edit',
    icon: AiOutlineEdit,
  },
  {
    id: 'duedate',
    type: 'button',
    title: 'Due Date',
    icon: AiOutlineCalendar,
  },
  {
    id: 'priority',
    type: 'icons',
    title: 'Priority',
    icon: [
      {
        id: 'low',
        name: BsFlagFill,
        color: 'blue',
        priority: 'low',
      },
      {
        id: 'medium',
        name: BsFlagFill,
        color: 'orange',
        priority: 'medium',
      },
      {
        id: 'high',
        name: BsFlagFill,
        color: 'red',
        priority: 'high',
      },
    ],
  },
  {
    id: 'duplicate',
    type: 'button',
    title: 'Duplicate',
    icon: AiOutlineCopy,
  },
  {
    id: 'delete',
    type: 'button',
    title: 'Delete task',
    icon: AiOutlineDelete,
  },
];
