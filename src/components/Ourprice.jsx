import * as React from "react";
import Slider from "@mui/material/Slider";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import { H2Typography, Body1Typography, H3Typography } from "./Fonts";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import styles from "./Styles";

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 9999,
    label: "+∞",
  },
];

function valuetext(value) {
  return `${value}°C`;
}

function Ourprice() {
  return (
    <Container
      id="Ourprice"
      sx={{
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "60px",
        paddingBottom: "64px",
      }}
    >
      <Box>
        <H2Typography>Our Pricing</H2Typography>
        <Box 
        marginTop={5}
        sx={{...styles.gridSetting, px:0, gridTemplateRows: '1fr'}}>
          <Box sx={{ display: 'flex', flexDirection:'column', gridColumn:'1 / 8'}}>
            <Body1Typography
            width={400}
            textAlign={"justify"}
            >
              At our service, we understand that flexibility is key. Not sure
              how many messages you'll need to send? No problem! We offer a
              pay-per-message approach, allowing you to plan your marketing
              program with precision. <br />
              <br />
              Unlike subscription-based services, our
              model lets you pay only for what you use, ensuring you get the
              most value for your investment.
            </Body1Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection:'column', gridColumn:'12/ 8', alignItems: 'center', justifyContent: 'center'}}>
            <Box
              boxShadow={10}
              paddingTop={1}
              paddingBottom={2}
              width={500}
              borderRadius={12}
            >
              <H3Typography textAlign="center" marginTop={3}>
                Cost Calculation
              </H3Typography>
              <H3Typography marginLeft={5} marginTop={3}>
                Number of messages:
              </H3Typography>
              <Box marginLeft={5} paddingTop={6} sx={{ width: 400 }}>
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
                <H3Typography
                marginBottom={3}
                >How much it will cost:</H3Typography>
                <TextField
                  id="filled-basic"
                  label="May differ from actual costs"
                  variant="filled"
                />
                <Box
                  marginTop={5}
                  marginBottom={5}
                  justifyContent={'center'}
                  sx={{ display: "flex" }}
                >
                  <Button
                  alignItems="center"
                   sx={{...styles.regularButton}} variant="getQuote">
                    Get Quote
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
export default Ourprice;
