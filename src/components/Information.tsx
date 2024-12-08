import { Box } from '@mui/material'
import React from 'react'
import { IInformation } from '../type/ip.ts'


const Information = ({information}:{information:IInformation}) => {
  return (
    <Box component="section" sx={{display:"flex", flexDirection:"row", justifyContent:"space-around",backgroundColor:"white",borderRadius:"10px", height:"15%",left:"50%",right:"50%", width:"75%", position:"absolute", transform: "translate(-50%, -50%)", zIndex:"1"}}>
      <div>
        <h3>IP Address</h3>
        <h2>{information.ipAddress}</h2>
      </div>
      <div>
        <h3>location</h3>
        <h2>{information.location}</h2>
      </div>
      <div>
        <h3>timezone</h3>
        <h2>{information.timezone}</h2>
      </div>
      <div>
        <h3>isp</h3>
        <h2>{information.isp}</h2>
      </div>
    </Box >
  )
}

export default Information