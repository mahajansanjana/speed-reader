import React from 'react'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled'
import IconButton from '@material-ui/core/IconButton'
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled'

const PlayPause = ({play, toggle}) => { 
    return (  
        play 
        ? 
        (<div>
            <IconButton onClick = {() => (toggle(play))}>
                <PauseCircleFilledIcon />
            </IconButton>
        </div>) 
        : 
        (<div>
            <IconButton onClick = {() => (toggle(play))}>
                <PlayCircleFilledIcon />
            </IconButton>
        </div>) 
    )
}
export default PlayPause

