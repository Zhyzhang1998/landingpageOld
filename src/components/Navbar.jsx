import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import logoUrl from '../assets/GAlogo.png'
import styles from './Styles';

const pages = ['Benefits', 'Features', 'Community', 'Pricing', 'Contact'];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: 'white',
        borderBottom: '3px solid #F6F6F6'
      }}
      elevation={0}
    >
      <Container sx={{...styles.containerStyle, py: 0}}>
        <Toolbar disableGutters>
          <Box sx={{display:{xs: 'flex', md: 'none'}}}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr'}}>
              <img
                src={logoUrl}
                alt='Logo'
                style={{
                  width: '50px',
                  gridColumn: '2/4'
              }}/>
            </Box>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' }}}>
          <Box sx={{...styles.gridSetting}}>
            <Box className='logo' sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gridColumn: '1 / 4'}}>
              <img
                src={logoUrl}
                alt='Logo'
                style={{
                  width: '100%',
                  maxWidth: '80px' 
              }}/>
            </Box>
            <Box className='page' sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', gridColumn: '4 / 10'}}>
              {pages.map((page) => (
                <Button
                  onClick={() => scrollToSection(page)}
                  key={page}
                  sx={styles.navButton}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <Box className='login' sx={{display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end', gridColumn: '10 / 13'}}>
              <Button
              sx={styles.navButton}
              >
                Login
              </Button>
              <Button
              variant="contained"
              sx={styles.regularButton}
              >
                Get Started
              </Button>
            </Box>
          </Box>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;

