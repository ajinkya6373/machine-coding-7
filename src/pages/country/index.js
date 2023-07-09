import {useParams} from "react-router-dom"
import { data } from "../../util";
import {useNavigate} from "react-router-dom"

export default function CountriesPage() {
    const {cId} = useParams()
    const {continents}= data;
    const navigate = useNavigate()
    const Country = continents.filter((i)=>i.id.toString()===cId);
  return (
    <div>{
        Country[0].countries.map((i)=>{
            return<span key={i.id} 
            onClick={()=>navigate(`/destination/${cId}/${i.id}`)
        }
            >{i.name}</span>
        })
        }
    </div>
  )
}
