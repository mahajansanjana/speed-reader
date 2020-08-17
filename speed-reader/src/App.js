import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from './Components/Home.js'
import Reader from './Components/Reader.js'
import { MemoryRouter } from 'react-router'
import './App.css'
import ToggleSwitch from './Components/ToggleSwitch.js'
import Helmet from 'react-helmet';

const App = () => {
    const [text, setText] = useState('')
    const getTextContents = (dataFromText) => {
        setText(dataFromText)
    } 
    const [theme, setTheme] = useState('light'); 
    const toggleTheme = (checked) => {
        (!checked) ? setTheme('light') : setTheme('dark')
    }
    return (
        <div className = {theme == 'light' ? 'light' : 'dark'}>
            <Helmet bodyAttributes={{style: theme == 'light' ? 'background-color : #FAFAFA' : 'background-color : #363537'}}/>
            <ToggleSwitch toggleTheme = {toggleTheme} />
                <MemoryRouter>
                    <Switch>
                        <Route exact path="/">
                            <Home theme = {theme} getTextContents = {getTextContents}/>
                        </Route>
                        <Route path="/Reader">
                            <Reader theme = {theme} text = {text} getTextContents = {getTextContents}/>
                        </Route>
                    </Switch>
                </MemoryRouter>
        </div>
    ) 
}

export default App
