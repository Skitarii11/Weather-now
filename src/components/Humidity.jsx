import { Block } from "./styled/Block.styled"
import { useContext } from "react"
import { Context } from "../App"

const Humidity = () => {
  const dat = useContext(Context)
  return (
    <Block>
        Humidity
        <br />
        <p>{dat.main?.humidity} %</p>
    </Block>
  )
}

export default Humidity