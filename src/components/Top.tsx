import { Box, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import findLocation from '../service/ip.service'
import { IInformation } from '../type/ip.ts'
import InputAdornment from '@mui/material/InputAdornment';



const Top = ({setPosition, setinformation}:{setPosition:React.Dispatch<React.SetStateAction<[number, number]>>, setinformation:React.Dispatch<React.SetStateAction<IInformation>>}) => {
  const [IpAddress, setIpAddress] = useState("")

  useEffect(() => {
    const getIP = async () => {
      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      hendeler(data.ip); 
    }
    getIP()
  },[])
    const hendeler = async(ipAddress:string) => {
        const ip = await findLocation(ipAddress)
        setPosition([ip.location.lat, ip.location.lng])
        setinformation({ipAddress:ip.ip, location:ip.location.city + " " + ip.location.postalCode, timezone:ip.location.timezone, isp:ip.isp})
    }

  return (
    <div style={{width:"100%", height:"35%",position:"relative"}}>
        <h1 style={{position:"absolute", top:"10%", left:"50%", transform: "translate(-50%, -50%)"}}>IP ADDRESS TRACKER</h1>

        <Box  sx={{position:"absolute", top:"50%", left:"50%", transform: "translate(-50%, -50%)", backgroundColor:"white", borderRadius:"12px", height:"15%",display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
            <TextField label="Filled"  fullWidth variant="filled" sx={{borderRadius: '12px'}}
            
              onChange={(e) => setIpAddress(e.target.value)}   />
          <div style={{backgroundColor:"black", borderRight:"50%"}}>
          <img
                    onClick={() => hendeler(IpAddress)} src="./src/assets/icon-arrow.svg"
                    alt="search icon"
                    style={{
                      marginTop: "5px",
                      width: 40, height: 40 }} // קביעת גודל האייקון
                      />
          </div>
        </Box>
        <img style={{width:"100%", height:"100%", zIndex:"0"}} src="./src/assets/pattern-bg-desktop.png" alt=""/>
    </div>
  )
}

export default Top