import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import doc from '../assets/svg/doc.svg'
import prof from '../assets/svg/prof.svg'

const images = [
  {
    svg: doc,
    title: 'Create Exams',
    width: '45%',
  },
  {
    svg:prof,
    title: 'View Profiles',
    width: '45%',
  }
];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: 'relative',
  height: 200,
  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));


const Image = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: "#3c69be",
  opacity: 0.7,
  transition: theme.transitions.create('opacity'),
}));

export default function ButtonBases({setFlag}) {
  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 300, width: '100%',justifyContent:'center' }}>
      {images.map((image) => (
        <ImageButton
          onClick={image.title ==='View Profiles'?(()=>null):(()=>setFlag(true))}
          focusRipple
          key={image.title}
          style={{
            width: image.width,
            margin:"15px"
          }}
        >
          <ImageBackdrop className="MuiImageBackdrop-root" />
          <Image>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              sx={{
                position: 'relative',
                p: 4,
                pt: 2,
                pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
              }}
            >
              {image.title}
              <img src={image.svg} alt="sd" width="72.6%"></img>
            </Typography>
          </Image>
        </ImageButton>
      ))}
    </Box>
  );
}
