import React, {useEffect, useState, useRef} from 'react';
import styled from 'styled-components';

// Many thanks to Dan Abramov from overreacted.io !!!
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

const AnimateText = ({play, text, WPM}) => { 
    const words = text.split('\n').join(' ').split(' ') 
    const [index, setIndex] = useState(0)  
    const delay = 1000 / (WPM / 60) 
    useInterval((play) => {
        setIndex(index + 1) 
    }, play ? delay : null)
    return (
        <div style={{
          position: 'absolute', left: '50%', top: '40%',
          transform: 'translate(-50%, -50%)', fontSize: '5rem'}}
          > 
            {words[index]}
        </div>
    ) 
}

export default AnimateText 
