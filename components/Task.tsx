"use client";
import { useState } from 'react'
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AiOutlineCalendar } from "react-icons/ai"
import { useTaskStore } from "@/store/taskStore";
import { toast } from "react-toastify";
import { Button } from "./ui/button";
import PopOver from "./Popover";
import TaskForm from './TaskForm';

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

  const updateCurrentTask = (name: string, description:string) => {
    const t = {
      id: id,
      name: name,
      description: description,
    }
    updateTask(id, t)
    setShowForm(false)
    toast("1 task updated");
  }

  const bodycontent = (
  <>
    <Button 
      onClick={() => setShowForm(true)}
      className="w-full gap-2 justify-start rounded-none" 
      variant="ghost"
    >
      Edit
    </Button>
    <Button
        onClick={() => removeTask(id)  }
        className="w-full gap-2 justify-start rounded-none" variant="ghost"
    >
      Delete
    </Button>
  </>)

  if(showForm) return <TaskForm
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