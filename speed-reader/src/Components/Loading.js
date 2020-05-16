import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

// Loading page to display buffering animation. 
// Will need to automatically route to Read component within x seconds (i.e. no button)
const Loading = () => (
        <div id="Page-loading">
            <Link to="/">Home</Link>
        </div>
);

export default Loading