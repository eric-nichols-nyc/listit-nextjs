"use client";
import Calendar from '@/components/Calendar';
import { Button } from './ui/button'
import { useTaskStore } from '@/store/taskStore';
import { Input } from './ui/input';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { BsListCheck } from 'react-icons/bs';

export const Sidenav = () => {
  const [tasks] = useTaskStore(state => [state.tasks])
  return (
    <div
      className="
      sidebar 
      fixed 
      top-[40px] 
      bottom-0 
      lg:left-0 
      p-2 w-[300px] 
      overflow-y-auto 
      text-left
       bg-gray-900
      "
    >
      <div className="pt-10">
        <Calendar />
      </div>
      <div>
        <Button className="w-full gap-2 justify-between" variant="outline">
          <div className="flex items-center gap-2">
            <BsListCheck />
            <div>All Tasks</div>
          </div>
          <div>{tasks.length}</div>
        </Button>
      </div>
      <div className="mt-4 mb-4 text-white">Groups</div>
      <ul className="max-w-xs flex flex-col">
        <li className="
          flex 
          gap-x-2 
          text-sm 
          font-medium 
          bg-white border 
          text-gray-800 
          dark:bg-gray-800 
          dark:border-gray-700 
          dark:text-white">
          <Button className="w-full gap-2 justify-between" variant="outline">
            <div className="flex items-center gap-2">
              <BsListCheck />
              <div>Personal</div>
            </div>
            <div>{tasks.length}</div>
          </Button>
        </li>
      </ul>
      <div className="flex items-center mt-4">
        <Input 
        className="w-full" 
        placeholder="Add a new group" 
        disabled
        />
        <AiOutlinePlusCircle 
        className="text-white ml-2" 
        size={30}
        />
      </div>
    </div>
  )
}

export default Sidenav
