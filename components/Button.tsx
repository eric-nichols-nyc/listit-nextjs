import { Button } from "./ui/button";

import {IconType} from 'react-icons'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'text',
  label: string,
  diisabled?: boolean,
  icon?:IconType,
  onClick:(e:React.MouseEvent<HTMLButtonElement>) => void,
}

const LIButton = ({
  diisabled,
  label,
  onClick,
  icon: Icon,
}:ButtonProps) => {
  return (
    <Button
    className="
      justify-start
       w-full
       rounded-none
    "
      disabled={diisabled}
      onClick={onClick}
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