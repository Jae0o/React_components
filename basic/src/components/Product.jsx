import React, { useState } from 'react'
// import Price from '../../public/price.json'

export default function Product() {
    const [Json, setJson] = useState([]);

    fetch('data/Price.json')
        .then(item => item.json())
        .then((data) => {
            console.log(data);
            setJson(data);
        });

    return (
        <ul>
            {Json.map((Price) => (
                <li key={Price.id}>
                    <h3>{Price.name}</h3>
                    <p>{Price.price}</p>
                </li>
            ))}
        </ul>
    )
}
