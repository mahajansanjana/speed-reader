import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import Home from './Components/Home.js'
import Loading from './Components/Loading.js'
import { MemoryRouter } from 'react-router'

const App = () => {

    let [text, setText] = useState('')

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
            <Route path="/Loading">
                <Loading text = {text}/>
            </Route>
        </Switch>
        </MemoryRouter>
    )
  
}

export default App
