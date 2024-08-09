import { colors } from "@mui/material";

const styles = {
  navButton: {
    mx: 2,
    color: "#333333",
    fontFamily: "poppins",
    fontWeight: 600,
    fontSize: 16,
    textTransform: "None",
    "&:hover": {
      backgroundColor: "#F6F6F6",
    },
  },
  regularButton: {
    color: "white",
    fontFamily: "poppins",
    fontWeight: 600,
    fontSize: 16,
    textTransform: "None",
    backgroundColor: "#333333",
    border: "solid #333333 2px",
    "&:hover": {
      color: "#333333",
      backgroundColor: "#ffffff",
      border: "solid #747474 2px",
    },
  },
  gridSetting: {
    display: "grid",
    gap: "15px",
    gridTemplateColumns: "repeat(12, 1fr)",
    px: "120px",
  },
  logo: {
    width: "100%",
    maxHeight: "35px",
    paddingLeft: "30px",
    paddingRight: "30px",
  },
  footer: {
    backgroundColor: "#B2C2EB",
  },
  formSetting: {
    display: "grid",
    gap: "15px",
    gridTemplateColumns: "repeat(12, 1fr)",
    px: "120px",
  },
};

export default styles;
