import React from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

export default function RadioButtonsGroup({
  value,
  options,
  label,
  setOption,
  disabled,
  row,
  flag,
  index,
}) {
  const handleChange = (event) => {
    if (flag === 1) {
      setOption(event.target.value, index);
    } else {
      setOption(event.target.value);
    }
  };
  function generateID() {
    return Math.floor(Math.random() * 100000000);
  }
  return (
    <FormControl component="fieldset">
      <RadioGroup
        row={row}
        aria-label={label}
        name={label}
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <FormControlLabel
            key={generateID()}
            disabled={disabled}
            value={option}
            control={<Radio required />}
            label={option}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}
