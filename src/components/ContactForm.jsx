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
      id="Contact"
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
            gridTemplateRows: "1200px",
            position: "relative",
            bgcolor: "#C1C5DC",
          }}
        >
          <Box
            marginTop={"40px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "2 / 9",
              position: "relative",
              gridRow: "1",
            }}
          >
          <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScI1trloKv5BZDVn8mEeW6epQfqQ4Pg67RG96rsol69e0BjFQ/viewform?embedded=true" width="640" height="1200" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </Box>
          
        </Box>
      </Box>
     
    </Container>
  );
}

export default ContactForm;
