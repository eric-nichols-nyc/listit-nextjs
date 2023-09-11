import { useCallback, useEffect, useState } from 'react';
import { Calendar } from './ui/calendar';
import { useTaskStore } from '@/store/taskStore';
import Task from './Task';
import { Checkbox } from './ui/checkbox';

// Calendar component dynamically and reflects the dates of tasks
const CalendarComponent = () => {
  const tasks = useTaskStore(state => state.tasks)

  // return unique dates from tasks
  const getUniqueDates = useCallback((): Date[] => {
    const dates = tasks.map(task => task.duedate)
    const unique = Array.from(new Set(dates))
    return unique.map(d => new Date(d))
  }, [tasks])

  // get items to show for this day
  const getItemsForDay = (day: Date) => {
    const substring = day.toISOString().substring(0, 10)
    const list = tasks.filter(task => task.duedate.toISOString().substring(0, 10) === substring)
    const unique = Array.from(new Set(list))
    setFilteredDays(unique)
  }

  const [selectedDays, setSelectedDays] = useState<Date[]>(getUniqueDates());
  const [filteredDays, setFilteredDays] = useState<any[]>([])
  useEffect(() => {
    setFilteredDays([] as any[])
  }, [selectedDays])

  // refresh calendar when tasks change
  useEffect(() => {
    setSelectedDays(getUniqueDates())
  }, [tasks, getUniqueDates])

  return (
    <div className=" border-2 bg-gray-100">
      <Calendar
        className="bg-white"
        mode="multiple"
        selected={selectedDays}
        onDayClick={(day) => { getItemsForDay(day) }}
      />
      <div>
        {filteredDays.map(day => (
          <div 
            key={day.id}
            className="
            flex 
            p-2 
            my-2
            gap-2 
            items-center
            bg-white
            "
          >
            <Checkbox />
            <div>
              <div className="text-sm">{day.name}</div>
              <div className='text-xs'>{day.duedate.toDateString()}</div>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>

  )
}

export default CalendarComponent