import { useEffect, useState } from 'react';
import { Calendar } from './ui/calendar';
import { useTaskStore } from '@/store/taskStore';
import { set } from 'date-fns';

const CalendarComponent = () => {
  const tasks = useTaskStore(state => state.tasks)
  console.log('tasks from calendar = ', tasks)
  const dates = tasks.map(task => task.duedate?.toISOString())
  const unique = new Set(dates)
  console.log('dates = ', Array.from(unique))

  const [selectedDays, setSelectedDays] = useState<Date[]>(
    dates.map(d => new Date(d))
  );

  useEffect(() => {
    console.log('selectedDays = ',selectedDays)
  }, [selectedDays])

  useEffect(() => {
    const dates = tasks.map(task => task.duedate?.toISOString())
    setSelectedDays(dates.map(d => new Date(d)))
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