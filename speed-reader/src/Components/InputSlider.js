import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
  root: {
    width: 250,
  },
  input: {
    width: 42,
  },
});

export default function InputSlider({getWPM}) {
  const classes = useStyles()
  const [value, setValue] = React.useState(50)

  const handleSliderChange = (event, newValue) => {
    setValue(newValue)
    getWPM(value)
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value))
    getWPM(value)
  };

  const handleBlur = () => {
    if (value < 50) {
      setValue(50)
      getWPM(value)
    } else if (value > 2000) {
      setValue(2000)
      getWPM(value)
    }
  };

  return (
    <div className={classes.root}>
      <Typography id="input-slider" gutterBottom>
        WPM
      </Typography>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs>
          <Slider
            min={50}
            max={2000}
            value={typeof value === 'number' ? value : 50}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
          />
        </Grid>
        <Grid item>
          <Input
            className={classes.input}
            value={value}
            margin="dense"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 50,
              max: 2000,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}