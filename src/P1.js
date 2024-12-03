

let dados = [
    {
        "id":3,
        "nome":'A',
        "img":<img src="plane.jpg" className="img" alt="Planess"  id="planeimg"/>
    },
]
function Planes(props){


    return(
        <div className="Planes" >
            
            <h1>Planes</h1>
            {dados.map((item, index) => (
                <div key={index} className="Planes">
                    <h2>{item.nome}</h2>
                    <h2 >{item.id}</h2>
                    <h2 >{item.img}</h2>
                   </div>
                ))}
           
        </div>
        
    );
}
export default Planes;