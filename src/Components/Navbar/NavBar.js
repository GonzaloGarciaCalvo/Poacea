import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
/* /* import Typography from '@mui/material/Typography'; */
import Menu from '@mui/material/Menu'; 

import Container from '@mui/material/Container';
/* import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb'; */
import {Link} from 'react-scroll';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';

import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';





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

function NavBar() {
  /* const [anchorEl, setAnchorEl] = React.useState(null); */
  /* const open = Boolean(anchorEl); */
  /* const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
      setAnchorEl(null);
  }; */

  const [openMenu, setOpenMenu]= useState(false)


  return (
		<ThemeProvider theme={theme}>
			<AppBar position="sticky" color="default" className="appBar" id='appBar'>
				<Container maxWidth="xl">
					<Toolbar disableGutters id="toolBar">
						<Box
							className="btnBox"
							sx={{ display: { xs: "none", sm: "none", md: "inline-flex" } }}
						>
							<Link
								to="nosotros"
								activeClass="active"
								spy={true}
								smooth={true}
								offset={-70}
								className="appBarLink"
							>
								Nosotros
							</Link>
							<Link
								to="galeria"
								spy={true}
								smooth={true}
								className="appBarLink"
							>
								Galeria
							</Link>
							<Link to="super8" spy={true} smooth={true} className="appBarLink">
								Super 8mm
							</Link>
							<Link
								to="servicios"
								spy={true}
								smooth={true}
								duration={1150}
								className="appBarLink"
							>
								Servicios
							</Link>
							<Link
								to="contacto"
								spy={true}
								smooth={true}
								duration={1150}
								className="appBarLink"
							>
								Contacto
							</Link>
						</Box>

						<IconButton
							sx={{
								display: { xs: "inline-flex", sm: "inline-flex", md: "none" },}}
								className="btnMenuResponsive"
								left="1rem"
						>
							<MenuIcon onClick={() => setOpenMenu(true)} color="redBrand"/>
						</IconButton>
					</Toolbar>
				</Container>
				<SwipeableDrawer

				  swipeAreaWidth={0}
					anchor="right"
					open={openMenu}
					onOpen={() => setOpenMenu(true)}
					onClose={() => setOpenMenu(false)}
				>
					<div>
						<IconButton>
							<ChevronRightIcon onClick={() => setOpenMenu(false)} />
						</IconButton>
					</div>
					<Divider />
					<List>
						<ListItem>
							<Link className="linkResponsive" to="nosotros">
								NOSOTROS
							</Link>
						</ListItem>
						<ListItem>
							<Link className="linkResponsive" to="galeria">
								GALERIA
							</Link>
						</ListItem>
						<ListItem>
							<Link className="linkResponsive" to="super8">
                {" "}SUPER 8MM{" "}
							</Link>
						</ListItem>
						<ListItem>
							<Link className="linkResponsive" to="servicios">
								SERVICIOS
							</Link>
						</ListItem>
						<ListItem>
							<Link className="linkResponsive" to="contacto">
								CONTACTO
							</Link>
						</ListItem>
					</List>
				</SwipeableDrawer>
			</AppBar>
		</ThemeProvider>
	);
}
export default NavBar; 

// const NavBar = () => {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
// /*   const [anchorElUser, setAnchorElUser] = React.useState(null); */

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   /* const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   }; */

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   /* const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   }; */

//   /* function PersonalizedScroll () { Scroll.animateScroll.scrollToTop(); } */
 

//   return (
//     <ThemeProvider theme={theme}>
//     <AppBar position="sticky" className='appBar' color='white' sx={{ boxShadow:'none', paddingTop:'1em' }}>
//       <Container maxWidth="xl">
//         <Toolbar disableGutters sx={{  height:"2.5em", minHeight:"unset !important" }}>
//           <Box sx={{ flexGrow: 1, boxShadow:'none' , display: { xs: 'flex', md: 'none' } }}>
//             <IconButton
//               size="large"
//               aria-label="account of current user"
//               aria-controls="menu-appbar"
//               aria-haspopup="true"
//               onClick={handleOpenNavMenu}
//               color="inherit"
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               id="menu-appbar"
//               anchorEl={anchorElNav}
//               anchorOrigin={{
//                 vertical: 'bottom',
//                 horizontal: 'left',
//               }}
//               keepMounted
//               transformOrigin={{
//                 vertical: 'top',
//                 horizontal: 'left',
//               }}
//               open={Boolean(anchorElNav)}
//               onClose={handleCloseNavMenu}
//               sx={{
//                 display: { xs: 'block', md: 'none' },
//               }}
//             >
//             <div className='MenuMovil'>
//               <Link to="nosotros" activeClass="active" spy={true} smooth={true} offset={-70} className="appBarLinkMovil">
//                 Nosotros
//               </Link>
//               <Link to="galeria" spy={true} smooth={true} className="appBarLinkMovil">
//                 Galeria
//               </Link>
//               <Link to="super8" spy={true} smooth={true} className="appBarLinkMovil">
//                 Super 8mm
//               </Link>
//               <Link to="servicios" spy={true} smooth={true} duration={1150} className="appBarLinkMovil" >
//                 Servicios
//               </Link>
//               <Link to="contacto" spy={true} smooth={true} duration={1150} className="appBarLinkMovil">
//                 Contacto
//               </Link>
//             </div>
//               {/* {pages.map((page) => (
//                 <MenuItem key={page} onClick={handleCloseNavMenu}>
//                   <Typography textAlign="center">{page}</Typography>
//                 </MenuItem> // EDITAR CON LINKS ESTATICOS
//               ))} */}
//             </Menu>
//           </Box>
//           {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
          
//           <Box sx={{ justifyContent:'space-evenly', width:'100%',marginX:'3em', display: { xs: 'none', md: 'flex' } }}>
            
//           <div
//             style={{
//               display: "flex",
//               listStyle: "none",
//               justifyContent: "space-around",
//               color:'#F90606', // el tema aplica solo a componentes MUI, los Links no lo son
//               width:'100%'
//             }}
//           >
//             {/* <Link to="nosotros" activeClass="active" onClick={PersonalizedScroll} spy={true} smooth={true} offset={-70} className="appBarLink">
//               Nosotros
//             </Link> */}
//             <Link to="nosotros" activeClass="active" spy={true} smooth={true} offset={-70} className="appBarLink">
//               Nosotros
//             </Link>
//             <Link to="galeria" spy={true} smooth={true} className="appBarLink">
//               Galeria
//             </Link>
//             <Link to="super8" spy={true} smooth={true} className="appBarLink">
//               Super 8mm
//             </Link>
//             <Link to="servicios" spy={true} smooth={true} duration={1150} className="appBarLink" >
//               Servicios
//             </Link>
//             <Link to="contacto" spy={true} smooth={true} duration={1150} className="appBarLink">
//               Contacto
//             </Link>
//           </div>  
//           </Box>
//         </Toolbar>
//       </Container>
//     </AppBar>
//     </ThemeProvider>
//   );
// };
// export default NavBar;