"use client";
import Column from '@/components/Column'
import ColumnFooter from '@/components/AddTaskForm'
import { useEffect } from 'react';
import Header from '@/components/Header';

export default function Home() {
  const maxH = 660;
  const contentW = window.innerWidth - 350;

  useEffect(() => {
    import('preline')
  }, [])

  return (
      <div className="
        flex 
        flex-col 
        w-full 
        px-16
        py-8
      " 
      style={{width: contentW}}>
      <Header />

        <div>
          <div className="flex ">
            <div className="w-[350px] relative">
              <div className="flex mb-2 relative border-b ">Sep 5 - Today 8</div>
              <div
                className={`relative columncontainer w-full overflow-y-scroll pb-16`}
                style={{ maxHeight: maxH }}>
                <Column />
              </div>
              <div className="absolute bottom-[0px]">
                <ColumnFooter />
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
