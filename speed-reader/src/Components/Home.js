import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const Home = ({theme, getTextContents}) => {
    const useStyles = makeStyles({
        form: {
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '40%',
            textAlign: 'center'
        },
        taLight: {
            backgroundColor: 'white',
            color: '#363537'
        },
        taDark: {
            color: 'white',
            backgroundColor: '#363537',
        },
        buttonLight: {
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '80%',
            color: 'white',
            backgroundColor: '#363537',
            "&:hover": {
                background: '#363537'
            }
        },
        buttonDark: {
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '80%',
            color: '#363537',
            backgroundColor: 'white',
            "&:hover": {
                background: 'white'
            }
        }
    })
    const classes = useStyles()
    return (
        <div>
            <form class = {classes.form}> 
                <p>Enter your speedreading text below.</p>
                <textarea className = {theme === 'light' ? classes.taLight : classes.taDark}
                          rows = "15" cols = "85" name="text" 
                          onChange = {e => getTextContents(e.target.value)}>
                </textarea>
            </form>
            <Link to="/Reader" style={{ textDecoration: 'none' }}>
                <Button 
                    disableRipple = {true}
                    disableElevation = {true}
                    className = {theme === 'light' ? classes.buttonLight : classes.buttonDark} variant="contained"
                >
                    START
                </Button>
            </Link>
        </div>
    )
}

export default Home

