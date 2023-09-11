"use client";
import { MdOutlineCalendarToday } from 'react-icons/md'
import { Button } from './ui/button'
import { useTaskStore } from '@/store/taskStore';
export const Sidenav = () => {
  const [tasks] = useTaskStore(state => [state.tasks])
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
          <Button className="w-full gap-2 justify-between" variant="outline">
            <div className="flex items-center gap-2">
              <MdOutlineCalendarToday />
              <div>Tasks</div>
            </div>

            <div>{tasks.length}</div>
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default Sidenav
