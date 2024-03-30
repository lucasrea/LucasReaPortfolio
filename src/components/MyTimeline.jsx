import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';// import {BsAmd, FaUniversity} from "Icons/index.js"
import { FaArrowDown, FaUniversity } from 'react-icons/fa';
import { BsAmd } from 'react-icons/bs';
import { FcGraduationCap } from 'react-icons/fc';

// TODO - for horizontal timeline, use these
const useStyles = {
  timeline: {
    transform: "rotate(90deg)"
  },
  timelineContentContainer: {
    textAlign: "left"
  },
  timelineContent: {
    display: "inline-block",
    transform: "rotate(-90deg)",
    textAlign: "center",
    minWidth: 50
  },
  timelineIcon: {
    transform: "rotate(-90deg)"
  }
};


const MyTimeline = () => {
return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          <b>September 2016</b>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary"> 
           <FaUniversity />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
        <Typography variant="h6" component="span">
            Start B.A.Sc Computer Engineering @ UofT 
          </Typography>
          {/* <Typography>B.A.Sc Computer Egnineering @ University of Toronto</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          <b>May 2019 - May 2020</b>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error"> 
           <BsAmd />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
        <Typography variant="h6" component="span">
            SDE Internship @ AMD
          </Typography>
          {/* <Typography>SDE internship on the Apple Software Team.</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          <b>May 2021</b>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary"> 
           <FcGraduationCap />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
        <Typography variant="h6" component="span">
            Graduate from University
          </Typography>
          {/* <Typography>Complete my undergraduate degree @ UofT.</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          <b>May 2021</b>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error"> 
           <BsAmd />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
        <Typography variant="h6" component="span">
            Full-time SDE @ AMD
          </Typography>
          {/* <Typography>Develop cloud-enabled CI for Signal Integrity simulation tools.</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          <b>September 2022 - Present</b>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="error"> 
           <BsAmd />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
        <Typography variant="h6" component="span">
            Transfer to DCGPU @ AMD
          </Typography>
          {/* <Typography>Develop automated data-engineering piplines for AI/HPC performance analysis.</Typography> */}
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="white"
        >
          <b>September 2024</b>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary"> 
           <FaUniversity />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 , color:"white"}}>
        <Typography variant="h6" component="span">
            Start M.Eng Computer Engineering @ UofT 
          </Typography>
          {/* <Typography>B.A.Sc Computer Egnineering @ University of Toronto</Typography> */}
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
export default MyTimeline;