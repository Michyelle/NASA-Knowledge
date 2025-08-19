import React from 'react';
import './Hero.css';
import { useState, useEffect } from 'react';

export default function Hero() {
    const [media, setMedia] = useState({
        url: '',
        copyright: '',
        title: '',
        date: '',
        explanation: '',
    });

    const API_KEY = import.meta.env.VITE_NASA_API_KEY;
    const API_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
    
    useEffect(() => {
        fetch(API_URL)
            .then(res => res.json())
            .then(data => {
                setMedia({
                    url: data.url,
                    media_type: data.media_type,
                    copyright: data.copyright,
                    title: data.title,
                    explanation: data.explanation,
                    date: data.date,
                });
            })
    }, []);


    return (        
        <section className="hero">
            <div className="hero-text">
                <h1>IMAGE OF THE DAY</h1>
                <p>Each day a different image of our universe will be featured along with a brief explanation from NASA</p>
                <h2>{media.title}</h2>
                <h3>{media.date}</h3>
            </div>

            <div className="image-container">
                <img width="600" height="600" src={media.url} alt="nasa image" />
                <h3>By: {media.copyright}</h3>
                <p>{media.explanation}</p>
            </div>
        </section>
    )
}
