import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Plane() {
    // Get the userId param from the URL
    let { id } = useParams();

    // State to hold the list of planes and the selected plane
    const [plane, setPlane] = useState(null);

    // Fetch the data from the API
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:5000/ler`);
                const data = await response.json();

                // Filter the plane based on the id from the URL
                const selectedPlane = data.find((item) => item.id == id);
                setPlane(selectedPlane);
            } catch (error) {
                console.error("Error fetching the plane data:", error);
            }
        }
        fetchData();
    }, [id]);

    // Render a loading state if the data hasn't loaded yet
    if (!plane) {
        return <div>Loading...</div>;
    }

    return (
        <div className="plane-details">
            <h1 id="name">Plane {plane.nome}</h1>
            <img src={plane.img} alt={plane.nome} id="img" />
            <h1>
                <a href={plane.link} target="_blank" rel="noopener noreferrer">Mais info</a>
            </h1>
            <h1>
                <Link to="/">
                    <button id="linkButton">-Go Back-</button>
                </Link>
            </h1>
        </div>
    );
}

export default Plane;