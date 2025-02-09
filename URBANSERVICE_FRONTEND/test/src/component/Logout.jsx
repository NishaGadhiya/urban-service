// Logout.js

import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';


const FullScreenContainer = styled(Container)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
  });
  
  const StyledButton = styled(Button)({
    marginTop: '24px',
    padding: '12px 24px',
    fontSize: '16px',
    fontWeight: 'bold',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    backgroundColor: '#3f51b5',
    color: '#ffffff',
    '&:hover': {
      backgroundColor: '#303f9f',
    },
  });

export const Logout = () => {
 
   
  const handleLogout = () => {
   
    localStorage.removeItem('id');
    window.location.pathname = '/'
 
  };

  return (
    <FullScreenContainer>
      <Typography variant="h4" align="center" gutterBottom>
        Thank you for using Urban Services 😃
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Your security is our priority, and logging out ensures the safety of your account.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        We appreciate your trust in us and value your commitment to keeping your information secure.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        Remember, by staying connected with Urban Services 😃, you can continue to access exclusive features, receive personalized updates, and engage with our vibrant community.
      </Typography>
      <Typography variant="body1" align="center" paragraph>
        If you have any questions or need assistance, our support team is always here to help.
      </Typography>
      <div style={{ textAlign: 'center' }}>
        <StyledButton variant="contained" onClick={handleLogout}>
          Logout
        </StyledButton>
      </div>
    </FullScreenContainer>
  );
};


