import * as React from "react";
import { useState } from "react";
import { H2Typography, Body1Typography, H3Typography } from "./Fonts";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Styles";
import { Container } from "@mui/material";

function ContactForm() {
  const [submit, setSubmit] = useState(false);
  const [formData, setFormData] = useState({
    "entry.2005620554": "", // First Name
    "entry.734046653": "", // Last Name
    "entry.1045781291": "", // Email
    "entry.1166974658": "", // Phone Number
    "entry.839337160": "", // What else you want to share?
  });

  const handleInputData = (input) => (e) => {
    const { value } = e.target;

    setFormData((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);

    let url = `https://docs.google.com/forms/u/0/d/e/1FAIpQLScI1trloKv5BZDVn8mEeW6epQfqQ4Pg67RG96rsol69e0BjFQ/formResponse?entry.2005620554=${formData["entry.2005620554"]}&entry.734046653=${formData["entry.734046653"]}&entry.1045781291=${formData["entry.1045781291"]}&entry.1166974658=${formData["entry.1166974658"]}&entry.839337160=${formData["entry.839337160"]}`;

    const res = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

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
          marginLeft={"150px"}
          marginRight={"150px"}
          sx={{
            ...styles.formSetting,
            px: 0,
            gridTemplateRows: "660px",
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
            {submit ? (
              <div className="afterForm">Thanks, will get back to you soon</div>
            ) : (
              <form onSubmit={handleSubmit} target="_self">
                <Box marginBottom={"30px"} marginTop={"20px"}>
                  <TextField
                    required
                    label="First Name"
                    name="entry.2005620554"
                    onChange={handleInputData("entry.2005620554")}
                    value={formData["entry.2005620554"]}
                    variant="outlined"
                    fullWidth
                    marginTop="20px"
                  />
                </Box>
                <Box marginBottom={"30px"}>
                  <TextField
                    required
                    label="Last Name"
                    name="entry.734046653"
                    onChange={handleInputData("entry.734046653")}
                    value={formData["entry.734046653"]}
                    variant="outlined"
                    fullWidth
                  />
                </Box>
                <Box marginBottom={"30px"}>
                  <TextField
                    required
                    label="Email"
                    name="entry.1045781291"
                    onChange={handleInputData("entry.1045781291")}
                    value={formData["entry.1045781291"]}
                    variant="outlined"
                    fullWidth
                  />
                </Box>
                <Box marginBottom={"30px"}>
                  <TextField
                    required
                    label="Phone Number"
                    name="entry.1166974658"
                    onChange={handleInputData("entry.1166974658")}
                    value={formData["entry.1166974658"]}
                    variant="outlined"
                    fullWidth
                  />
                </Box>
                <Box marginBottom={"30px"}>
                  <TextField
                    label="What else you want to share?"
                    name="entry.839337160"
                    onChange={handleInputData("entry.839337160")}
                    value={formData["entry.839337160"]}
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                  />
                </Box>
                <Button
                  type="submit"
                  alignItems="center"
                  fullWidth
                  sx={{ ...styles.regularButton }}
                >
                  Submit
                </Button>
              </form>
            )}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default ContactForm;
