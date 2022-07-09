
import Avatar from '@mui/material/Avatar';
/* import Box from '@mui/material/Box'; */
import React, { Suspense, lazy } from 'react';
/* import Grid from '@mui/material/Grid'; */
import CircularIndeterminate from './Spinner'
import useNearScreen from '../Hooks/UseNearScreen'
import Nosotros from './Nosotros/Nosotros';
import UpperBanner from './UpperBanner/UpperBanner';
/* import Galeria from './Galeria.js'; */
import Servicios from "./Servicios/Servicios";
import Contacto from "./Contacto/Contacto";
import Super8 from './Super8mm/Super8';




const LandingSection = () => {


	const { isNearScreen, fromRef } = useNearScreen({
		distance: '400px'
	})
	const SeccionGaleria = lazy(
		() => import('./Galeria/Galeria')
	)

	// COMANTADO: funciona para ocultar o mostrar imagen con click
	/* let circulo1 = document.getElementById("mixColoredCircle")
	  console.log(circulo1)
	  circulo1.addEventListener("click",setVisivility )
	  let circulo2 = document.getElementById("circleImg")
	  console.log(circulo2)
	  circulo2.addEventListener("click",setVisivility ) */
	/* const [display, setDisplay] = useState(true)  */
	/*function setVisivility(){
	  if (display){
		setDisplay(false)
		console.log("set false")
		console.log("display en if setdisplay(false)  ", display)
	  } else{
			console.log("set true")
			setDisplay(true)
			console.log("display en if setdisplay(true): ", display)
	  }
	  console.log("display", display)
	}
	console.log("display fuera de setVisivility", display) */



	return (
		<>
			

				<div
					className="logoSection"
					style={{ marginBottom: "1em", marginTop: "3em" }}
				>
					<Avatar
						alt="logo Poacea"
						src="images/ESTUDIO1.png"
						sx={{ width: "27%", height: "27%", borderRadius: 0 }}
					// LOGO CON MALA CALIDAD, fake svg
					/>
				</div>
				<UpperBanner />
				<Nosotros />
				<Suspense >
				<div id="galeria" ref={fromRef} className="divConRef galery" style={{ margin: "0em" }} >
					<h1 className="tituloSeccion tituloGaleria">GALERIA</h1>
					<div>
						{isNearScreen ? <SeccionGaleria /> : <CircularIndeterminate />}
					</div>
				</div>
				</Suspense>
				<Super8/>
				<Servicios />


				{/* <div className='boxAdorno'>
							<img src="../../images/adornosGaleria/ellipse26.png" className="medioAdornoGaleria1"/>
							<img src="../../images/adornosGaleria/ellipse25.png"  className="medioAdornoGaleria2"/>
			</div> */}
				<Contacto />
			
		</>
	);
}

export default LandingSection