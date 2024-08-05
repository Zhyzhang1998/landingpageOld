import * as React from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import { H2Typography, Body1Typography, H3Typography } from './Fonts';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Styles';

const marks = [
    {
      value: 0,
      label: '0',
    },
    {
      value: 9999,
      label: '+∞',
    },
  ];
  
  function valuetext(value) {
    return `${value}°C`;
  }

function Ourprice () {
    return (
        <Box>
        <Box>
        <H2Typography>
        Our Pricing
        </H2Typography>
        <Body1Typography>
        At our service, we understand that flexibility is key. Not sure how many messages you'll need to send? No problem! We offer a pay-per-message approach, allowing you to plan your marketing program with precision. 
        <Body1Typography>Unlike subscription-based services, our model lets you pay only for what you use, ensuring you get the most value for your investment.</Body1Typography>
        </Body1Typography>
        </Box>
        <Box
        marginLeft={85}
        width={535}
        sx={{border: '2px solid grey'}}>
        <H3Typography 
        marginLeft={5}
        marginTop={5}
        >Number of messages:</H3Typography>
        <Box 
        marginLeft={5}
        paddingTop={6}
        sx={{ width: 400 }
    }>
      <Slider
        aria-label="Always visible"
        defaultValue={1000}
        min={1}
        max={9999}
        getAriaValueText={valuetext}
        step={1}
        marks={marks}
        valueLabelDisplay="on"
      />
      <H3Typography>
      How much it will cost:
      </H3Typography>
      <TextField id="filled-basic" label="May differ from actual costs" variant="filled" />
      <Box
      marginTop={5}
      marginBottom={5}
      sx={{ display:'flex', alignItems: 'center'}}
      >
      <Button
      sx={styles.regularButton}
       variant="getQuote">Get Quote</Button>
      </Box>
    </Box>
    </Box>
    </Box>
    );
}
export default Ourprice;
