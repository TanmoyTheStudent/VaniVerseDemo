import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const MUIFlowchart = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, padding: 4 }}>
      {/* Start Node */}
      <Box sx={{ backgroundColor: '#64b5f6', padding: 2, borderRadius: 4, width: '200px', textAlign: 'center' }}>
        <Typography variant="h6">Start</Typography>
      </Box>
      
      {/* Arrow */}
      <ArrowDownwardIcon sx={{ fontSize: 40 }} />

      {/* First Decision Node */}
      <Box sx={{ backgroundColor: '#64b5f6', padding: 2, borderRadius: 4, width: '250px', textAlign: 'center' }}>
        <Typography variant="body1">Do you need to make a flowchart?</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="outlined">Yes</Button>
        <Button variant="outlined">No</Button>
      </Box>

      {/* Yes Path */}
      <ArrowDownwardIcon sx={{ fontSize: 40 }} />
      <Box sx={{ backgroundColor: '#64b5f6', padding: 2, borderRadius: 4, width: '250px', textAlign: 'center' }}>
        <Typography variant="body1">Do you know your start and end points?</Typography>
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
        <Button variant="outlined">Yes</Button>
        <Button variant="outlined">No</Button>
      </Box>

      {/* Final Node */}
      <ArrowDownwardIcon sx={{ fontSize: 40 }} />
      <Box sx={{ backgroundColor: '#64b5f6', padding: 2, borderRadius: 4, width: '200px', textAlign: 'center' }}>
        <Typography variant="h6">Let's start</Typography>
      </Box>
    </Box>
  );
};

export default MUIFlowchart;
