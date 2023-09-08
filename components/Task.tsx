"use client";
import { useState } from 'react'
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


// and send in props
const Task = ({
  id,
  name,
  description,
  innerRef,
  draggableProps,
  draggableHandleProps,
}: Task) => {
  const router = useRouter()
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

  const changeTaskByType = (name:string) => {
    switch(name){
      case 'edit':
        setShowForm(true)
        break;
      case 'delete':
        removeTask(id)
        toast("1 task deleted");
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
      return (<LIButton
        key={item.id}
        id={item.id}
        label={item.title}
        icon={item.icon}
        disabled={item.disabled}
        onClick={changeTaskByType}
      />)
    } else {
      return (
      <div 
      key={index}
      className="py-1 border-b"
      >
        <div className="flex flex-col text-sm">
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
                          icon={ic.name}
                          color={ic.color}
                          tip={ic.tip}
                          selected={ic.selected}
                          onClick={() => { }}
                        />      
                      </TooltipTrigger>
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
            className="h-5 w-5 mt-1 rounded-full transition hover:bg-gray-200 hover:scale-125"
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