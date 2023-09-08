import { AiOutlineEdit, AiOutlineCopy, AiOutlineDelete } from 'react-icons/ai';
import { BsFlagFill, BsSun } from 'react-icons/bs';
import { GrSchedule } from 'react-icons/gr';
import { MdOutlineSchedule } from 'react-icons/md';

export const IconSize = 30;

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
        priority: 'low',
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
        name: BsFlagFill,
        priority: 'low',
        color: 'red',
        tip: 'high',
        selected: false,
      },
      {
        name: BsFlagFill,
        color: 'orange',
        tip: 'medium',
        selected: false,
      },
      {
        name: BsFlagFill,
        color: 'blue',
        tip: 'low',
        selected: false,
      },
      {
        name: BsFlagFill,
        color: 'purple',
        tip: 'none',
        selected: true,
      },
    ],
  },
  {
    id: 'duplicate',
    type: 'button',
    title: 'Duplicate',
    icon: AiOutlineCopy,
    selected: false,
    disabled: true,
  },
  {
    id: 'delete',
    type: 'button',
    title: 'Delete task',
    icon: AiOutlineDelete,
    selected: false,
  },
];
