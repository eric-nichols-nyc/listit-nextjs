import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Palette,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import TaskForm from "./TaskForm"
import { IconSize } from "@/constants"
import { MdOutlineAdd } from 'react-icons/md'

export default function AddTaskDropdown() {
  return (
    <div className="w-full flex justify-center">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div>
            <MdOutlineAdd
              className="cursor-pointer"
              size={IconSize}
              color="white"
            />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-200">
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
                <DropdownMenuItem>
                    <button>close</button>
                </DropdownMenuItem>
              </div>
            </CardFooter>
          </Card>

        </DropdownMenuContent>
      </DropdownMenu>
    </div>

  )
}
