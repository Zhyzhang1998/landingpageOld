import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './Styles';
import { Container, styled } from '@mui/material';
import { H2Typography, Body1Typography, H3Typography } from './Fonts'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import GroupsIcon from '@mui/icons-material/Groups';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';

function Benefits() {

  const stylesLocal = {
    benefitTitle: { 
      width:'200px',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center'
    },
    bodyText: {
      textAlign: 'center',
      paddingTop: '15px'
    },
    benefitBox: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      textAlign: 'center',
      height: '100%',
    },
    icon: {
      background: '#F8F6F7',
      width: '80px',
      height:'80px',
      marginBottom: '30px',
      borderRadius: '40px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#2E3D92'
    }
  };

  return (
    <Container id='Benefits' sx={{paddingLeft: '120px', paddingRight: '120px', paddingTop:'128px', paddingBottom: '64px'}}>
      <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <H2Typography>
          Why Gabriel AI?
        </H2Typography>
        <Body1Typography sx={{paddingTop: '15px', width:'700px', textAlign:'center'}}>
          Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences saving your time and enhancing engagement.
        </Body1Typography>
      </Box>
      <Box sx={{paddingTop:'80px',
        display: 'grid',
        gap: '15px',
        gridTemplateColumns: 'repeat(4, 1fr)'}}>
        <Box sx={{...stylesLocal.benefitBox, gridColumn: '1'}}>
          <Box sx={stylesLocal.icon}>
            <AddIcCallIcon sx={{ fontSize: 40 }}/>
          </Box>
          <H3Typography sx={stylesLocal.benefitTitle}>
            Improve Client Engagement
          </H3Typography>
          <Body1Typography sx ={stylesLocal.bodyText}>
            Maintain strong relationships with clients by sending timely, personalized messages.
          </Body1Typography>
        </Box>
        <Box sx={{...stylesLocal.benefitBox, gridColumn: '2'}}>
          <Box sx={stylesLocal.icon}>
            <SettingsSuggestIcon sx={{ fontSize: 40 }}/>
          </Box>
          <H3Typography sx={stylesLocal.benefitTitle}>
            Enhance Efficiency
          </H3Typography>
          <Body1Typography sx ={stylesLocal.bodyText}>
            Streamline your workflow by automating routine tasks and focusing on high-value activities.
          </Body1Typography>
        </Box>
        <Box sx={{...stylesLocal.benefitBox, gridColumn: '3'}}>
          <Box sx={stylesLocal.icon}>
            <AddBusinessIcon sx={{ fontSize: 40 }}/>
          </Box>
          <H3Typography sx={stylesLocal.benefitTitle}>
            Drive Better Outcomes
          </H3Typography>
          <Body1Typography sx ={stylesLocal.bodyText}>
            Utilize data-driven insights to optimize your communication strategy and achieve better results.
          </Body1Typography>
        </Box>
        <Box sx={{...stylesLocal.benefitBox, gridColumn: '4'}}>
          <Box sx={stylesLocal.icon}>
            <GroupsIcon sx={{ fontSize: 40}}/>
          </Box>
          <H3Typography sx={stylesLocal.benefitTitle}>
            Expand Your Reach
          </H3Typography>
          <Body1Typography sx ={stylesLocal.bodyText}>
            Connect with your audience at scale while still delivering personalized, meaningful messages.
          </Body1Typography>
        </Box>
      </Box>
    </Container>
  )
}


export default Benefits;