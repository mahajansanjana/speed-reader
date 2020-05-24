import React, {useEffect, useState, useRef} from 'react';

// Many thanks to Dan Abramov from overreacted.io! 
// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
}

const AnimateText = ({play, text}) => { 
    const words = text.split(' ')
    const [index, setIndex] = useState(0)  
    // hardcoded speed - flash word every 1 second. 
    const delay = 1000 // units are milliseconds 
    useInterval((play) => {
        setIndex(index + 1) 
    }, play ? delay : null)
    return (
        <div>
            <p>{words[index]}</p>
        </div>
    ) 
}

export default AnimateText 
