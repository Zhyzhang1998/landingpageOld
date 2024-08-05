import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './Styles';
import { styled } from '@mui/material';
import { H2Typography, Body1Typography, H3Typography } from './Fonts'

function Benefits() {
  return (
    <Box>
      <Box>
        <H2Typography>
          Why Gabriel AI?
        </H2Typography>
        <Body1Typography>
          Gabriel AI revolutionizes communication with personalized voicemails and SMS messages tailored to individual preferences saving your time and enhancing engagement.
        </Body1Typography>
      </Box>
      <Box>
        <Box>
          <H3Typography>
            Improve Client Engagement
          </H3Typography>
          <Body1Typography>
            Maintain strong relationships with clients by sending timely, personalized messages.
          </Body1Typography>
        </Box>
        <Box>
          <H3Typography>
            Enhance Efficiency
          </H3Typography>
          <Body1Typography>
            Streamline your workflow by automating routine tasks and focusing on high-value activities.
          </Body1Typography>
        </Box>
        <Box>
          <H3Typography>
            Drive Better Outcomes
          </H3Typography>
          <Body1Typography>
            Utilize data-driven insights to optimize your communication strategy and achieve better results.
          </Body1Typography>
        </Box>
        <Box>
          <H3Typography>
            Expand Your Reach
          </H3Typography>
          <Body1Typography>
            Connect with your audience at scale while still delivering personalized, meaningful messages.
          </Body1Typography>
        </Box>
      </Box>
    </Box>
  )
}


export default Benefits;