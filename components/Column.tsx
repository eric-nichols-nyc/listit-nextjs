"use client";
import {useEffect} from 'react';
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import Task from './Task';
import { getNewCardOrder } from '@/utils/getItemOrder';
import { useTaskStore } from '@/store/taskStore';
import { items } from '@/constants';

const Column = () => {
  const [tasks, setTasks] = useTaskStore(state =>
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
      <div className="
       mycolumn
        w-[350px] 
        pr-2 
        h-full
      ">
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