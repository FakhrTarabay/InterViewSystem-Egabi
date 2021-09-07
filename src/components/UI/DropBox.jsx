import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
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

export default function DropBox({func,items}) {
  const classes = useStyles();
  const [item, setItem] = React.useState('');

  const handleChange = (event) => {
    func(event.target.value)
    setItem(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Question</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={item}
          required
          onChange={handleChange}
          label="Question"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {items.map(item=>(
              <MenuItem key={generateID()} value={item}>{items.indexOf(item)+1}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
