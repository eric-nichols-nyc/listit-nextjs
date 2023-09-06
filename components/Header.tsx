import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { VscSettings } from 'react-icons/vsc'
const Header = () => {
  return (
    <div>
      <div 
      className="
      flex
      justify-between
      ">
        <div>
          <span className="font-semibold text-lg">Today </span>
          <span className="text-sm">Tue Sep 5</span>
        </div>
        <Popover>
          <PopoverTrigger>
            <div className="flex items-center gap-2 cursor-pointer">
              <VscSettings />
              <div className="text-sm">
                View
              </div>
            </div>
          </PopoverTrigger>
          <PopoverContent>Place content for the popover here.</PopoverContent>
        </Popover>
      </div>
    </div>
  )
}

export default Header