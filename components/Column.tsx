"use client";
import React from 'react'
import Task from './Task'
import ColumnFooter from '@/components/ColumnFooter'

import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { getNewCardOrder } from '@/utils/getItemOrder'

const items = [
  {
    id: '1',
    name: 'task 1',
    order: 'c'
  },
  {
    id: '2',
    name: 'task 2',
    order: 'f'
  },
  {
    id: '3',
    name: 'task 3',
    order: 'h'
  },
  {
    id: '4',
    name: 'task 4',
    order: 'k'
  },
  {
    id: '5',
    name: 'task 5',
    order: 'm'
  },
  {
    id: '6',
    name: 'task 6',
    order: 'p'
  },
  {
    id: '7',
    name: 'task 7',
    order: 'r'
  },
  {
    id: '8',
    name: 'task 8',
    order: 'v'
  }
]

const Column = () => {

  const [cards, setCards] = React.useState(items.sort((a, b) => a.order.localeCompare(b.order)))
  let maxH = 660;


  const onDragEnd = (result: any) => {
    // 1. reorder our column
    const newColumns = [...cards]
    const target = newColumns[result.source.index]
    console.log('target', target)
    // 2. get new order
    const newOrder = getNewCardOrder(
      cards,
      result.source.index,
      result.destination.index
    )
    // 3. assign new order to column
    if(!newOrder) throw new Error('newOrder is undefined')  
    target.order = newOrder
    setCards(newColumns.sort((a, b) => a.order.localeCompare(b.order)))
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
                   cards.map((item:any, index:number) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <Task 
                            id={item.id} 
                            key={item.id} 
                            name={item.name} 
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