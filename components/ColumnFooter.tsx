"use client";
import { useState } from 'react';
import { GrAdd } from 'react-icons/gr'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AiOutlineClose } from 'react-icons/ai';

interface ColumnFooterProps {
  onSubmit: (name: string) => void;
}

const ColumnFooter = () => {
  const [showForm, setShowForm] = useState(false)
  return (
    <div className="
    border-t-2
    w-[350px] 
    p-2 flex items-center cursor-pointer hover:text-red-600 bg-white
    ">
      {
        showForm ? (
          <Card>
            <CardHeader className="pt-2" />
            <CardContent>
              <div>
                <input
                  type="text"
                  className="border border-gray-200 p-2 w-full text-sm"
                  placeholder="Task name"
                />
                <textarea
                  className="border border-gray-200 p-2 w-full text-sm mt-2"
                  placeholder="Description..."

                />
              </div>
            </CardContent>
            <hr />
            <CardFooter>
              <div className="flex pt-2 gap-2">
                <Button variant="secondary">
                  <AiOutlineClose />
                </Button>
                <Button variant="destructive">Add task</Button>
              </div>
            </CardFooter>
          </Card>
        )
          :
          <div>
            <GrAdd className="inline-block mr-2" />
            <div>
              Add task
            </div>
          </div>
      }

    </div>
  )
}

export default ColumnFooter