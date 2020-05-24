import React, {useState} from 'react';
import PlayPause from './PlayPause.js'
import AnimateText from './AnimateText'

const Reader = ({text}) => {
    const [play, setPlay] = useState(false); 
    const toggle = (play) => (setPlay(!play))
    return (
        <div>
            <PlayPause play = {play} toggle = {toggle}/> 
            <AnimateText play = {play} text = {text}/> 
        </div>
    )
} 

export default Reader