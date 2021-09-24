import React, { useState, useEffect} from "react";

function App() {
    //const [a, b] = useState(c)
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => data.img);
        setIsLoaded(true);
        })

    }, []);

    if (!isLoaded) return <p>Loading...</p>;

    return (
        <img alt="A Random Dog">{data.img} </img>

    )
}

export default App;