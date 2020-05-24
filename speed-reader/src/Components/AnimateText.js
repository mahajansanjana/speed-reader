import React, {useState} from 'react';

const AnimateText = ({play, text}) => { 
    const words = text.split(' ')
    const [index, setIndex] = useState(0)  
    return (
        <div>
            <p>{words[index]}</p>
        </div>
    ) 
}

export default AnimateText 
