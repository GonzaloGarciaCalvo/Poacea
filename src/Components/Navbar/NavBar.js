import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import {Link} from 'react-scroll';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './navbar.css'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
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
								href='#'
							>
								Nosotros
							</Link>
							<Link
								to="galeria"
								spy={true}
								smooth={true}
								className="appBarLink"
								href='#'
							>
								Galeria
							</Link>
							<Link to="super8" spy={true} smooth={true} className="appBarLink" href='#'>
								Super 8mm
							</Link>
							<Link
								to="servicios"
								spy={true}
								smooth={true}
								duration={1150}
								className="appBarLink"
								href='#'
							>
								Servicios
							</Link>
							<Link
								to="contacto"
								spy={true}
								smooth={true}
								duration={1150}
								className="appBarLink"
								href='#'
							>
								Contacto
							</Link>
						</Box>

						<IconButton
							sx={{
								display: { xs: "inline-flex", sm: "inline-flex", md: "none" },}}
								className="btnMenuResponsive"
								left="1rem"
								onClick={() => setOpenMenu(true)}
						>
							<MenuIcon fontSize='large'  color="redBrand"/>
						</IconButton>
					</Toolbar>
				</Container>
				<SwipeableDrawer
				  swipeAreaWidth={0}
					anchor="right"
					open={openMenu}
					onOpen={() => setOpenMenu(true)}
					onClose={() => setOpenMenu(false)}
					onClick={() => setOpenMenu(false)}
				>
					<div>
						<IconButton>
							<CloseIcon />
						</IconButton>					
					</div>
					<div id='boxImgMobileAppBar'>
						<img src='images/frame.webp' alt='logo Poacea'></img>
					</div>
					<Divider />
					<List>
						<ListItem>
							<Link className="linkResponsive" to="nosotros" href='#'>
								NOSOTROS
							</Link>
						</ListItem>
						<ListItem>
							<Link className="linkResponsive" to="galeria" href='#' smooth={true}>
								GALERIA
							</Link>
						</ListItem>
						<ListItem>
							<Link className="linkResponsive" to="super8" href='#' smooth={true}>
                {" "}SUPER 8MM{" "}
							</Link>
						</ListItem>
						<ListItem>
							<Link className="linkResponsive" to="servicios" href='#' smooth={true}>
								SERVICIOS
							</Link>
						</ListItem>
						<ListItem>
							<Link className="linkResponsive" to="contacto" href='#' smooth={true}>
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