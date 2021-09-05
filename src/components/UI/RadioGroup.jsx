import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import './RadioGroup.css'

export default function RadioButtonsGroup({value,options,label,setOption,disabled,row}) {
  const handleChange = (event) => {
    setOption(event.target.value);
  };
  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }
  return (
    <FormControl component="fieldset">
      <RadioGroup row={row} aria-label={label} name={label} value={value} onChange={handleChange}>
        {options.map(option=>(
            <FormControlLabel key={generateID()} disabled={disabled} value={option} control={<Radio />} label={option} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
