import * as React from 'react';
import Box from '@mui/material/Box';
import styles from './Styles';
import { H2Typography, Body1Typography, H3Typography } from './Fonts'
import { Container } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ryanUrl from '../assets/Ryan.jpg'

function Testimonial() {
  return (
    <Box sx={{backgroundColor: '#F8F6F7'}}>
      <Container id='Testimonial' sx={styles.containerStyle}>
        <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
          <H2Typography>
            Our Community
          </H2Typography>
          <Box sx={{display: 'flex', alignItems: 'center'}}>
            <H3Typography>See More Reviews</H3Typography>
            <ArrowForwardIcon sx={{fontSize:'36px', backgroundColor: '#333333', color: 'white', borderRadius: '20px', marginLeft: '14px'}}/>
          </Box>
        </Box>
        <Body1Typography sx={{paddingTop: '15px'}}>
          Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences. This ensures your messages resonate with each recipient, enhancing engagement and effectiveness.
        </Body1Typography>
        <Box sx={{display:'flex', paddingTop: '15px' }}>
          <Box sx={{backgroundColor: '#FFFFFF', width: '345px', height: '176px', borderLeft: 'solid #2E3D92 6px', borderTopRightRadius: '20px'}}>
            <Box sx={{display: 'flex', flexDirection: 'row'}}>
              <img
                src={ryanUrl}
                alt='Ryan'
                style={{
                  width: '100%',
                  maxWidth: '80px' 
              }}/>
              <Box>
                <H3Typography>
                  Ryan
                </H3Typography>
                <Body1Typography>
                  Regal North Commercial
                </Body1Typography>
              </Box>
              <FormatQuoteIcon sx={{fontSize: '60px', color: '#2E3D92'}}/>
            </Box>
            <Body1Typography>
              Gabriel AI is an exciting new trend in the Real Estate industry
            </Body1Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
};

export default Testimonial;