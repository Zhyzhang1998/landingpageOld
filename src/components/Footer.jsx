import * as React from 'react';
import styles from './Styles';
import styled from '@emotion/styled/macro';
import { H2Typography, Body1Typography, H3Typography } from './Fonts';
import { Box } from '@mui/material';
import Divider from '@mui/joy/Divider';
import logoUrl from '../assets/GAlogo.png';

function Footer() {
    return(
        <Box>
        <Box className='logo' sx={{ display:'flex', alignItems: 'center', gridColumn: '1 / 4'}}>
              <img
                src={logoUrl}
                alt='Logo'
                style={{
                  width: '100%',
                  maxWidth: '80px' 
              }}/>
            </Box>
            <H3Typography>Address</H3Typography>
            <Body1Typography>ABC street
            New York, NY 00000
            United state</Body1Typography>
            <Body1Typography>© Gabriel AI All Rights Reserved 
            Privacy | Terms and Conditions</Body1Typography>
        </Box>
    );
}

export default Footer;