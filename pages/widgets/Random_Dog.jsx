import React from 'react'
import { useState } from 'react'
import Image from 'next/image';

const Character_Badge = () => {

    const [dog_src, set_dog_src] = useState("");

    const getRandomDog = () => {

        
        fetch('https://random.dog/woof.json')
        .then((response) => response.json())
        .then((data) => {set_dog_src(data["url"])});
    }
  

    return (
        <div>
            <button onClick={getRandomDog}>
                Fetch Dog
            </button>
            <img
                width={300}
                height={300}
                src={dog_src}
                // src={dog_src}
                alt="Test"
            ></img>
        </div>

    )
}

export default Character_Badge