import * as React from "react";
import { styled } from "@mui/material/styles";
import { H2Typography, Body1Typography, H3Typography } from "./Fonts";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Styles";
import { Container } from "@mui/material";

function ContactForm() {
  return (
    <Container
      id="WhyUs"
      sx={{
        paddingLeft: "120px",
        paddingRight: "120px",
        paddingTop: "60px",
        paddingBottom: "64px",
      }}
    >
      <Box>
        <H2Typography>Contact Us</H2Typography>
        <Box
          marginTop={5}
          borderRadius={"20px"}
          border={"solid 2px black"}
          marginLeft={"200px"}
          marginRight={"200px"}
          sx={{
            ...styles.formSetting,
            px: 0,
            gridTemplateRows: "80px 80px 80px 80px 80px 80px 30px",
            position: "relative",
            bgcolor: "#C1C5DC",
          }}
        >
          <Box
            marginTop={"40px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 10",
              position: "relative",
              gridRow: "1",
            }}
          >
            <TextField id="filled-basic" label="First Name" variant="filled" />
          </Box>
          <Box
            marginTop={"40px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 10",
              position: "relative",
              gridRow: "2",
            }}
          >
            <TextField id="filled-basic" label="Last Name" variant="filled" />
          </Box>
          <Box
            marginTop={"40px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 10",
              position: "relative",
              gridRow: "3",
            }}
          >
            <TextField id="filled-basic" label="Email" variant="filled" />
          </Box>
          <Box
            marginTop={"40px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 10",
              position: "relative",
              gridRow: "4",
            }}
          >
            <TextField
              id="filled-basic"
              label="Phone Number"
              variant="filled"
            />
          </Box>
          <Box
            marginTop={"40px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 10",
              position: "relative",
              gridRow: "5",
            }}
          >
            <TextField
              id="filled-basic"
              label="What else you want to share"
              variant="filled"
            />
          </Box>
          <Box
            marginTop={"40px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "5 / 9",
              position: "relative",
              gridRow: "6",
            }}
          >
            <Button sx={styles.regularButton} variant="getQuote">
              Contact Us
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactForm;
