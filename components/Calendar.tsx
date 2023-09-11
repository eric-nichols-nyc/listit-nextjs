import { useCallback, useEffect, useState } from 'react';
import { Calendar } from './ui/calendar';
import { useTaskStore } from '@/store/taskStore';
import { Checkbox } from './ui/checkbox';
import { toast } from 'react-toastify';

// Calendar component dynamically and reflects the dates of tasks
// if a date is selected the list at the bottom updated
const CalendarComponent = () => {
  // global state
  const [tasks, removeTask] = useTaskStore(state => [state.tasks, state.removeTask])

  // return unique dates from tasks
  const getUniqueDates = useCallback((arr:Task[]): Date[] => {
    const dates = arr.map((task:Task) => task.duedate)
    const unique = Array.from(new Set(dates))
    return unique.map(d => new Date(d))
  }, [tasks])

  // when a date is clicked, get items to show for this day 
  const getItemsForDay = (day: Date) => {
    setSelectedDate(day)
    const substring = day.toISOString().substring(0, 10)
    const list = tasks.filter(task => task.duedate.toISOString().substring(0, 10) === substring)
    const unique = Array.from(new Set(list))
    setFilteredDays(unique)
  }
  // local state
  const [selectedDays, setSelectedDays] = useState<Date[]>(getUniqueDates(tasks));
  const [filteredDays, setFilteredDays] = useState<any[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>()

  useEffect(() => {
    // refresh calendar dates when tasks change
    setSelectedDays(getUniqueDates(tasks))
    if(selectedDate){
      // refresh list of projects at bottom of calendar
      getItemsForDay(selectedDate)
    }
  }, [tasks, getUniqueDates, selectedDate])

  return (
    <div className=" border bg-gray-100">
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
            shadow-md
            "
          >
            <Checkbox 
              onCheckedChange={() => {
                setTimeout(() => {
                  toast("1 task completed");
                  removeTask(day.id)
                }, 300)
              }}
            />
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