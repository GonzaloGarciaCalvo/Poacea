import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import {Link} from 'react-scroll';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './navbar.css'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#0971f1',
      darker: '#053e85',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    white: {
      main:'#FFFFFF'
    },
    redBrand: {
      main:'#F90606'
    }
  },
});
const pages = ['Nosotros', 'Galeria', 'Super 8mm', 'Servicios', 'Contacto'];

const NavBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
/*   const [anchorElUser, setAnchorElUser] = React.useState(null); */

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  /* const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  }; */

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  /* const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  }; */

  /* function PersonalizedScroll () { Scroll.animateScroll.scrollToTop(); } */
 

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="sticky" className='appBar' color='white' sx={{ boxShadow:'none', paddingTop:'1em' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{  height:"2.5em", minHeight:"unset !important" }}>
          <Box sx={{ flexGrow: 1, boxShadow:'none' , display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            <div className='MenuMovil'>
              <Link to="nosotros" activeClass="active" spy={true} smooth={true} offset={-70} className="appBarLinkMovil">
                Nosotros
              </Link>
              <Link to="galeria" spy={true} smooth={true} className="appBarLinkMovil">
                Galeria
              </Link>
              <Link to="super8" spy={true} smooth={true} className="appBarLinkMovil">
                Super 8mm
              </Link>
              <Link to="servicios" spy={true} smooth={true} duration={1150} className="appBarLinkMovil" >
                Servicios
              </Link>
              <Link to="contacto" spy={true} smooth={true} duration={1150} className="appBarLinkMovil">
                Contacto
              </Link>
            </div>
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem> // EDITAR CON LINKS ESTATICOS
              ))} */}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          
          <Box sx={{ justifyContent:'space-evenly', width:'100%',marginX:'3em', display: { xs: 'none', md: 'flex' } }}>
            
          <div
            style={{
              display: "flex",
              listStyle: "none",
              justifyContent: "space-around",
              color:'#F90606', // el tema aplica solo a componentes MUI, los Links no lo son
              width:'100%'
            }}
          >
            {/* <Link to="nosotros" activeClass="active" onClick={PersonalizedScroll} spy={true} smooth={true} offset={-70} className="appBarLink">
              Nosotros
            </Link> */}
            <Link to="nosotros" activeClass="active" spy={true} smooth={true} offset={-70} className="appBarLink">
              Nosotros
            </Link>
            <Link to="galeria" spy={true} smooth={true} className="appBarLink">
              Galeria
            </Link>
            <Link to="super8" spy={true} smooth={true} className="appBarLink">
              Super 8mm
            </Link>
            <Link to="servicios" spy={true} smooth={true} duration={1150} className="appBarLink" >
              Servicios
            </Link>
            <Link to="contacto" spy={true} smooth={true} duration={1150} className="appBarLink">
              Contacto
            </Link>
          </div>  
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
};
export default NavBar;