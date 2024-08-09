import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, styled } from '@mui/material';
import logo1Url from '../assets/logo1.png'
import logo2Url from '../assets/logo2.png'
// import logo3Url from '../assets/logo3.png'
// import logo4Url from '../assets/logo4.png'
// import logo5Url from '../assets/logo5.png'
import logo6Url from '../assets/logo6.png'
import logo7Url from '../assets/logo7.jpg'
import styles from './Styles';
import { H3Typography } from './Fonts';

function Partners() {

  return (
    <Box sx={{
      backgroundColor: '#F8F6F7B3',
      paddingTop: '45px',
      paddingBottom: '60px',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
      }}>
        <H3Typography sx={{fontWeight: 400}}>
          Clients We Have Served
        </H3Typography>
        <Box maxWidth="xl" sx={{
          display:'flex',
          paddingTop: '30px',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <img
            src={logo1Url}
            alt='Logo'
            style={{...styles.logo, maxHeight: '50px'}}/>
          <img
            src={logo2Url}
            alt='Logo'
            style={{...styles.logo, maxHeight: '50px'}}/>
          <img
            src={logo6Url}
            alt='Logo'
            style={{...styles.logo, maxHeight: '65px'}}/>
          <img
            src={logo7Url}
            alt='Logo'
            style={{...styles.logo, maxHeight: '60px'}}/>
        </Box>
    </Box>
  )
}


export default Partners;