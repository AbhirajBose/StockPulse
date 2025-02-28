import React from 'react';
import { useState } from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

const SidebarNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(location.pathname);


  const menuItems = [
    { text: 'HOMEPAGE', path: '/home' },
    { text: 'DASHBOARD', path: '/dashboard' },
    { text: 'MARKETS', path: '/markets' },
    { text: 'TUTORIALS', path: '/tutorials' },
    { text: 'LEADERBOARD', path: '/leaderboard' },
    { text: 'NEWS', path: '/news' },
    { text: 'COMMUNITY', path: '/community' },
    { text: 'CHALLENGES', path: '/challenges' },
    { text: 'PROFILE', path: '/profile' },
    { text: 'SETTINGS', path: '/settings' },
    { text: 'HELP & SUPPORT', path: '/help' },
    { text: 'LOGOUT', path: '/logout', isAction: true }
  ];
  
  const handleNavigation = (path, isAction) => {
    setActiveItem(path);
    if (isAction) {
      // Handle logout action or other special actions
      if (path === '/logout') {
        // Add your logout logic here
        console.log('Logging out...');
        // Then redirect to login page or homepage
      }
    } else {
      navigate(path);
    }
  };
  
  return (
    <Box
      sx={{
        width: '200px',
        height: 'calc(100vh - 10vh)',
        backgroundColor: '#1a1a1a',
        color: 'white',
        borderRight: '1px solid #00c8c8'
      }}
    >
      <List sx={{ padding: 0 }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={item.text}>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavigation(item.path, item.isAction)}
                sx={{
                  py: 1.5,
                  borderLeft: location.pathname === item.path ? '3px solid #00c8c8' : '3px solid transparent',
                  backgroundColor: activeItem === item.path ? '#2a2a2a' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#303030',
                  },
                }}
              >
                <ListItemText 
                  primary={item.text} 
                  sx={{ 
                    textAlign: 'center',
                    '& .MuiTypography-root': {
                      fontSize: '0.85rem',
                      fontWeight: location.pathname === item.path ? 'bold' : 'normal',
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
            {index < menuItems.length - 1 && <Divider sx={{ backgroundColor: '#2a2a2a', margin: 0 }} />}
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default SidebarNavigation;