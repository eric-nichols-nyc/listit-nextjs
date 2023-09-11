import { AiOutlineEdit, AiOutlineCopy, AiOutlineDelete, AiOutlineCalendar } from 'react-icons/ai';
import { BsFlagFill, BsSun } from 'react-icons/bs';
import { GrSchedule } from 'react-icons/gr';
import { MdOutlineSchedule } from 'react-icons/md';

export const IconSize = 24;

export const items = [
  {
    id: '1',
    name: 'task 1',
    order: 'c',
    description: 'This is my task description',
    duedate: new Date(),
  },
  {
    id: '2',
    name: 'task 2',
    order: 'f',
    description: 'This is my task description',
    duedate: new Date(),
  },
  {
    id: '3',
    name: 'task 3',
    order: 'h',
    description: 'This is my task description',
    duedate: new Date(),
  },
  {
    id: '4',
    name: 'task 4',
    order: 'm',
    description: 'This is my task description',
    duedate: new Date(),
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
        id: 'none',
        name: BsFlagFill,
        color: 'gray',
        priority: 'none',
      },
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
