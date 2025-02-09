import React from "react";
import { CircularProgress, Box } from "@mui/material";

const CustomLoader = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
        backdropFilter: 'blur(2px)', // Semi-transparent backdrop for a modern look
      }}
    >
      <CircularProgress color="primary" size={60} thickness={4} value={100} />

    </Box>
  );
};

export default CustomLoader;
