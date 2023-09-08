import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { IconType } from "react-icons";

interface IconProps {
  icon: IconType,
  color: string,
  tip: string,
}

const Icon = ({
  icon: Icon,
  color,
  tip,
}: IconProps) => {
  return (
    <div className="p-2">
      <Icon
        className="mr-2"
        color={color}
      />
    </div>
  )
}

export default Icon