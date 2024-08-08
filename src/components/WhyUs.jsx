import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Container } from "@mui/material";
import styles from './Styles';
import Box from '@mui/material/Box';
import { H2Typography, Body1Typography, H3Typography } from './Fonts';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: '#B2C2EB',
      color: '#2C2F2E',
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  function createData(feature, gabriel, calling, text) {
    return { feature, gabriel, calling, text };
  }
  
  const rows = [
    createData('Personalization', 
        'Highly personalized with dynamic voice', 
        'Personalized by paying a lot', 
        'Limited to text-based'),
    createData('Emotional Engagement',
        'Capturing attention more effectively',
        'Capturing attention more effectively',
        'May be overlooked or ignored.'),
    createData('Response Rate', 
        'Higher response rates', 
        'Higher response rates',
        'Variable response rates'),
    createData('Efficiency', 
        'More efficient', 
        'Time consuming', 
        'More efficient'),
  ];

function WhyUs () {
    return (
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
        Why Gabriel AI ?
        </H2Typography>
        <Box
        justifyContent={'center'}
        sx={{ display: "flex" }}
        >
        <Table sx={{ width:1000, marginTop:5, marginBottom:5}} aria-label="customized table" >
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">
            <Box
            isplay="flex"
            justifyContent="center"
            alignItems="center"
            >
            <CheckCircleOutlineIcon sx={{fontSize: '15px'}}/>Feature
            </Box>
            </StyledTableCell>
            <StyledTableCell align="center">Gabriel personalized message </StyledTableCell>
            <StyledTableCell align="center">Manual calling</StyledTableCell>
            <StyledTableCell align="center">Text/email</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.feature}>
              <StyledTableCell align="center" component="th" scope="row">
                {row.feature}
              </StyledTableCell>
              <StyledTableCell align="center">{row.gabriel}</StyledTableCell>
              <StyledTableCell align="center">{row.calling}</StyledTableCell>
              <StyledTableCell align="center">{row.text}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
        </Box>
        </Box>
      </Container>
        
        
    );
}

export default WhyUs;

