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
import {getNewCardOrder} from '@/utils/getItemOrder'
import { toast } from 'react-toastify';

const AddtaskForm = () => {
  const notify = () => toast("Wow so easy!");

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
  

  const onSubmit = () => {
    let t:Task;
    t = { 
      id: (tasks.length + 1).toString(),
      name: task.name,
      description: task.description,
      order: getNewCardOrder(tasks, tasks.length-1, tasks.length)!,
    }
    addTask(t)
    setShowForm(false)
    toast("1 task added to today");
  }

  return (
    <div className="
    border-t-2
    w-[350px] 
    p-2 flex items-center cursor-pointer hover:text-red-600 bg-white
    ">
      {
        showForm ? (
          <Card>
            <CardHeader className="pt-2" />
            <CardContent>
              <div>
                <input
                  type="text"
                  className="border border-gray-200 p-2 w-full text-sm"
                  placeholder="Task name"
                  onChange={(e) => setTask({ ...task, name: e.target.value })}
                />
                <textarea
                  className="border border-gray-200 p-2 w-full text-sm mt-2"
                  placeholder="Description..."
                  onChange={(e) => setTask({ ...task, description: e.target.value })}

                />
              </div>
            </CardContent>
            <hr />
            <CardFooter>
              <div className="flex pt-2 gap-2">
                <Button variant="secondary">
                  <AiOutlineClose
                   onClick={() => setShowForm(false)}
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
        )
          :
          <div 
          onClick={() => setShowForm(true)}
          className='flex items-center cursor-pointer'>
            <GrAdd className="inline-block mr-2" />
            <div>
              Add task
            </div>
          </div>
      }

    </div>
  )
}

export default AddtaskForm