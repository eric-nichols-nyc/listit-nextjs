import { Input } from "@/components/ui/input"
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { IconSize } from "@/constants"
import { MdOutlineAdd } from 'react-icons/md'

const Header = () => {
  return (
    <div>
      <div 
      className="
      flex
      justify-between
      items-center
      p-3
      bg-red-500
      ">
        <div className="flex flex-1 gap-2 items-center">
          <GiHamburgerMenu
            className="cursor-pointer"
            size={IconSize}
            color="white"
           />
          <AiOutlineHome
            className="cursor-pointer"
            size={IconSize} 
            color="white"
          />
          <Input
            className="mr-3 w-[300px]"
            placeholder="Search"
           />
        </div>
        <div className="flex-1">
          <MdOutlineAdd 
            className="cursor-pointer" 
            size={IconSize} 
            color="white"
          />
        </div>
        <div>
          <RxAvatar 
            className="cursor-pointer"
            size={IconSize}
            color="white"
          />
        </div>
      </div>
    </div>
  )
}

export default Header