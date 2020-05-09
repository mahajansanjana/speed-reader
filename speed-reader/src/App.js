import React, {useEffect, useState} from 'react';
import './App.css';
import UploadButton from './UploadButton';
import Button from '@material-ui/core/Button';

const App = () => {

  const [text, setText] = useState('')
  const [check, setCheck] = useState(false)
  const updateText = (event) => {
    setText(event.target.value)
  }

  return (
    <div>
      <form>
        <h1>Enter text or upload a file.</h1>
        <textarea rows = "15" cols = "100" name="text" onChange = {updateText}></textarea>
      </form>
      <UploadButton/>
    </div>
  );
}

export default App;
