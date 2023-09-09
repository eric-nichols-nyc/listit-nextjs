import Dropdown from "./Dropdown"
import { format } from 'date-fns'

const Header = () => {
  return (
    <div>
      <div 
      className="
      flex
      justify-between
      pb-10
      ">
        <div>
          <span className="font-semibold text-lg">Today </span>
          <span className="text-sm">{format(new Date(), 'eee-MMM-dd')}</span>
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