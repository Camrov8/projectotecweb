
import { useParams } from 'react-router-dom';
import dados from "./dados.json";



function Plane(){

    // Get the userId param from the URL
    let {id} = useParams();
    
    const plane = dados.filter( (item) => item.id == id)


    console.log(plane[0]);

    return(
        <div className="plane-details">
            <h1 >Plane {plane[0].nome}</h1>
            <img src={plane[0].img} alt={plane[0].nome} />
            
        
        </div>
    )
}
export default Plane;