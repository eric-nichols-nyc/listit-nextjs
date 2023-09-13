"use client";
import { Input } from "@/components/ui/input"
import { GiHamburgerMenu } from 'react-icons/gi'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineHome } from 'react-icons/ai'
import { MdOutlineAdd } from 'react-icons/md'
import AddTaskDropdown from "./AddTaskDropdown"
import { useTaskStore } from "@/store/taskStore"
import AccountDropdown from "./AccountDropdown";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {
  const [tasks, addTask] = useTaskStore(state => [state.tasks, state.addTask])
  const router = useRouter();
  const path = usePathname();
  console.log('params', path)
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
        h-[40px]
      ">
        {
          path === '/tasks' && (
            <>
              <div className="flex flex-1 gap-2 items-center">
                <RxHamburgerMenu
                  className="cursor-pointer"
                  color="white"
                  onClick={() => { alert("clicked") }}
                />
                <AiOutlineHome
                  className="cursor-pointer"
                  color="white"
                  onClick={() => { router.push("/") }}
                />
                <Input
                  disabled
                  className="mr-3 w-[300px] h-[2rem]"
                  placeholder="Search"
                />
              </div>
              <div className="flex-1 items-end">
                <AccountDropdown />
              </div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Header