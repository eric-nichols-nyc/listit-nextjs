import { useEffect, useState } from 'react';
import { Calendar } from './ui/calendar';

const CalendarComponent = () => {
  const [selectedDay, setSelectedDay] = useState<Date[]>(
    [
      "2023-09-11T04:00:00.000Z",
      //"2023-09-26T04:00:00.000Z"
    ].map(d => new Date(d))
  );

  useEffect(() => {
    console.log(selectedDay)
  }, [selectedDay])
  
  return (
    <div>
      <Calendar 
      mode="multiple"
      selected={selectedDay}
    />
    </div>

  )
}

export default CalendarComponent