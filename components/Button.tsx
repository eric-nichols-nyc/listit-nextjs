import { Button } from "./ui/button";

import {IconType} from 'react-icons'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text',
  id: string;
  label: string,
  disabled?: boolean,
  icon?:IconType,
  onClick:(id:string) => void,
}

const LIButton = ({
  disabled,
  label,
  id,
  onClick,
  icon: Icon,
}:ButtonProps) => {

  const clicked = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    onClick(id)
  }

  return (
    <Button
    variant="ghost"
    className="
      justify-start
       w-full
       rounded-none
       my-1
    "
      disabled={disabled}
      onClick={clicked}
    >
      {
        Icon && (
          <Icon className="mr-2" />
        )
      }
      {label}
    </Button>
  )
}

export default LIButton