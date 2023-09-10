import { useEffect, useState } from "react";
import { IconType } from "react-icons";

interface IconProps {
  id: string;
  icon: IconType;
  color: string;
  priority?: string;
  onClick: () => void
}

const Icon = ({
  id,
  icon: Icon,
  color,
  onClick,
  priority,
}: IconProps) => {
  const [selected, setSelected] = useState(false)

  useEffect(() => {
    if(priority === id){
      setSelected(true)
    }else{
      setSelected(false)
    }
  },[id, priority])

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