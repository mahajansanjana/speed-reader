import React, {useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from './Components/Home.js'
import Reader from './Components/Reader.js'
import { MemoryRouter } from 'react-router'

const App = () => {

    const [text, setText] = useState('')

    const getTextContents = (dataFromText) => {
        setText(dataFromText)
    }

    // Callback function for UploadButton.
    const getFileContents = (dataFromUpload) => {
        setText(dataFromUpload)
    } 

    return (
        <MemoryRouter>
        <Switch>
            <Route exact path="/">
                <Home getTextContents = {getTextContents}/>
            </Route>
            <Route path="/Reader">
                <Reader text = {text}/>
            </Route>
        </Switch>
        </MemoryRouter>
    )
  
}

export default App
