"use client";
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
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
import { AiOutlineCalendar } from "react-icons/ai"
import { useTaskStore } from "@/store/taskStore";
import { toast } from "react-toastify";
import PopOver from "./Popover";
import TaskForm from './TaskForm';
import LIButton from '@/components/Button'
import Icon from '@/components/Icon';
import { taskData, priorities } from '@/constants';
import { TfiMore } from 'react-icons/tfi';
import { getNewCardOrder } from '@/utils/getItemOrder';
import DatePickerDemo from './DatePicker';
import { Calendar } from './ui/calendar';
import { BsFlagFill } from 'react-icons/bs';

const borders = {
  'low': 'border-blue-500',
  'medium': 'border-orange-300',
  'high': 'border-red-500',
}

// and send in props
const Task = ({
  id,
  name,
  description,
  priority,
  innerRef,
  duedate,
  order,
  draggableProps,
  draggableHandleProps,
}: Task) => {
  const router = useRouter()
  // global state
  const [tasks, addTask, removeTask, updateTask] = useTaskStore(state => [
    state.tasks,
    state.addTask,
    state.removeTask,
    state.updateTask,
  ]);

  // local state
  const [showForm, setShowForm] = useState<boolean>(false)
  const [taskPriority, setTaskPriority] = useState<string>(priority)
  const [checkcolor, setBorderColor] = useState<string>(borders.low)

  const getBorderColor = () => {
    switch (priority) {
      case 'high':
        return borders.high
      case 'medium':
        return borders.medium
      case 'low':
        return borders.low
      default:
        console.error('Priority not found')
        return ''
    }
  }
  const getFlagColor = () => priorities.filter((p) => p.id === priority)[0].color
  // duplicate task
  const duplicate = () => {
    const t = {
      id: (tasks.length + 1).toString(),
      name,
      description,
      priority,
      order: getNewCardOrder(tasks, tasks.length - 1, tasks.length)!,
    }
    addTask(t)
    toast("Task duplicated");
  }

  useEffect(() => {
    console.log('tasks ', tasks)
  }, [tasks])

  // change color of checkbox border
  useEffect(() => {
    setBorderColor(getBorderColor())
  }, [taskPriority])

  const onClose = () => {
    setShowForm(false)
  }

  const onDateChanged = (duedate: Date) => {
    const t: Task = {
      id,
      name,
      description,
      duedate,
      order,
      priority
    }
    updateTask(id, t)
  }

  // update priority
  const onPriorityChanged = (priority: string) => { 
    setTaskPriority(priority)
      const t: Task = {
      id,
      name,
      description,
      duedate,
      order,
      priority
    }
    updateTask(id, t)
  }

  const updateCurrentTask = (name: string, description: string) => {
    const t: Task = {
      id,
      name,
      description,
      duedate,
      order,
      priority
    }
    updateTask(id, t)
    setShowForm(false)
    toast("1 task updated");
  }

  const changeTaskByType = (name: string) => {
    switch (name) {
      case 'edit':
        setShowForm(true)
        break;
      case 'delete':
        removeTask(id)
        toast("1 task deleted");
        break;
      case 'duplicate':
        duplicate()
        break;
      default:
        break;
    }
  }

  const setDate = (date: Date) => {
    const t: Task = {
      id,
      name,
      description,
      duedate: date,
      order,
      priority
    }
    updateTask(id, t)
  }

  const datepicker = () => (
    <Calendar
      mode="single"
      selected={duedate ? duedate : undefined}
      onSelect={(e) => setDate(e!)}
      className="rounded-md"
    />
  )

  const prioritypicker = () => (
    <div className="flex">
      {
        priorities.map((priority: any) => (
          <div key={priority.id}>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Icon
                    id={priority.id}
                    icon={priority.name}
                    color={priority.color}
                    priority={priority.priority}
                    onClick={() => {
                      onPriorityChanged(priority.priority)
                    }}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  {priority.priority}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>

        ))
      }
    </div>
  )

  const bodycontent = taskData.map((item, index) => {
    if (item.type === 'button') {
      if (item.id === 'duedate') return (
        <div key={item.id} className="border-b">
          <DatePickerDemo
            onSelected={onDateChanged}
          />
        </div>)
      return (<LIButton
        key={item.id}
        id={item.id}
        label={item.title}
        icon={item.icon}
        onClick={changeTaskByType}
      />)
    } else {
      return (
        <div
          key={index}
          className="task py-1 border-b"
        >
          <div className="flex flex-col text-sm ">
            <div className="text-xs">{item.title}</div>
            <div className="flex">
              {
                item.icon.map((ic: any) => (
                  <div key={index}>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger>
                          <Icon
                            id={ic.id}
                            icon={ic.name}
                            color={ic.color}
                            priority={priority}
                            onClick={() => {
                              setTaskPriority(ic.priority)
                            }}
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          {ic.priority}
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

  const gotoTask = (e: any) => {
    e.stopPropagation()
    router.push(`/task/${id}`)
  }

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
            className={`
              h-5 w-5 mt-1 
              rounded-full 
              transition 
              hover:bg-gray-200 
              hover:scale-125 
              border-2
              ${checkcolor}
            `}
            onCheckedChange={() => {
              setTimeout(() => {
                toast("1 task completed");
                removeTask(id)
              }, 300)
            }}
          />
          <div
            className="flex flex-col ml-2">
            {name}
            <div className="text-xs pb-2">
              {description}
            </div>
            <div className="flex gap-2">
              {/* date and popover */}
              <div
                className="due-date flex text-xs relative">
                <AiOutlineCalendar
                  size={14}
                />
                <div>
                  <PopOver
                    text={duedate ? duedate.toDateString() : 'No due date'}
                    body={datepicker()}
                  />
                </div>
              </div>
              {/* priority */}
              <PopOver
                icon={BsFlagFill}
                color={getFlagColor()}
                body={prioritypicker()}
                size={12}
              />
            </div>
          </div>
        </div>
        <div className="absolute right-2">
          <PopOver
            icon={TfiMore}
            body={bodycontent}
          />
        </div>
      </CardContent>
    </Card>
  )
}

export default Task