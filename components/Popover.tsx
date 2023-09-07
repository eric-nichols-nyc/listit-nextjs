// reusable popover component
// takes in a header and a footer and body element
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "./ui/button"
import { TfiMore } from 'react-icons/tfi'

interface PopoverTriggerProps {
  header?: React.ReactElement,
  body: React.ReactElement,
  footer?: React.ReactElement,
}

const PopOver = ({
  header,
  body,
  footer,
}: PopoverTriggerProps) => {
  return (
    <Popover>
      <PopoverTrigger>
        <TfiMore />
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