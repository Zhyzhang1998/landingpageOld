import * as React from 'react';
import { styled } from '@mui/material/styles';
import { H2Typography, Body1Typography, H3Typography} from './Fonts';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import styles from './Styles';
import { Container } from "@mui/material";

function ContactForm () {
    return(
      <Container
      id="WhyUs"
      sx={{
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "60px",
        paddingBottom: "64px",
      }}>
      <Box>
        <H2Typography>
        Contact Us
        </H2Typography>
        <Box marginTop={5}>
        <TextField id="filled-basic" label="First Name" variant="filled" /><br />
        <TextField id="filled-basic" label="Last Name" variant="filled" /><br />
        <TextField id="filled-basic" label="Email" variant="filled" /><br />
        <TextField id="filled-basic" label="Phone Number" variant="filled" /><br />
        <TextField id="filled-basic" label="What else you want to share" variant="filled" /><br />
        <Box
      marginTop={5}
      marginBottom={5}
      sx={{ display:'flex', alignItems: 'center'}}
      >
      <Button
      sx={styles.regularButton}
       variant="getQuote">Contact Us</Button>
      </Box>
        </Box>
        </Box>
      </Container>
        
    );
}

export default ContactForm;