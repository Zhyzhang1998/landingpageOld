import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import styles from './Styles';
import backgroundUrl from '../assets/background.png';
import { H1Typography, H3Typography, Body1Typography } from './Fonts';
import { Container, styled } from '@mui/material';
import Typography from '@mui/material/Typography';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import { motion } from "framer-motion";
import { Howl } from 'howler';
import demo1Url from '../assets/Demo1.mp3';
import demo2Url from '../assets/Demo2.mp3';
import demo3Url from '../assets/Demo3.mp3';
import SoundWave from './SoundWave';

const clip1 = new Howl({ src: [demo1Url] })
const clip2 = new Howl({ src: [demo2Url] })
const clip3 = new Howl({ src: [demo3Url] })

function Herosection() {
  const DemoTypography = styled(Typography)({
    fontFamily: 'poppins',
    fontWeight: 500,
    fontSize: 18,
    color: 'white',
  });

  const DemoBox = styled(Box)({
    marginBottom: '30px',
    width: '470px',
    backgroundColor: '#21262B',
    display: 'flex',
    alignItems: 'center',
    padding: '8px',
    borderRadius: '8px'
  });

  const MotionDemoBox = motion(DemoBox);

  // Define audio clips using Howl with imported URLs
  const [currentPlaying, setCurrentPlaying] = React.useState(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [showWave, setShowWave] = React.useState({
    clip1: false,
    clip2: false,
    clip3: false,
  });

  const setupClipListeners = (clip) => {
    clip.on('end', () => {
      setIsPlaying(false);
      setCurrentPlaying(null);
    });
  };

  React.useEffect(() => {
    setupClipListeners(clip1);
    setupClipListeners(clip2);
    setupClipListeners(clip3);
  }, []);

  const handleAudio = (clip, clipName) => {
    if (isPlaying) {
      currentPlaying.stop();
      setIsPlaying(false);
      if (currentPlaying === clip) {
        setCurrentPlaying(null);
      } else {
        setCurrentPlaying(clip);
        clip.play();
        setIsPlaying(true);
      }
    } else {
      clip.play();
      setIsPlaying(true);
      setCurrentPlaying(clip);
    }
  };

  return (
    <Container id='HeroSection' sx={{ ...styles.containerStyle, height: '800px' }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '15px' }}>
        <Box sx={{ gridColumn: 1, paddingTop: '40px' }}>
          <H1Typography sx={{ paddingBottom: '20px', lineHeight: '110%' }}>
            Your voice is your power.
          </H1Typography>
          <H3Typography sx={{ paddingBottom: '20px', paddingRight: '50px' }}>
            Leverage AI for Effective and Efficient Outreach
          </H3Typography>
          <Body1Typography sx={{ paddingBottom: '40px', paddingRight: '50px' }}>
            At Gabriel AI, we empower you to connect with your audience like never before. Our AI-driven platform offers personalized voicemails and SMS messages, helping you streamline communication and enhance engagement with your clients, customers or community.
          </Body1Typography>
          <Button
            variant="contained"
            sx={styles.regularButton}
          >
            Try for free 👋
          </Button>
        </Box>
        <Box sx={{ gridColumn: 2, display: 'flex', flexDirection: 'column', justifyContent: 'end', paddingTop: '40px' }}>
          <Box className='box1' sx={{ position: 'absolute', zIndex: 1, top: '120px', right: 0 }}>
            <svg width="712" height="395" viewBox="0 0 712 395" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="1070" height="395" rx="188" fill="url(#paint0_linear_139_2108)" />
              <defs>
                <linearGradient id="paint0_linear_139_2108" x1="-1.28316e-06" y1="197.198" x2="901.053" y2="197.198" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#F4DBAB" stopOpacity="0.4" />
                  <stop offset="0.574" stopColor="#F1D5CB" />
                  <stop offset="1" stopColor="white" stopOpacity="0.01" />
                </linearGradient>
              </defs>
            </svg>
          </Box>
          <Box className='box2' sx={{ position: 'absolute', top: '190px', zIndex: 2, right: 0 }}>
            <img
              src={backgroundUrl}
              alt='Demo'
            />
          </Box>
          <Box className='box3' sx={{ position: 'absolute', top: '360px', zIndex: 3 }}>
            <MotionDemoBox sx={{ marginLeft: '180px' }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleAudio(clip3)}>
              {isPlaying && currentPlaying=== clip3?<SoundWave color={'#B0C0E9'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#B0C0E9' }} /> }
              <DemoTypography>
                Hey, Joe. Sorry, I missed you. Are you...
              </DemoTypography>
            </MotionDemoBox>
            <MotionDemoBox sx={{ marginLeft: '120px' }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleAudio(clip1)}>
              {isPlaying && currentPlaying=== clip1?<SoundWave color={'#FFDB62'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#FFDB62' }} /> }
              <DemoTypography>
                Hello Chris, this is Sergeant John from...
              </DemoTypography>
              {showWave.clip1 && <SoundWave />}
            </MotionDemoBox>
            <MotionDemoBox sx={{ marginLeft: '60px' }} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} onClick={() => handleAudio(clip2)}>
              {isPlaying && currentPlaying=== clip2?<SoundWave color={'#F3D0BB'}/>:<GraphicEqIcon sx={{ mx: '5px', color: '#F3D0BB' }} /> }
              <DemoTypography>
                Yo, Mike. It's Poster Child, this Saturday...
              </DemoTypography>
              {showWave.clip2 && <SoundWave />}
            </MotionDemoBox>
          </Box>
          <Box className='box4' sx={{ position: 'absolute', top: 0, zIndex: -1, right: 0 }}>
            <svg width="442" height="868" viewBox="0 0 442 868" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="442" height="868" fill="#F8F6F7" />
            </svg>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Herosection;
