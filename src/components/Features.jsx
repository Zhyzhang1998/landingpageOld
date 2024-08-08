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
import PersonIcon from '@mui/icons-material/Person';

function Features() {
  const stylesLocal = {
    iconBox: {
      height: '150px',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    },
    featureBox: {
      display: 'flex', flexDirection:'column',
      backgroundColor: '#F8F6F7',
      alignItems: 'center',
      padding: '60px',
      borderRadius: '20px'
    },
    bodyText: {
      textAlign: 'center',
      paddingTop: '8px'
    },
    outreachBox: {
      backgroundColor: '#FFFFFF',
      display: 'grid',
      gridTemplateColumns: '1fr 4fr 4fr',
      border: '2px solid #B8B8B8',
      borderRadius: '5px',
      justifyContent: 'center',
      alignItems: 'center',
      my:'5px'
    },
    iconPerson: {
      backgroundColor: "#D9D9D9",
      borderRadius: '15px',
      height: '20px',
      width: '20px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '5px'
    }
  };

  return (
    <Container id='Features' sx={styles.containerStyle}>
      <H2Typography>
        What Gabriel AI can do? 
      </H2Typography>
      <Body1Typography sx={{paddingTop: '15px'}}>
        Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences. This ensures your messages resonate with each recipient, enhancing engagement and effectiveness.
      </Body1Typography>

      <Box sx={{gridTemplateRows: '1fr 1fr 1fr', paddingTop: '60px'}}>
        <Box sx={{...styles.gridSetting, gridRow: 1, px:0 }}>
          <Box sx={{...stylesLocal.featureBox, gridColumn:'1 / 8'}}>
              <Box sx={{...stylesLocal.iconBox}}>
                <img
                  src={f1Url}
                  alt='Personalized Messages'
                />
              </Box>
            <H3Typography sx={{paddingTop: '20px'}}>
              Personalized Messages
            </H3Typography>
            <Body1Typography sx={stylesLocal.bodyText}>
              Send tailored voicemails and SMS messages to individuals based on their unique preferences and needs.
            </Body1Typography>
          </Box>
          <Box sx={{...stylesLocal.featureBox, gridColumn:'8 / 13'}}>
            <Box sx={stylesLocal.iconBox}>
              <LockIcon sx={{fontSize: '80px'}}/>
            </Box>
            <H3Typography sx={{paddingTop: '20px'}}>
              Secure and Compliant
            </H3Typography>
            <Body1Typography sx={stylesLocal.bodyText}>
              Rest assured that your data and communications are handled securely and in compliance with industry standards.
            </Body1Typography>
          </Box>
        </Box>
        <Box sx={{...styles.gridSetting, gridRow: 2, px:0, py: '15px' }}>
          <Box sx={{gridColumn:'1 / 6', ...stylesLocal.featureBox}}>
            <Box sx={stylesLocal.iconBox}>
              <ExtensionIcon sx={{fontSize: '80px'}}/>
            </Box>
            <H3Typography sx={{paddingTop: '20px'}}>
              Flexible Integration
            </H3Typography>
            <Body1Typography sx={stylesLocal.bodyText}>
              Easily integrate Gabriel AI with your existing systems and tools, creating a seamless experience for your team.
            </Body1Typography>
          </Box>
          <Box sx={{...stylesLocal.featureBox, gridColumn:'6 / 13'}}>
            <Box sx={{...stylesLocal.iconBox, display:'flex'}}>
              <SettingsIcon sx={{fontSize: '90px', marginRight: '50px'}}/>
              <Box sx={{display: 'flex', flexDirection: 'column'}}>
                <Box sx={stylesLocal.outreachBox}>
                  <Box sx={stylesLocal.iconPerson}>
                    <PersonIcon sx={{fontSize: '15px'}}/>
                  </Box>
                  <Body1Typography>
                    Olivia Harris
                  </Body1Typography>
                  <Body1Typography>
                    (310) 555-XXXX
                  </Body1Typography>
                </Box>
                <Box sx={stylesLocal.outreachBox}>
                  <Box sx={stylesLocal.iconPerson}>
                    <PersonIcon sx={{fontSize: '15px'}}/>
                  </Box>
                  <Body1Typography>
                    Sophia Davis
                  </Body1Typography>
                  <Body1Typography>
                    (415) 555-XXXX
                  </Body1Typography>
                </Box>
                <Box sx={stylesLocal.outreachBox}>
                  <Box sx={stylesLocal.iconPerson}>
                    <PersonIcon sx={{fontSize: '15px'}}/>
                  </Box>
                  <Body1Typography>
                    Mia Brown
                  </Body1Typography>
                  <Body1Typography>
                    (617) 555-XXXX
                  </Body1Typography>
                </Box>
              </Box>
            </Box>
            <H3Typography sx={{paddingTop: '20px'}}>
              Automated Outreach
            </H3Typography>
            <Body1Typography sx={stylesLocal.bodyText}>
              Save time and effort by automating routine communication tasks, such as appointment reminders, follow-ups, and event invitations.
            </Body1Typography>
          </Box>
        </Box>
        <Box sx={{...styles.gridSetting, gridRow: 3, px:0}}>
          <Box className='Mask' sx={{...stylesLocal.featureBox, gridColumn:'1 / 13', display: 'grid', gridTemplateColumns: '1fr 1fr', }}>
            <Box sx={{gridColumn: 1}}>
              <H3Typography sx={{paddingTop: '20px', textAlign: 'center'}}>
                Voice Cloning Natural-Sounding Voicemails
              </H3Typography>
              <Body1Typography sx={stylesLocal.bodyText}>
               Utilize Gabriel AI's advanced voice customization technology to create natural-sounding voicemails that match your brand's tone and style.
              </Body1Typography>
            </Box>
            <Box sx={{...stylesLocal.iconBox, height: '274px', gridColumn: 2}}>
              <Box sx={{position: 'relative'}}>
                <MicIcon className='ICONNN' sx={{fontSize: '120px', position: 'absolute', zIndex: 2, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
                <Box className='SVGGG' sx={{position:'relative', zIndex: 1}}>
                  <svg width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" >
                    <path d="M600 300C600 465.685 465.685 600 300 600C134.315 600 0 465.685 0 300C0 134.315 134.315 0 300 0C465.685 0 600 134.315 600 300Z" fill="#FCFCFC"/>
                    <path d="M500 300C500 410.457 410.457 500 300 500C189.543 500 100 410.457 100 300C100 189.543 189.543 100 300 100C410.457 100 500 189.543 500 300Z" fill="#F0F0F0"/>
                    <path d="M400 300C400 355.228 355.228 400 300 400C244.772 400 200 355.228 200 300C200 244.772 244.772 200 300 200C355.228 200 400 244.772 400 300Z" fill="#D9D9D9"/>
                  </svg>
                </Box>
              </Box> 
            </Box>
          </Box>
        </Box>
        {/* <Box sx={{...styles.gridSetting, gridRow: 4, px:0, py: '15px'}}>
          <Box id="svgmask1" sx={{...stylesLocal.featureBox, gridColumn:'1 / 13', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
            <Box sx={{gridColumn: 1}}>
              <H3Typography sx={{paddingTop: '20px', textAlign: 'center'}}>
                Voice Cloning Natural-Sounding Voicemails
              </H3Typography>
              <Body1Typography sx={stylesLocal.bodyText}>
               Utilize Gabriel AI's advanced voice customization technology to create natural-sounding voicemails that match your brand's tone and style.
              </Body1Typography>
            </Box>
            <Box sx={{...stylesLocal.iconBox, height: '274px', gridColumn: 2}}>
              <Box sx={{position: 'relative'}}>
                <MicIcon className='ICONNN' sx={{fontSize: '120px', position: 'absolute', zIndex: 2, top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}/>
                <Box className='SVGGG' sx={{position:'relative', zIndex: 1}}>
                  <svg>
                      <mask id="svgmask2">
                        <svg width="1152" height="394" viewBox="0 0 1152 394" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <rect width="1152" height="394" rx="30" fill="#D9D9D9"/>
                        </svg>
                      </mask>
                    <svg mask="url(#svgmask1)" width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg" >
                      <path d="M600 300C600 465.685 465.685 600 300 600C134.315 600 0 465.685 0 300C0 134.315 134.315 0 300 0C465.685 0 600 134.315 600 300Z" fill="#FCFCFC"/>
                      <path d="M500 300C500 410.457 410.457 500 300 500C189.543 500 100 410.457 100 300C100 189.543 189.543 100 300 100C410.457 100 500 189.543 500 300Z" fill="#F0F0F0"/>
                      <path d="M400 300C400 355.228 355.228 400 300 400C244.772 400 200 355.228 200 300C200 244.772 244.772 200 300 200C355.228 200 400 244.772 400 300Z" fill="#D9D9D9"/>
                    </svg>
                  </svg>
                </Box>
              </Box> 
            </Box>
          </Box>
        </Box> */}
      </Box>
    </Container>
    )
};

export default Features;
