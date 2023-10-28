import { useContext, useEffect, useState } from 'react'
import './App.css'

import { SocketContext } from './SocketProvider'

import { AirVisibilityCharts } from './components/AirVisibilityCharts'
import { TempCharts } from './components/TempCharts'
import { UvCharts } from './components/UvCharts'
import { WeatherCharts } from './components/WeatherCharts'
import { WindCharts } from './components/WindCharts'
import { data } from '../constants'
import { Navbar } from './components/Navbar'


function App() {
  const [search, setSearch] = useState("")
  const [weatherData, setWeatherData] = useState()
  const socket = useContext(SocketContext)

  // useEffect(() => {
  //   console.log(socket);
  //   if (socket) {
  //     socket.on("FromAPI", data => {
  //       console.log({ data })
  //     })
  //   }

  //   // return () => {
  //   //   socket.off('disconnect')
  //   // }
  // }, [])





  return (
    <div className="">
      <Navbar />
      <div className='bg-blue-100 my-10 p-2 m-2'>Search place section to be built</div>
      <div className='m-2'>
        <TempCharts data={{ ...data }} />
        {/* <UvCharts />
        <WindCharts />
        <AirVisibilityCharts />
        <WeatherCharts /> */}
      </div>
    </div>
  )
}

export default App
