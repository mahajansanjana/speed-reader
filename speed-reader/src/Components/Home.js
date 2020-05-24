import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
// import UploadButton from './UploadButton.js'

const Home = ({getTextContents}) => (
    <div>
        <form>
            <h1>Enter text or upload a file.</h1>
            <textarea 
            rows = "15" cols = "100" name="text" onChange = {e => getTextContents(e.target.value)}>
            </textarea>
        </form>
        {/* <UploadButton /> */}
        <Link to="/Reader">Loading Page</Link>
    </div>
);

export default Home

