import Column from '@/components/Column'
import ColumnFooter from '@/components/AddTaskForm'
import Image from 'next/image'

export default function Home() {
  const maxH = 660;

  return (
    <main>
      <div
        className="
        flex 
        px-16
        py-8"
      >
        <div className="w-[350px] relative">
          <div className="flex mb-2 relative">Sep 5 - Today 8</div>
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
    </main>
  )
}
