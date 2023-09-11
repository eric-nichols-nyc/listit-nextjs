import { useEffect, useState } from 'react';
import { Calendar } from './ui/calendar';
import { useTaskStore } from '@/store/taskStore';
import { set } from 'date-fns';

const CalendarComponent = () => {
  const tasks = useTaskStore(state => state.tasks)
  
  // return unique dates from tasks
  const getUniqueDates = ():Date[] => {
    const dates = tasks.map(task => task.duedate)
    const unique = Array.from(new Set(dates))
    return unique.map(d => new Date(d))
  }

  const [selectedDays, setSelectedDays] = useState<Date[]>(getUniqueDates());

  // refresh calendar when tasks change
  useEffect(() => {
    setSelectedDays(getUniqueDates())
  }, [tasks])
  
  return (
    <div>
      <Calendar 
      mode="multiple"
      selected={selectedDays}
    />
    </div>

  )
}

export default CalendarComponent