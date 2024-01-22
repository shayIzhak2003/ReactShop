import { useState } from 'react'
import './App.css'
import GeolocationComponent from './commpontents/GeolocationComponent'
import IpAddressComponent from './commpontents/IpAddressComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GeolocationComponent/>
     <br />
     <IpAddressComponent/>
     
    </>
  )
}
export default App
