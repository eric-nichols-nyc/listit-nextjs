import { AiOutlineEdit, AiOutlineCopy, AiOutlineDelete } from 'react-icons/ai';
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
  },
  {
    id: '2',
    name: 'task 2',
    order: 'f',
    description: 'This is my task description',
  },
  {
    id: '3',
    name: 'task 3',
    order: 'h',
    description: 'This is my task description',
  },
  {
    id: '4',
    name: 'task 4',
    order: 'm',
    description: 'This is my task description',
  },
  {
    id: '5',
    name: 'task 5',
    order: 'p',
    description: 'This is my task description',
  },
  {
    id: '6',
    name: 'task 6',
    order: 'v',
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
    type: 'icons',
    title: 'Due Date',
    icon: [
      {
        name: MdOutlineSchedule,
        color: 'red',
        tip: 'Today',
      },
      {
        name: BsSun,
        color: 'orange',
        tip: 'Tomorrow',
      },
      {
        name: GrSchedule,
        color: 'red',
        tip: 'Next week',
      },
    ],
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
