import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const thumb = createMuiTheme({
  overrides: {
    MuiSlider: {
      thumb: {
        '&$focused, &$activated, &$jumped, &:hover': {
          border: 'none',
          boxShadow:'none',
        }
      }
    }
  }
})

export default function InputSlider({theme, getWPM}) {
  const useStyles = makeStyles({
    root: {
      width: 300,
    },
    inputLight: {
      color: '#363537',
      width: 55
    },
    inputDark: {
      color: 'white',
      width: 55
    },
    sliderLight: {
      color: '#363537',
      '.MuiSlider-thumb': {
        color: 'red'
      }
    },
    sliderDark: {
      color: 'white'
    },
  });
  
  const classes = useStyles()
  const [value, setValue] = React.useState(50)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
    getWPM(newValue)
  };

  const handleInputChange = (event) => {
    if (Number(event.target.value)) {
      setValue(Number(event.target.value))
      getWPM(Math.max(50, Math.min(Number(event.target.value), 1500)))
    }
    else if (event.target.value === '') {
      setValue(event.target.value)
    }
  };

/*
  const handleBlur = () => {
    if (value < 50) {
      setValue(50)
      getWPM(50)
    } else if (value > 1500) {
      setValue(1500)
      getWPM(1500)
    }
  };
*/

  return (
    <div className={classes.root}>
      <Grid container 
        spacing={2}>     
        <Grid item xs> 
        <ThemeProvider theme = {thumb}>
        <Slider
            className = {theme === 'light' ? classes.sliderLight : classes.sliderDark}
            step={5}
            min={50}
            max={1500}
            value={typeof value === 'number' ? value : 50}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </ThemeProvider>
        </Grid>
        <Grid item>
          <Input
            disableUnderline={true}  
            className={theme === 'light' ? classes.inputLight : classes.inputDark}
            value={value}
            width='1rem'
            margin="dense"
            //onBlur={handleBlur}
            onChange={handleInputChange}
            inputProps={{
              min: 50,
              max: 1500,
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}