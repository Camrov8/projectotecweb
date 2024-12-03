

let dados = [
    {
        "id":2,
        "nome":'A',
    },
]
function Planes(props){


    return(
        <div>
            <h1>Planes</h1>
            {dados.map((item, index) => (
                <div key={index} className="planes">
                    <h2>{item.nome}</h2>
                    <h2>{item.id}</h2>
                </div>
            ))}
        </div>
    );
}
export default Planes;