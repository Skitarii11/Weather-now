import { Temperatured } from "./styled/Temperatured.styled"
import { useContext } from "react"
import { Context } from "../App"

const Temperature = () => {
  const dat = useContext(Context)
  return (
    <Temperatured>
        Temperature
        <br/>
        <p>{dat.main?.temp}°C</p>
    </Temperatured>
  )
}

export default Temperature