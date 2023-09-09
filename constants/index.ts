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
        id:'low',
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
