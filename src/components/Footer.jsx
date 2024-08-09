import * as React from "react";
import styles from "./Styles";
import styled from "@emotion/styled/macro";
import {
  H2Typography,
  Body1Typography,
  H3Typography,
  Body2Typography,
} from "./Fonts";
import { Box, Icon } from "@mui/material";
import Divider from "@mui/joy/Divider";
import logoUrl from "../assets/GAlogo.png";
import { Container } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <Box sx={{ ...styles.footer }}>
      <Container
        id="Footer"
        sx={{
          paddingLeft: "120px",
          paddingRight: "120px",
          paddingTop: "62px",
          paddingBottom: "20px",
        }}
      >
        <Box sx={{ ...styles.gridSetting, px: 0, gridTemplateRows: "1fr 1fr" }}>
          <Box
            className="logo"
            sx={{ display: "flex", flexDirection: "column", gridColumn: "1" }}
          >
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                width: "100%",
                maxWidth: "105px",
              }}
            />
          </Box>
          <Box
            marginTop={1.2}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 8",
            }}
          >
            <H3Typography>Address</H3Typography>
          </Box>
          <Box
            minWidth={"165px"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "1 ",
              gridRow: "2",
            }}
          >
            <box>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon
                  sx={{ fontSize: "30px", color: "white", marginRight: "5px" }}
                />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon
                  sx={{ fontSize: "30px", color: "white", marginRight: "5px" }}
                />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon
                  sx={{ fontSize: "30px", color: "white", marginRight: "5px" }}
                />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon sx={{ fontSize: "30px", color: "white" }} />
              </a>
            </box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gridColumn: "4 / 8",
              gridRow: "2",
            }}
          >
            <Body1Typography>
              ABC street <br />
              New York, NY 00000 <br />
              United state
            </Body1Typography>
          </Box>
        </Box>
        <Body2Typography marginTop={4}>
          © Gabriel AI All Rights Reserved Privacy | Terms and Conditions
        </Body2Typography>
      </Container>
    </Box>
  );
}

export default Footer;
