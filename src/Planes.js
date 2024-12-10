

/*let dados = [
    {
        "id": 1,
        "nome": "F-22 Raptor",
        "tipo": "Ataque",
        "velocidadeMaxima": "2410 km/h",
        "img":<img src="img\f22.jpg" alt="Foto de um avião" width="500"></img>    },
    {
        "id": 2,
        "nome": "Su-57 Felon",
        "tipo": "Ataque",
        "velocidadeMaxima": "2600 km/h",
        "img":<img src="img\Su57.jpg" alt="Foto de um avião" width="500"></img>
    },
    {
        "id": 3,
        "nome": "Boeing 747",
        "tipo": "Comercial",
        "velocidadeMaxima": "988 km/h",
        "img":<img src="img\boeing747.jpg" alt="Foto de um avião" width="500"></img>
        
    },
    {
        "id": 4,
        "nome": "Airbus A380",
        "tipo": "Comercial",
        "velocidadeMaxima": "1020 km/h",
        "img":<img src="img\A380.jpg" alt="Foto de um avião" width="500"></img>
    },
]*/

import { Link} from "react-router-dom";
import dados from "./dados.json";

function Planes(props){


    return(
        (
            <body className="body">
                <div className="planes">
                    {dados.map((item, index) => (
                        <div key={index} className="plane">
                            <h1 >{item.nome}</h1>
                            <Link to={"/Planes/"+item.id}>
                            <img src={item.img} className="plane-img"/>
                            </Link>
                            <p>Tipo: {item.tipo}</p>
                            <p>Velocidade Máxima: {item.velocidadeMaxima}</p>
                        </div>
                    ))}
                </div>
            </body>
        )
    );
}
export default Planes;