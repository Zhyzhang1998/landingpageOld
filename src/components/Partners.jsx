import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container, styled } from '@mui/material';
import logo1Url from '../assets/logo1.png'
import logo2Url from '../assets/logo2.png'
import logo3Url from '../assets/logo3.png'
import logo4Url from '../assets/logo4.png'
import logo5Url from '../assets/logo5.png'
import logo6Url from '../assets/logo6.png'
import logo7Url from '../assets/logo7.jpg'
import styles from './Styles';

function Partners() {

  const H3Typography = styled(Typography) ({
    fontFamily: 'poppins',
    fontWeight: 500,
    fontSize: 22,
    textAlign: 'start',
    lineHeight: '1.5',
    color: '#333333',
    marginTop: '1.5rem',
    });

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
        <H3Typography sx={{}}>
          A few of our favorite partners
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
            style={styles.logo}/>
          <img
            src={logo2Url}
            alt='Logo'
            style={{...styles.logo, maxHeight: '30px'}}/>
          <img
            src={logo3Url}
            alt='Logo'
            style={styles.logo}/>
          <img
            src={logo4Url}
            alt='Logo'
            style={styles.logo}/>
          <img
            src={logo5Url}
            alt='Logo'
            style={{...styles.logo, maxHeight: '25px'}}/>
          <img
            src={logo6Url}
            alt='Logo'
            style={{...styles.logo, maxHeight: '45px'}}/>
          <img
            src={logo7Url}
            alt='Logo'
            style={{...styles.logo, maxHeight: '40px'}}/>
        </Box>
    </Box>
  )
}


export default Partners;