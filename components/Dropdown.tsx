import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { VscSettings } from 'react-icons/vsc'
import Select from "./Select"

interface DropdownProps {
  label?: string,
  name?: string,
  items: string[],
}

export default function DropdownMenuDemo({
  label,
  name,
}: DropdownProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className="flex items-center gap-2 cursor-pointer">
              <VscSettings />
              <div className="text-sm">
                {label}
              </div>
            </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />
      <Select />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
