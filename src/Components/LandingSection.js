import React, { Suspense, lazy } from 'react';
import CircularIndeterminate from './Spinner'
import useNearScreen from '../Hooks/UseNearScreen'
import Nosotros from './Nosotros/Nosotros';
import UpperBanner from './UpperBanner/UpperBanner';
import Servicios from "./Servicios/Servicios";
import Contacto from "./Contacto/Contacto";
import Super8 from './Super8mm/Super8';


const LandingSection = () => {


	const { isNearScreen, fromRef } = useNearScreen({
		distance: '850px'
	})

	const SeccionGaleria = lazy(
		() => import('./Galeria/Galeria')
	)
/* 	const SeccionServicios = lazy(
		() => import('./Servicios/Servicios')
	) */

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
    <main id='top'>
			<div className="logoSection">	
				{/* <img src="/images/frame2.jpg" alt="logo Poacea ./frame2.png" className='logoImg'/>  */}
				<img src="images/frame.webp" alt="logo Poacea frame.webp" className='logoImg'/>
			</div>
			<UpperBanner />
			<Nosotros />
			<Suspense>
			<div id="galeria" ref={fromRef} className="divConRef galery" style={{ margin: "0em" }} >
				<div>
					{isNearScreen ? <SeccionGaleria /> : <CircularIndeterminate />}
				</div>
			</div>
			</Suspense>
			<Super8 />
			{/* <Suspense>
			<div ref={fromRef} id="servicios">
					{isNearScreen ? <SeccionServicios /> : <CircularIndeterminate />}
				</div>
			</Suspense> */}
			<Servicios />

			<Contacto />
		</main>
	);
}

export default LandingSection