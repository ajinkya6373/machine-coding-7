import React from 'react'
import {useParams,useNavigate} from "react-router-dom"
import { data } from '../../util';

export default function DestinationsPage() {
    const {cId,dId}  = useParams()
    const {continents}= data;
    const continent = continents.filter((i)=>i.id.toString()===cId)
    // console.log(continent[0].countries);
    console.log(dId);
    const country = continent[0].countries.filter((i)=>i.id.toString()===dId) 
    console.log(country);
  return (
    <div>
    {
        country[0]?.destinations?.map((i)=>{
            return <span key={i.id}>{i.name}</span>
        })
    }
    </div>
  )
}
