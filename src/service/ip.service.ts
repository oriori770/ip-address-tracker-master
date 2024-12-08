import {IIpRezultType}  from "../type/ip"
import axios from "axios"
const API_URL_START = "https://geo.ipify.org/api/v2/country,city?apiKey=at_zfsQEQKPR6irAu7HMdxNNCPZ7Ebof&ipAddress="

const findLocation = async (ip:string):Promise<IIpRezultType> => {
    const response = await axios.get(API_URL_START + ip);
    console.log(response);
    return response.data 
}

export default findLocation