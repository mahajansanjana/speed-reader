import React from "react";
import "./Text.css"

class EnterText extends React.Component {
  render () {
    return (
      <div>
        <h2>Enter text below, or upload a file.
        </h2>
        <form>
          <textarea name="text" rows="15" cols="100" wrap="soft"> </textarea>
          <button className="upload" type="submit">
            Upload File
          </button>
          <button className="read">
            Start Speedreading
          </button>
        </form>
      </div>
        )
    }
}

export default EnterText;