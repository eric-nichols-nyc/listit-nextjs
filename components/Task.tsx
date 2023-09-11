"use client";
import { useEffect, useState } from 'react'
import {useRouter} from 'next/navigation'
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
import { taskData } from '@/constants';
import { TfiMore } from 'react-icons/tfi';
import { getNewCardOrder } from '@/utils/getItemOrder';
import DatePickerDemo from './DatePicker';

const borders = {
  'none': 'border-gray-400',
  'low': 'border-blue-500',
  'medium': 'border-orange-300',
  'high': 'border-red-500',
}

// and send in props
const Task = ({
  id,
  name,
  description,
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
  const [priority, setPriority] = useState<string>('none')
  const [checkcolor, setCheckColor] = useState<string>(borders.none)

  const getColor = () => {
    switch(priority){
      case 'high':
        return borders.high
      case 'medium':
        return borders.medium
      case 'low':
        return borders.low
      case 'none':
        return borders.none
      default:
        return borders.low
    }
  }
  // duplicate task
  const duplicate = () => {
    const t = {
      id: (tasks.length + 1).toString(),
      name: name,
      description: description,
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
    setCheckColor(getColor())
  },[priority])

  const onClose = () => {
    setShowForm(false)
  }

  const onDateChanged = (duedate: Date) => {
    const t = {
      id,
      name,
      description,
      duedate,
      order
    }
    updateTask(id, t)
  }

  const updateCurrentTask = (name: string, description: string) => {
    const t = {
      id,
      name,
      description,
      duedate,
      order
    }
    updateTask(id, t)
    setShowForm(false)
    toast("1 task updated");
  }

  const changeTaskByType = (name:string) => {
    switch(name){
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
    if (name === 'edit') {
      setShowForm(true)
    } else if (name === 'delete') {
      removeTask(id)
      toast("1 task deleted");
    }
  }

  const bodycontent = taskData.map((item, index) => {
    if (item.type === 'button') {
      if(item.id === 'duedate') return (
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
      className="py-1 border-b"
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
                          key={ic.tip}
                          id={ic.id}
                          icon={ic.name}
                          color={ic.color}
                          priority={priority}
                          onClick={() => {
                            setPriority(ic.priority)
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

  const gotoTask = (e:any) => {
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
            onClick={(e) => gotoTask(e)}
            className="flex flex-col ml-2">
            {name}
            <div className="text-xs pb-2">
              {description}
            </div>
            <div className="flex  text-xs">
              <AiOutlineCalendar
                size={14}
              />
              <div className="ml-1">
                {duedate ? duedate.toDateString() : 'No due date'}
              </div>
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