// reusable popover component
// takes in a header and a footer and body element
"use client"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { IconType } from "react-icons"

interface PopoverTriggerProps {
  header?: React.ReactElement;
  body: React.ReactElement | React.ReactElement[];
  footer?: React.ReactElement;
  icon?: IconType;
  text?: string;
  color?: string;
  size?:number;
}

const PopOver = ({
  body,
  icon: Icon,
  text,
  color = 'black',
  size= 20
}: PopoverTriggerProps) => {
  return (
    <Popover>
      <PopoverTrigger onClick={(e) => { e.stopPropagation() }}>
        {
          Icon && (
            <Icon
              className="cursor-pointer"
              size={size}
              color={color}
            />
          )
        }
        {
          text && (
          <p className="text-[12px]">{text}</p>
          )
        }
      </PopoverTrigger>
      <PopoverContent>
        {
          body
        }
      </PopoverContent>
    </Popover>
  )
}

export default PopOver