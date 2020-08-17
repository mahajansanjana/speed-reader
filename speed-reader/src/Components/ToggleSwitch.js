import React, {useState} from 'react'
import Toggle from 'react-toggle'
import './ToggleSwitch.css'
import NightsStayIcon from '@material-ui/icons/NightsStay'
import WbSunnyIcon from '@material-ui/icons/WbSunny'

const ToggleSwitch = ({toggleTheme}) => {
  const [check, setCheck] = useState(false)
  const toggleCheck = () => { 
    setCheck(!check)
  }
  toggleTheme(check)
  return (
    <label>
      <Toggle
        icons={{
          checked: <NightsStayIcon
                    fontSize = 'small'/>,
          unchecked: <WbSunnyIcon 
                     fontSize = 'small'/>
         }}
        defaultChecked={check}
        onChange={() => toggleCheck()}
      />
    </label>
  )
}

export default ToggleSwitch