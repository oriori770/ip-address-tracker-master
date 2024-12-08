import React, { useState } from 'react'
import patternDesktop from "../assets/pattern-bg-desktop.png"
import { Box, colors } from '@mui/material'
import Map from './Map'
import Information from './Information.tsx'
import Top from './Top.tsx'
import { IInformation } from '../type/ip.ts'



const MianPage = () => {
    const [position, setPosition] = useState<[number, number]>([32.09, 34.82])
    const [information, setinformation] = useState<IInformation>({ipAddress:"", location:"", timezone:"", isp:""})

  return (
    <Box style={{ position: "relative", height:"100vh", width:"100vw"}}>
        <Top setPosition={setPosition} setinformation={setinformation}/>
        <Information information={information}/>
        <Map position={position}/>
    </Box>
  )
}

export default MianPage