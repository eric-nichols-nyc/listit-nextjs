import React from 'react'
import { VscSettings } from 'react-icons/vsc'
const Header = () => {
  return (
    <div>
      <div 
      className="
      flex
      justify-between
      px-16
      py-8
      ">
        <div>
          <span className="font-semibold text-lg">Today </span>
          <span className="text-sm">Tue Sep 5</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <VscSettings />
          <div className="text-sm">
            View
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header