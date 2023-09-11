"use client";
import Column from '@/components/Column'
import ColumnFooter from '@/components/AddTaskForm'
import Header from '@/components/Header';
import { useTaskStore } from '@/store/taskStore';
import {format} from 'date-fns'
import Calendar from '@/components/Calendar';

export default function Home() {
  const [tasks] = useTaskStore(state => [state.tasks, state.addTask])

  return (
    <div className="
        rightcontent
        flex 
        flex-col 
        px-16
        pt-8
      "
    >
      <Header />
      <div className="flex gap-6">
        <div className="w-full relative">
          <div className="flex relative text-sm font-semibold">{format(new Date(), 'MMM-dd')} - Today ({tasks.length})</div>
          <div
            className={`relative columncontainer w-full overflow-y-scroll pt-5`}
            style={{ maxHeight: 'none' }}>
            <Column />
          </div>
          <div>
            <ColumnFooter />
          </div>
        </div>
        <div className="pt-10">
          <Calendar />
        </div>
      </div>
    </div>
  )
}
