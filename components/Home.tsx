"use client";
import Column from '@/components/Column'
import ColumnFooter from '@/components/AddTaskForm'
import Header from '@/components/Header';
import { useTaskStore } from '@/store/taskStore';
import {format} from 'date-fns'
import Calendar from '@/components/Calendar';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [tasks] = useTaskStore(state => [state.tasks, state.addTask])
  const router = useRouter()
  return (
    <div className="
        flex 
        flex-col 
        px-16
        pt-8
        h-full
        w-[100vw]
        justify-center
      "
    >
      <div className="
        flex 
        flex-col
        items-center
        justify-center
      ">
        <Image 
          src="/images/logo.svg"
          width={100}
          height={100}
          alt="logo"
          className="mb-10"
        />
        <h1 className="text-xl font-semibold">Welcome to Listit!</h1>
        <h4>Lisiit is a demo task manager and to-do list app.</h4>
        <div className="px-6 sm:px-0 max-w-sm mt-10">
          <button 
          onClick={() => router.push('/tasks')}
          type="button" 
          className="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path>
          </svg>Login with Google<div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}
