import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SelectDemo() {
  return (
    <Select disabled={true}>
      <SelectTrigger className="w-full]">
        <SelectValue placeholder="Select a layout" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="board">Board</SelectItem>
          <SelectItem value="list">List</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
