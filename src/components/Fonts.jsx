import * as React from 'react';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material';

const H1Typography = styled(Typography) ({
  fontFamily: 'poppins',
  fontWeight: 600,
  fontSize: 50,
  color: '#333333',
});

const H3Typography = styled(Typography) ({
  fontFamily: 'poppins',
  fontWeight: 600,
  fontSize: 22,
  color: '#333333',
});

const Body1Typography = styled(Typography) ({
  fontFamily: 'poppins',
  fontWeight: 500,
  fontSize: 14,
  color: '#333333',
});


const H2Typography = styled(Typography) ({
  fontFamily: 'poppins',
  fontWeight: 600,
  fontSize: 36,
  color: '#333333',
});

export { H1Typography, H2Typography, H3Typography, Body1Typography } ;



