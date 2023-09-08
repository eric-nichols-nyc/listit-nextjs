"use client";
import { useState } from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import { AiOutlineCalendar, AiOutlineCopy, AiOutlineDelete } from "react-icons/ai"
import { useTaskStore } from "@/store/taskStore";
import { toast } from "react-toastify";
import PopOver from "./Popover";
import TaskForm from './TaskForm';
import { AiOutlineEdit } from 'react-icons/ai';
import { BsFlagFill } from 'react-icons/bs';
import LIButton from '@/components/Button'
import { Button } from './ui/button';
import { IconType } from 'react-icons';
import Icon from '@/components/Icon';

const data = [
  {
    id: 'button',
    type: 'button',
    title: 'Edit',
    icon: AiOutlineEdit,
  },
  {
    id: "duedate",
    type: 'icons',
    title: 'Due Date',
    icon: [
      {
        name: BsFlagFill,
        color: 'red',
        tip: 'today'
      },
      {
        name: BsFlagFill,
        color: 'red',
        tip: 'tomorrow'
      },
      {
        name: BsFlagFill,
        priority: 'low',
        color: 'red',
        tip: 'next week'
      },
      {
        name: BsFlagFill,
        color: 'red',
        tip: 'more'
      },
    ]
  },
  {
    id: "priority",
    type: 'icons',
    title: 'Priority',
    icon: [
      {
        name: BsFlagFill,
        priority: 'low',
        color: 'red',
        tip: 'high'
      },
      {
        name: BsFlagFill,
        color: 'red',
        tip: 'medium'
      },
      {
        name: BsFlagFill,
        color: 'red',
        tip: 'low'
      },
      {
        name: BsFlagFill,
        color: 'red',
        tip: 'none'
      },
    ]
  },
  {
    id: "duplicate",
    type: 'button',
    title: 'Duplicate',
    icon: AiOutlineCopy
  },
  {
    id: "delete",
    type: 'button',
    title: 'Delete',
    icon: AiOutlineDelete
  }
]

// and send in props
const Task = ({
  id,
  name,
  description,
  innerRef,
  draggableProps,
  draggableHandleProps,
}: Task) => {
  // global state
  const [tasks, removeTask, updateTask] = useTaskStore(state => [
    state.tasks,
    state.removeTask,
    state.updateTask,
  ]);

  // local state
  const [showForm, setShowForm] = useState(false)

  const onClose = () => {
    setShowForm(false)
  }

  const updateCurrentTask = (name: string, description: string) => {
    const t = {
      id: id,
      name: name,
      description: description,
    }
    updateTask(id, t)
    setShowForm(false)
    toast("1 task updated");
  }

  const bodycontent = data.map((item, index) => {
    if (item.type === 'button') {
      return (<LIButton
        key={index}
        label={item.title}
        icon={item.icon}
        onClick={() => { }}
      />)
    } else {
      return (<div key={index}>
        <div className="flex flex-col text-sm">
          <div>{item.title}</div>
          <div className="flex">
            {
              item.icon.map((ic: any) => (
                <div key={index}>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger>
                        <Icon
                          key={ic.tip}
                          icon={ic.name}
                          color={ic.color}
                          tip={ic.tip}
                        />      </TooltipTrigger>
                      <TooltipContent>
                        {ic.tip}
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>

              ))
            }
          </div>

        </div>
      </div>)
    }
  })

  if (showForm) return <TaskForm
    title={name}
    description={description}
    disable={false}
    onSubmit={updateCurrentTask}
    onClose={onClose}
  />

  return (
    <Card
      id={id}
      className="mb-2 relative"
      {...draggableProps}
      {...draggableHandleProps}
      ref={innerRef}
    >
      <CardContent
        className="p-3 pb-3 pt-3 flex flex-col"
      >
        <div className="flex items-start">
          <Checkbox
            className="h-5 w-5 mt-1 rounded-full transition hover:bg-gray-200 hover:scale-125"
            onCheckedChange={() => {
              setTimeout(() => {
                toast("1 task completed");
                removeTask(id)
              }, 300)
            }}
          />
          <div className="flex flex-col ml-2">
            {name}
            <div className="text-sm">
              {description}
            </div>
            <div className="flex  text-xs">
              <AiOutlineCalendar
                size={14}
              />
              <div className="ml-1">
                Today
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-2">
          <PopOver
            body={bodycontent}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default Task