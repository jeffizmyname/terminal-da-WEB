import { useState, useEffect } from 'react';

export default function Kitten() {
    const [kittenImage, setKittenImage] = useState(null);
    const apiKey = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        fetch(`https://api.thecatapi.com/v1/images/search?size=small&api_key=${apiKey}`)
            .then(res => res.json())
            .then(data => setKittenImage(data[0].url))
            .catch(error => console.error('Error fetching data:', error));
    }, [apiKey]);

    return (
        <div>
            {kittenImage && <img src={kittenImage} alt="kitten" />}
        </div>
    );
}
