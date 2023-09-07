"use client";
import { useState, useEffect } from 'react';
import { GrAdd } from 'react-icons/gr'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AiOutlineClose } from 'react-icons/ai';
import { useTaskStore } from '@/store/taskStore';
import { getNewCardOrder } from '@/utils/getItemOrder'
import { AiOutlineSend } from 'react-icons/ai'
import { useDetectClickOutside } from 'react-detect-click-outside';

interface TaskFormProps {
  title?: string,
  description?: string,
  dueDate?: Date,
  disable?: boolean,
  onSubmit: Function,
  onClose: () => void,
}
// if titel and descrip set as default values
const TaskForm = ({
  title,
  description,
  dueDate,
  onSubmit,
  disable = true,
  onClose
}:TaskFormProps) => {
  console.log(onSubmit)
  // global state
  const [tasks, addTask] = useTaskStore(state => [
    state.tasks,
    state.addTask,
  ]);
  // local state
  const [task, setTask] = useState({
    name: title || '',
    description: description || '',
  })

  return (
    <Card>
      <CardHeader className="pt-2" />
      <CardContent>
        <div>
          <input
            type="text"
            className="border border-gray-200 p-2 w-full text-sm"
            placeholder="Task name"
            defaultValue={title}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
          />
          <textarea
            className="border border-gray-200 p-2 w-full text-sm mt-2"
            placeholder="Description..."
            defaultValue={description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
          />
        </div>
      </CardContent>
      <hr />
      <CardFooter>
        <div className="flex pt-2 gap-2">
          <Button variant="secondary">
            <AiOutlineClose
              onClick={onClose}
            />
          </Button>
          <Button
            disabled={disable}
            onClick={() => onSubmit(task.name, task.description)}
            variant="destructive"
          >
            <AiOutlineSend />
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default TaskForm