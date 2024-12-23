
import { useParams,Link } from 'react-router-dom';
import dados from "./dados.json";



function Plane(){

    // Get the userId param from the URL
    let {id} = useParams();
    
    const plane = dados.filter( (item) => item.id == id)


    console.log(plane[0]);

    return(
        
        <div className="plane-details">
            <h1 id="name">Plane {plane[0].nome}</h1>
            <img src={plane[0].img} alt={plane[0].nome} id='img'/>
            <h1 ><a href={plane[0].link} target="_blank" rel="noopener noreferrer">Mais info</a>
            </h1>
            <h1>
            <Link to="/" >
                <button id="linkButton">-Go Back-</button>
            </Link>
            </h1>
        
        </div>
    )
}
export default Plane;