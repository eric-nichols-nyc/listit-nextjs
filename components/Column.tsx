"use client";
import {useEffect} from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Task from './Task';
import { getNewCardOrder } from '@/utils/getItemOrder';
import { useTaskStore } from '@/store/taskStore';
import { toast } from 'react-toastify';

const items = [
  {
    id: '1',
    name: 'task 1',
    order: 'c',
    description: 'This is my task description'
  },
  {
    id: '2',
    name: 'task 2',
    order: 'f',
    description: 'This is my task description'
  },
  {
    id: '3',
    name: 'task 3',
    order: 'h',
    description: 'This is my task description'
  },
  {
    id: '4',
    name: 'task 4',
    order: 'k',
    description: 'This is my task description'
  },
  {
    id: '5',
    name: 'task 5',
    order: 'm',
    description: 'This is my task description'
  },
  {
    id: '6',
    name: 'task 6',
    order: 'p',
    description: 'This is my task description'
  },
  {
    id: '7',
    name: 'task 7',
    order: 'r',
    description: 'This is my task description'
  },
  {
    id: '8',
    name: 'task 8',
    order: 'v'
  }
]

const Column = () => {
  const [tasks, setTasks, addTask, removeTask, updateTask] = useTaskStore(state =>
    [
      state.tasks,
      state.setTasks,
      state.addTask,
      state.removeTask,
      state.updateTask
    ])

  // setTasks(items)
  useEffect(() => {
    setTasks(items)
  }, [setTasks])

  const onDragEnd = (result: any) => {
    // 1. reorder our column
    const newColumns = [...tasks]
    const target = newColumns[result.source.index]
    // 2. get new order
    const newOrder = getNewCardOrder(
      tasks,
      result.source.index,
      result.destination.index
    )
    // 3. assign new order to column
    if (!newOrder) throw new Error('newOrder is undefined')
    target.order = newOrder
    setTasks(newColumns.sort((a, b) => a.order!.localeCompare(b.order!)))
  }

  return (
    <div>
      <div>
        <DragDropContext
          onDragEnd={(result) => onDragEnd(result)}
        >
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {
                  tasks.map((item: any, index: number) => (
                    <Draggable key={item.id} draggableId={item.id} index={index}>
                      {(provided, snapshot) => (
                        <Task
                          id={item.id}
                          key={item.id}
                          name={item.name}
                          description={item.description}
                          order={item.order}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          draggableHandleProps={provided.dragHandleProps}
                        />

                      )}
                    </Draggable>
                  ))
                }
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>

      </div>
    </div>
  )
}

export default Column