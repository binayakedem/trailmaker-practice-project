import * as React from 'react';
import Timeline from "@mui/lab/Timeline";

import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';


export default function Journey() {
  return (
    <div className='my-8'>
        <div className='flex flex-col justify-center items-center text-center'>
            <h1 className='text-[#EC008C] font-semibold text-xl my-3'>Journey</h1>
            <h1 className='text-[#0C4DA2] font-bold text-3xl mb-3'>Your Journey to Abroad Education</h1>

        </div>

    <Timeline position="alternate">
      <TimelineItem data-aos='zoom-in' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <FastfoodIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Book a counselling session
          </Typography>
          <Typography className='text-gray-700'>n addition to telephone & video counseling, Gateway International provides flexible time slots that are chosen by the user for guiding you through the various options for studying across the globe.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='fade-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Admission Guidance
          </Typography>
          <Typography className='text-gray-700'>Whether you’re looking for a program, university, or country according to your profile, our career counselors can offer advice and guidance.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='flip-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Submit Your Application
          </Typography>
          <Typography className='text-gray-700'>We will assist you in submitting your applications at your preferred university for admission after you have selected the right course and university.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos='zoom-in-up' data-aos-duration='1200'>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Letter Of Acceptance
          </Typography>
          <Typography className='text-gray-700'>As soon as you submit your application, the university will issue an offer letter tailored to your profile. Gateway International will keep you updated on each step of your application so you can get a final acceptance letter.</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-up"
     data-aos-duration="3000">
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <HotelIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Start Your Visa Process
          </Typography>
          <Typography className='text-gray-700'>Our visa team will assist you throughout the entire visa process from documentation to the visa interview, we take care of it all for you!</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"> 
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span" className='text-[#0C4DA2]'>
          Fly And Live Your Dreams
          </Typography>
          <Typography className='text-gray-700'>After receiving your visa approval, it’s time to travel to your dream country. Our staff will take care of all your travel arrangements and guide you throughout the process.</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}
