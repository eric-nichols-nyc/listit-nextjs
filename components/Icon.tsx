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
  selected?: boolean,
  onClick: () => void
}

const Icon = ({
  icon: Icon,
  color,
  tip,
  onClick,
  selected,
}: IconProps) => {

  const clicked = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    onClick()
  }
  return (
    <div 
    onClick={(e) => clicked(e)}
    className={
      `p-2
      ${selected && 'border'}
      `
    }>
      <Icon
        className="mr-2"
        color={color}
      />
    </div>
  )
}

export default Icon