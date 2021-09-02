import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '37ch',
    },
  },
}));

export default function TextFields({value,setTxtFunc,label,className,multiline,disabled,type,flag,func,index}) {
  const classes = useStyles();
  
  return (
    <div className={`${classes.root} ${className}`} noValidate autoComplete="off">
      {/* {console.log(value)} */}
      <TextField  type={type} value={value} InputProps={{ inputProps: { min: 1}}} variant='outlined' id="standard-basic" label={label} onChange={flag===1?(e)=>func(e.target.value,index):(e)=>setTxtFunc(e.target.value)} multiline={multiline} disabled={disabled}/>
    </div>
  );
}
