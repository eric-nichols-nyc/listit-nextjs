import Dropdown from "./Dropdown"

import { VscSettings } from 'react-icons/vsc'
const Header = () => {
  return (
    <div>
      <div 
      className="
      flex
      justify-between
      ">
        <div>
          <span className="font-semibold text-lg">Today </span>
          <span className="text-sm">Tue Sep 5</span>
        </div>
        <Dropdown
          label={'view'}
          name={'Layout'}
          items={[]}
         />
      </div>
    </div>
  )
}

export default Header