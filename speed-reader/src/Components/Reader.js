import React, {useState, useEffect} from 'react';
import AnimateText from './AnimateText'
import PlayPause from './PlayPause.js'
import InputSlider from './InputSlider.js'
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton'
import { makeStyles } from '@material-ui/core/styles';
import Popover from './Popover.js'

const Reader = ({theme, text, getTextContents}) => {
    const [play, setPlay] = useState(false); 
    const [WPM, setWPM] = useState(50); 
    const toggle = (play) => {
        setPlay(!play)
    }
    const getWPM = (WPM) => (setWPM(WPM))
    const useStyles = makeStyles({
        bar: {
            position: 'absolute', left: '50%', top: '80%',
            transform: 'translate(-50%, -50%)', display: 'flex'
        },
        buttonLight: {
            top: '7%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '4%',
            color: '#363537',
            '&&:hover': {
                backgroundColor: 'transparent',
            }
        },
        buttonDark: {
            top: '7%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '4%',
            color: 'white', 
            '&&:hover': {
                backgroundColor: 'transparent',
            }
        }
    })  
    const classes = useStyles() 
    return (
        <div>
            <Popover />
            <div class = {classes.bar}>
                <div style = {{marginTop: '-2.55%', padding: '0rem 0.8rem'}}>
                    <PlayPause theme = {theme} play = {play} toggle = {toggle}/>
                </div>
                <InputSlider theme = {theme} getWPM = {getWPM}/>
                <span>wpm</span>
            </div>
            <AnimateText play = {play} text = {text} WPM = {WPM}/> 
            <Link to="/">
                <IconButton 
                    disableRipple = {true}
                    className = {theme === 'light' ? classes.buttonLight : classes.buttonDark} onClick = {() => getTextContents('')}
                >
                    <ArrowBackIcon fontSize = 'large'/>
                </IconButton>
            </Link>
        </div>
    )
} 

export default Reader