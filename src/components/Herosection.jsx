import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logoUrl from '../assets/GAlogo.png'
import styles from './Styles';
import { styled } from '@mui/material';
import backgroundUrl from '../assets/background.png'

function Herosection() {
  const H1Typography = styled(Typography) ({
    fontFamily: 'poppins',
    fontWeight: 500,
    fontSize: '3rem',
    textAlign: 'start',
    lineHeight: '1.5',
    color: '#333333',
    marginTop: '1.5rem',
  });

const H3Typography = styled(Typography) ({
  fontFamily: 'poppins',
  fontWeight: 500,
  fontSize: 22,
  textAlign: 'start',
  lineHeight: '1.5',
  color: '#333333',
  marginTop: '1.5rem',
  });

const Body1Typography = styled(Typography) ({
  fontFamily: 'poppins',
  fontWeight: 500,
  fontSize: 14,
  textAlign: 'start',
  lineHeight: '1.5',
  color: '#333333',
  marginTop: '1.5rem',
  });


 return (
  <>
    <Box component='article'>
      <H1Typography>
        Your voice is your power.
      </H1Typography>
      <H3Typography>
        Leverage AI for Effective and Efficient Outreach
      </H3Typography>
      <Body1Typography>
        At Gabriel AI, we empower you to connect with your audience like never before. Our AI-driven platform offers personalized voicemails and SMS messages, helping you streamline communication and enhance engagement with your clients, customers or community.
      </Body1Typography>
      <Button
        variant="contained"
        sx={styles.regularButton}
        >
          Try for free 👋
      </Button>
    </Box>
    <svg width="712" height="395" viewBox="0 0 712 395" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="1070" height="395" rx="188" fill="url(#paint0_linear_139_2108)"/>
      <defs>
      <linearGradient id="paint0_linear_139_2108" x1="-1.28316e-06" y1="197.198" x2="901.053" y2="197.198" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F4DBAB" stop-opacity="0.4"/>
      <stop offset="0.574" stop-color="#F1D5CB"/>
      <stop offset="1" stop-color="white" stop-opacity="0.01"/>
      </linearGradient>
      </defs>
    </svg>
    <img
      src={backgroundUrl}
      alt='Demo'
    />
  </>
 );
};

export default Herosection;