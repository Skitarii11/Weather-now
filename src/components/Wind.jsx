import { Block } from "./styled/Block.styled"
import { useContext } from "react"
import { Context } from "../App"

const Wind = () => {
  const dat = useContext(Context)
  return (
    <Block>
        Wind
        <br />
        <p>{dat.wind?.speed} m/s</p>
    </Block>
  )
}

export default Wind