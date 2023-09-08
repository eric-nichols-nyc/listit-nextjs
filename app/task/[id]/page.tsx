"use client";
import React from 'react'
import { useRouter
 } from 'next/navigation'
const Task = () => {
  const router = useRouter()
  return (
    <div
    onClick={() => {router.back()}}
    className="
    task-container
    absolute
    top-0
    bottom-0
    left-0
    right-0
    flex
    items-center
    justify-center
    w-[100vw]
    h-[100vh]
    bg-gray-100/50
    "
    >
      <div>
        Task
      </div>
    </div>
  )
}

export default Task