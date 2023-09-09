"use client";
import Column from '@/components/Column'
import ColumnFooter from '@/components/AddTaskForm'
import Header from '@/components/Header';

export default function Home() {
  const maxH = 660;

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
      <div className="flex">
        <div className="w-full relative">
          <div className="flex relative">Sep 5 - Today 8</div>
          <div
            className={`relative columncontainer w-full overflow-y-scroll pt-5`}
            style={{ maxHeight: 'none' }}>
            <Column />
          </div>
          <div>
            <ColumnFooter />
          </div>
        </div>
      </div>
    </div>
  )
}
