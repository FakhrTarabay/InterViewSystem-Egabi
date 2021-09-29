import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';

export default function CheckboxN({className,setValue,value,required}) {
  const handleChange = (event) => {
    setValue(event.target.checked);
  };

  return (
    <>
      <Checkbox
        required={required}
        className={className}
        checked={value}
        onChange={handleChange}
        color="primary"
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
    </>
  );
}
