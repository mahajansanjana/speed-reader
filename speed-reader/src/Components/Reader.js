import React, {useState, useEffect} from 'react';
import PlayPause from './PlayPause.js'
import AnimateText from './AnimateText'
import InputSlider from './InputSlider'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const Reader = ({text}) => {
    const [play, setPlay] = useState(false); 
    const [WPM, setWPM] = useState(50); 
    const toggle = (play) => (setPlay(!play)) 
    const getWPM = (WPM) => (setWPM(WPM))
    // spacebar functionality 
    useEffect(() => {
        window.addEventListener('keydown', (event) => (event.key === ' ' ? toggle(play) : null))
    }, [play])
    return (
        <div>
            <PlayPause play = {play} toggle = {toggle}/> 
            <AnimateText play = {play} text = {text} WPM = {WPM}/> 
            <InputSlider getWPM = {getWPM}/>
            <Link to="/">Back</Link>
        </div>
    )
} 

export default Reader