"use client";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AiOutlineCalendar } from "react-icons/ai"
import { useTaskStore } from "@/store/taskStore";
import { toast } from "react-toastify";

const Task = ({
  id,
  name,
  description,
  innerRef,
  draggableProps,
  draggableHandleProps,
}: Task) => {

  const [removeTask] = useTaskStore(state => [
    state.removeTask,
  ]);

  return (
    <Card
      id={id}
      className="mb-2"
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
            <div>
              {name}
            </div>
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
      </CardContent>
    </Card>
  )
}

export default Task