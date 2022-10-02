import { Container } from "./components/styled/Container.styled"
import Highlight from "./components/Highlight"
import Side from "./components/Side"
import Logo from "./components/Logo"
import { Global } from "./components/styled/Global"
import { Sided } from "./components/styled/Sided.styled"
import React, { useState, useEffect,} from "react"

export const Context = React.createContext();

function App() {
  const [appi,setAppi] =useState('');
  const [items, setItems] = useState({});

  const keyDown = (event) => {
    if(event.key== "Enter"){
      const cit = document.getElementById('city').value;
      setAppi(cit);
    }
  }

  useEffect(()=>{

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${appi}&appid=52bbf4763c8ac755580d01a51096eaf8&units=metric`)
    .then(res => res.json())
    .then(json => setItems(json))
  },[appi])
  

  return (
    <>
      <Global />
      <Context.Provider value={items}>
        <Container>
          <Logo />
          <Highlight />
          <Sided>
            <input onKeyDown={keyDown} type="text" id="city"/>
            <Side />
          </Sided>
        </Container>
      </Context.Provider>
    </>
  )
}

export default App
