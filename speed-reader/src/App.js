






import React, {useEffect, useState} from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

const App = () => {

  const [text, setText] = useState('')
  const [check, setCheck] = useState(false)
  const updateText = (event) => {
    setText(event.target.value)
  }

  function Home() {
    return (
      <div>
        <form>
          <h1>Enter text or upload a file.</h1>
          <textarea rows = "15" cols = "100" name="text" onChange = {updateText}></textarea>
        </form>
        <p>{text}</p>
        <Link to="/Loading">Loading Page</Link>
      </div>
    );
  }

  function Loading() {
    return (
      <div id="Page-loading">
        <p>Hello, world!</p>
        <Link to="/">Home</Link>
      </div>
    );
  }

  function Reader() {
    return (
      <div id="Page-reader">
        <p>Goodbye, world!</p>
      </div>
    );
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Loading">
          <Loading />
        </Route>
        <Route path="/Reader">
          <Reader />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
