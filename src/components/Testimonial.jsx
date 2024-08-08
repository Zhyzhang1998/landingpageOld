import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './Styles';
import { H2Typography, Body1Typography, H3Typography } from './Fonts'
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

function Testimonial() {
  return (
    <Container id='Testimonial' sx={{...styles.containerStyle, backgroundColor: '#F8F6F7'}}>
      <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
        <H2Typography>
          Our Community
        </H2Typography>
        <Box sx={{display: 'flex', }}>
          <H3Typography>See More Reviews</H3Typography>
          <ArrowForwardIcon sx={{fontSize:'28px', backgroundColor: '#333333', color: 'white', borderRadius: '15px'}}/>
        </Box>
      </Box>
      <Body1Typography sx={{paddingTop: '15px'}}>
        Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences. This ensures your messages resonate with each recipient, enhancing engagement and effectiveness.
      </Body1Typography>
    </Container>
  )
};

export default Testimonial;