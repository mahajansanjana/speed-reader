import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from './Components/Home.js'
import Reader from './Components/Reader.js'
import { MemoryRouter } from 'react-router'
import './App.css'
import ToggleSwitch from './Components/ToggleSwitch.js'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/GlobalStyles";
import { lightTheme, darkTheme } from "./Components/Themes"

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
        <ThemeProvider theme = {theme === 'light' ? lightTheme : darkTheme}>
        <>
        <GlobalStyles/>
        <div>
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
        </>
        </ThemeProvider>
    )
  
}

export default App
