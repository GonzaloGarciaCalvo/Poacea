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


	return (
    <main id='top'>
			<div className="logoSection">	
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
			<Servicios />
			<Contacto />
		</main>
	);
}

export default LandingSection