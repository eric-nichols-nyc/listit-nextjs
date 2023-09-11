"use client";
import { Input } from "@/components/ui/input"
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineAdd } from 'react-icons/md'
import AddTaskDropdown from "./AddTaskDropdown"
import { useTaskStore } from "@/store/taskStore"
import AccountDropdown from "./AccountDropdown";
import Image from "next/image";
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
         <Image
          src="/images/logo.svg"
          alt="logo"
          width="30" 
          height="30"
         />
          <Input
            disabled
            className="mr-3 w-[300px] h-[2rem]"
            placeholder="Search"
          />
        </div>
        <div className="flex-1 justify-center">
            <AddTaskDropdown
            />
        </div>
        <div className="flex-1 items-end">
          <AccountDropdown />
        </div>
      </div>
    </div>
  )
}

export default Header