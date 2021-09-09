import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function generateID() {
    return Math.floor(Math.random() * 100000000);
  }

export default function Selector({setValue,value,items,label,help,style}) {
  const classes = useStyles();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <FormControl className={classes.formControl} style={style}>
        <InputLabel id="demo-simple-select-helper-label">{label}</InputLabel>
        <Select
          required
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={value}
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {items.map(item=>(
              <MenuItem value={item} key={generateID()}>{item}</MenuItem>
          ))}
        </Select>
        <FormHelperText>{help}</FormHelperText>
      </FormControl>
    </>
  );
}
