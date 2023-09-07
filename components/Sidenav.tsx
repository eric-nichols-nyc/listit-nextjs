import React from 'react'
import { BsInbox } from 'react-icons/bs'
import { MdOutlineCalendarToday } from 'react-icons/md'
import { MdCalendarToday } from 'react-icons/md'
import { Button } from './ui/button'

export const Sidenav = () => {
  return (
    <div
    className="
    w-[320px]
    bg-gray-100
    pt-8
    "
    >
      <ul className="max-w-xs flex flex-col">
        <li className="
          flex 
          gap-x-2 
          text-sm 
          font-medium 
          bg-white border 
          text-gray-800 
          -mt-px 
          dark:bg-gray-800 
          dark:border-gray-700 
          dark:text-white">
          <Button className="w-full gap-2 justify-start" variant="outline">
            <MdOutlineCalendarToday />
            Today
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Sidenav
