"use client";
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { AiOutlineCalendar } from "react-icons/ai"


const Task = ({
  id,
  name,
  description,
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
          <div className="flex flex-col ml-2">
            <div>
              {name}
            </div>
            <div className="text-sm">
              {description}
            </div>
            <div className="flex mt-2 text-xs">
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