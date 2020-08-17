
import React, {useRef, useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause' 
import IconButton from '@material-ui/core/IconButton'

// Hook
function useEventListener(eventName, handler, element = window) {
    // Create a ref that stores handler
    const savedHandler = useRef()
  
    // Update ref.current value if handler changes.
    // This allows our effect below to always get latest handler ...
    // ... without us needing to pass it in effect deps array ...
    // ... and potentially cause effect to re-run every render.
    useEffect(() => {
      savedHandler.current = handler
    }, [handler])
  
    useEffect(
        () => {
        // Make sure element supports addEventListener
        // On 
        const isSupported = element && element.addEventListener
        if (!isSupported) return

        // Create event listener that calls handler function stored in ref
        const eventListener = event => savedHandler.current(event)

        // Add event listener
        element.addEventListener(eventName, eventListener)

        // Remove event listener on cleanup
        return () => {element.removeEventListener(eventName, eventListener)}
      },
      [eventName, element] // Re-run if eventName or element changes
    )
}

const PlayPause = ({theme, play, toggle}) => {
    const handler = (event) => {
        if (event.key === ' ') { 
            event.preventDefault()
            toggle(play)
        }
    }
    const useStyles = makeStyles({
        buttonLight: {
            color: '#363537',
            '&&:hover': {
                backgroundColor: 'transparent',
            }
        },
        buttonDark: {
            color: 'white',
            '&&:hover': {
                backgroundColor: 'transparent',
            }
        }
    })
    const classes = useStyles()
    useEventListener('keydown', handler)
    return (
        play ? 
        (<div>
            <IconButton 
                disableRipple = {true}
                className = {theme === 'light' ? classes.buttonLight : classes.buttonDark} onClick = {() => (toggle(play))}
            >
                <PauseIcon />
            </IconButton>
        </div>) 
        : 
        (<div>
            <IconButton 
                disableRipple = {true}
                className = {theme === 'light' ? classes.buttonLight : classes.buttonDark} onClick = {() => (toggle(play))}
            >
                <PlayArrowIcon />
            </IconButton>
        </div>) 
    )
}

export default PlayPause