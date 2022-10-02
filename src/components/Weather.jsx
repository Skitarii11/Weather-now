import { Block } from "./styled/Block.styled"
import { useContext } from "react"
import { Context } from "../App"

const Weather = () => {
  const dat = useContext(Context)
  return (
    <Block>
        Weather
        <br/>
        <p>{dat && dat.weather && dat.weather[0] && dat.weather[0].main} <img src={`http://openweathermap.org/img/w/${dat.weather && dat.weather[0] && dat.weather[0].icon}.png`} alt="" /></p>
    </Block>
  )
}

export default Weather