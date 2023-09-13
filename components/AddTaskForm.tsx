"use client";
import { useState, useEffect, useRef, ChangeEvent, use } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AiOutlineClose } from 'react-icons/ai';
import { useTaskStore } from '@/store/taskStore';
import {getNewCardOrder} from '@/utils/getItemOrder'
import { toast } from 'react-toastify';
import { set } from 'date-fns';

const AddtaskForm = () => {
  const ref = useRef<HTMLInputElement>(null)
  const [tasks, addTask] = useTaskStore(state => [
    state.tasks,
    state.addTask,
  ]);

  const [task, setTask] = useState({
    name: '',
    description: '',
  })

  const [showForm, setShowForm] = useState(false)
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    if(task.name.length > 0) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }, [task.name])

  // focus on input when form is shown
  useEffect(() => {
    if(showForm) {
      ref.current?.focus()
    }
  }, [showForm])
  

  const onSubmit = () => {
    if(task.name.length === 0) return
    let t:Task;
    t = { 
      id: (tasks.length + 1).toString(),
      name: task.name,
      description: task.description,
      duedate: new Date(),
      priority: "low",
      order: getNewCardOrder(tasks, tasks.length-1, tasks.length)!,
    }
    addTask(t)
    setTask({name: '', description: ''})
    setShowForm(false)
    toast("1 task added to today");
  }

  return (
    <div className="
      w-[342px] 
      p-2 
      flex 
      items-center 
      cursor-pointer 
      text-gray-400
      hover:text-red-600 
      hover:color-red-600
      bg-transparent
      relative
    ">
      {
        showForm ? (
          <div className="absolute bottom-0 left-0">
          <Card>
            <CardHeader className="pt-2" />
            <CardContent>
              <div>
                {/* name */}
                <input
                  ref={ref}
                  type="text"
                  className="border border-gray-200 p-2 w-full text-sm"
                  placeholder="Task name"
                  onChange={(e) => setTask({ ...task, name: e.target.value })}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        onSubmit()
                      }
                    }}
                />
                {/* description */}
                <textarea
                  className="border border-gray-200 p-2 w-full text-sm mt-2"
                  placeholder="Description..."
                  onChange={(e) => setTask({ ...task, description: e.target.value })}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                        onSubmit()
                      }
                    }}
                />
              </div>
            </CardContent>
            <hr />
            <CardFooter>
              <div className="flex pt-2 gap-2">
                <Button 
                  onClick={() => setShowForm(false)}
                  variant="secondary">
                  <AiOutlineClose
                   />
                </Button>
                <Button 
                disabled={disabled}
                onClick={onSubmit}
                variant="destructive"
                >Add task</Button>
              </div>
            </CardFooter>
          </Card>
          </div>
        )
          :
          <div 
            onClick={() => setShowForm(true)}
            className='flex items-center cursor-pointer'
          >
            <AiOutlinePlus className="inline-block mr-2" />
            <div>
              Add task
            </div>
          </div>
      }

    </div>
  )
}

export default AddtaskForm