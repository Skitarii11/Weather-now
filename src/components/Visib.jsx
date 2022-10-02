import { Block } from "./styled/Block.styled"
import { useContext } from "react"
import { Context } from "../App"

const Visib = () => {
  const dat = useContext(Context)
  return (
    <Block>
        Pressure
        <br />
        <p>{dat.main?.pressure} hPa</p>
    </Block>
  )
}

export default Visib