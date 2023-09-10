"use client";
import { Input } from "@/components/ui/input"
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { RxAvatar } from 'react-icons/rx'
import { IconSize } from "@/constants"
import { MdOutlineAdd } from 'react-icons/md'
import PopOver from "./Popover"
import TaskForm from "./TaskForm"
import { useTaskStore } from "@/store/taskStore"
import AccountDropdown from "./AccountDropdown";
const Header = () => {
  const [tasks, addTask] = useTaskStore(state => [state.tasks, state.addTask])
  return (
    <div>
      <div
        className="
        topbar
        flex
        justify-between
        items-center
        px-3
        py-1
        bg-red-500
      ">
        <div className="flex flex-1 gap-2 items-center">
          <GiHamburgerMenu
            size={IconSize}
            color="white"
          />
          <AiOutlineHome
            size={IconSize}
            color="white"
          />
          <Input
            disabled
            className="mr-3 w-[300px]"
            placeholder="Search"
          />
        </div>
        <div className="flex-1">
          <PopOver
            body={<TaskForm 
              onClose={() => {}}
              onSubmit={addTask}
            />}
            icon={MdOutlineAdd}
          />
        </div>
        <div>
          <AccountDropdown />
        </div>
      </div>
    </div>
  )
}

export default Header