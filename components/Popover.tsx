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
}

const PopOver = ({
  header,
  body,
  footer,
  icon: Icon,
}: PopoverTriggerProps) => {
  return (
    <Popover>
      <PopoverTrigger onClick={(e) => { e.stopPropagation() }}>
        {
          Icon && (
            <Icon
              className="cursor-pointer"
              size={30}
            />
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