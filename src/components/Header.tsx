import { AppBar, Box, Button, Container, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Container>
    //         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
    //           <NavLink to={'/users'}>
    //             Merehead Test
    //           </NavLink>
    //         </Typography>
    //         <Button color="inherit">
    //           <NavLink to={'/createUser'}>
    //             Create User
    //           </NavLink>
    //         </Button>

    //       </Container>
    //     </Toolbar>
    //   </AppBar>
    // </Box>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <NavLink to={'/'}>
                Merehead Test
              </NavLink>
            </Typography>
            <Button color="inherit">
              <NavLink to={'/createUser'}>
                Create User
              </NavLink>
            </Button>

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  )
}