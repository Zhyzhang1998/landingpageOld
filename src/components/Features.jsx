import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './Styles';
import { Container, styled } from '@mui/material';
import { H2Typography, Body1Typography, H3Typography } from './Fonts'
import f1Url from '../assets/F1.png';
import LockIcon from '@mui/icons-material/Lock';
import ExtensionIcon from '@mui/icons-material/Extension';
import SettingsIcon from '@mui/icons-material/Settings';
import MicIcon from '@mui/icons-material/Mic';

function Features() {
  return (
    <Container id='Features' sx={{paddingLeft: '120px', paddingRight: '120px', paddingTop:'128px', paddingBottom: '64px'}}>
      <H2Typography>
        What Gabriel AI can do? 
      </H2Typography>
      <Body1Typography>
        Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences. This ensures your messages resonate with each recipient, enhancing engagement and effectiveness.
      </Body1Typography>

      <Box sx={{gridTemplateRows: '1fr 1fr 1fr', py: '30px'}}>
        <Box sx={{...styles.gridSetting, gridRow: 1, px:0 }}>
          <Box sx={{display: 'flex', flexDirection:'column', gridColumn:'1 / 8',backgroundColor: '#F8F6F7', alignItems: 'center', justifyContent: 'center', padding: '60px', borderRadius: '20px'}}>
              <img
                src={f1Url}
                alt='Personalized Messages'
              />
            <H3Typography sx={{paddingTop: '30px'}}>
              Personalized Messages
            </H3Typography>
            <Body1Typography>
              Send tailored voicemails and SMS messages to individuals based on their unique preferences and needs.
            </Body1Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection:'column', gridColumn:'8 / 13',backgroundColor: '#F8F6F7', alignItems: 'center', justifyContent: 'center', padding: '60px', borderRadius: '20px'}}>
            <LockIcon sx={{fontSize: '80px'}}/>
            <H3Typography sx={{paddingTop: '30px'}}>
              Secure and Compliant
            </H3Typography>
            <Body1Typography>
              Rest assured that your data and communications are handled securely and in compliance with industry standards.
            </Body1Typography>
          </Box>
        </Box>
        <Box sx={{...styles.gridSetting, gridRow: 2, px:0, py: '15px' }}>
          <Box sx={{display: 'flex', flexDirection:'column', gridColumn:'1 / 6',backgroundColor: '#B2C2EB', alignItems: 'center', justifyContent: 'center', padding: '60px', borderRadius: '20px'}}>
            <ExtensionIcon sx={{fontSize: '80px'}}/>
            <H3Typography sx={{paddingTop: '30px'}}>
              Flexible Integration
            </H3Typography>
            <Body1Typography>
              Easily integrate Gabriel AI with your existing systems and tools, creating a seamless experience for your team.
            </Body1Typography>
          </Box>
          <Box sx={{display: 'flex', flexDirection:'column', gridColumn:'6 / 13',backgroundColor: '#F8F6F7', alignItems: 'center', justifyContent: 'center', padding: '60px', borderRadius: '20px'}}>
            <SettingsIcon sx={{fontSize: '80px'}}/>
            <H3Typography sx={{paddingTop: '30px'}}>
              Automated Outreach
            </H3Typography>
            <Body1Typography>
              Save time and effort by automating routine communication tasks, such as appointment reminders, follow-ups, and event invitations.
            </Body1Typography>
          </Box>
        </Box>
        <Box sx={{...styles.gridSetting, gridRow: 3, px:0}}>
          <Box sx={{display: 'flex', flexDirection:'column', gridColumn:'1 / 13',backgroundColor: '#B2C2EB', alignItems: 'center', justifyContent: 'center', padding: '60px', borderRadius: '20px'}}>
            <MicIcon sx={{fontSize: '80px'}}/>
          </Box>
        </Box>
      </Box>
    </Container>
    )
};

export default Features;
