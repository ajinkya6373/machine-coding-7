import {data} from "../../util"
import {useNavigate} from "react-router-dom"
export default function ContinentsPage() {
    const {continents}= data;
    console.log(continents);
    const navigate = useNavigate()
  return (
    <div>
        {
            continents.map((i)=>{
                return <span 
                key={i.id}
                onClick={()=>navigate(`/country/${i.id}`)}
                >{i.name}</span>
            })
        }
    </div>
  )
}
