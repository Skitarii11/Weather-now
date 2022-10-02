import Weather from "./Weather"
import Visib from "./Visib"
import Wind from "./Wind"
import Humidity from "./Humidity"
import { Innerhighed } from "./styled/Innerhighed.styled"

const Innerhigh = () => {
  return (
    <Innerhighed>
        <Weather />
        <Visib />
        <Wind />
        <Humidity />
    </Innerhighed>
  )
}

export default Innerhigh