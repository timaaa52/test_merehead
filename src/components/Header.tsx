import { AppBar, Container, Toolbar, Typography } from '@mui/material';

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Container>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Merehead Test
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  )
}