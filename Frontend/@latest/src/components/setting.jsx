import React, { useState } from 'react';
import { Typography, TextField, Box, Button, Collapse } from '@mui/material';

function ForgotPasswordDropdown() {
  const [expanded, setExpanded] = useState(false);
  const [email, setEmail] = useState('');

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle password reset logic here
    console.log('Password reset requested for:', email);
    // Reset form and collapse
    setEmail('');
    setExpanded(false);
  };

  return (
    <Box>
      <Typography 
        onClick={handleToggle}
        sx={{ 
          cursor: 'pointer',
          color: 'primary.main',
          '&:hover': { textDecoration: 'underline' }
        }}
      >
        Forgot Password?
      </Typography>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
          <TextField
            fullWidth
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            autoFocus
          />
          <Button 
            type="submit" 
            variant="contained" 
            sx={{ mt: 2 }}
          >
            Reset Password
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
}

export default ForgotPasswordDropdown;