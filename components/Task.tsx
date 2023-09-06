"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AiOutlineCalendar } from "react-icons/ai"


const Task = ({
  id,
  name,
  innerRef,
  draggableProps,
  draggableHandleProps,
}: Task) => {
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
        <div className="flex items-center">
          <Checkbox />
          <div className="ml-2">
            {name}
          </div>
        </div>
        <div className="flex mt-2 text-xs">
          <AiOutlineCalendar />
          <div className="ml-1">
            Today
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default Task