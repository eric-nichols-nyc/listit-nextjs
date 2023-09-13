import React, { use } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import {useTaskStore} from '@/store/taskStore'

ChartJS.register(ArcElement, Tooltip, Legend);

// converts tasks priority to chart data

const priorityToNumbers = (arr:string[]) => {
  const low = arr.filter((item:any) => item === "low")
  const medium = arr.filter((item: any) => item === "medium")
  const high = arr.filter((item: any) => item === "high")
  return [low.length, medium.length, high.length]
}

export default function Chart() {
  const tasks = useTaskStore(state => state.tasks)
  const priorities = tasks.map((task:Task) => task.priority)

  const data = {
    labels: ['Low', 'Medium', 'High'],
    datasets: [
      {
        label: 'Tasks',
        data: priorityToNumbers(priorities),
        backgroundColor: [
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(255, 99, 132, 0.2)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return <Doughnut data={data} />;
}
