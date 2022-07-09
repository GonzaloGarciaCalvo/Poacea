import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './nosotros.scss'

function Nosotros() {
	return (
		<Grid container id="nosotros"  >
			
			<Grid item xs={5} >
				<h1 className="tituloSeccion tituloNosotros">NOSOTROS</h1>
			</Grid>
			<Grid item xs={7}>

			</Grid>
			{/* LORETO */}
			<Grid item xs={12} sm={12} md={4} lg={5}  >
				<Box className="circleContainer">
					<Box className="boxImage">
						<img
							src="images/loreto/Mask_group.webp"
								/* onClick={setVisivility} */ className="circleImg"
							alt="logo Poacea"
						/>
						<img
							src="images/loreto/Ellipse34.webp"
								/* onClick={setVisivility} */ /* className={
									display ? "mixColoredCircle" : "mixColoredCircleInvisible"
								} */ className="mixColoredCircle"
							alt="composicion de imagen"
						/>
						<img
							src="images/loreto/Ellipse37.png"
								/* onClick={setVisivility} */ className="uniformCircle"
							alt="composicion de imagen"
						/>
						<img
							src="images/loreto/Ellipse36.png"
							alt="composicion de imagen"
							className="smallCircle"
						/>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} sm={12} md={7} lg={7}  >
				<h2 className="subtituloSeccion">LORETO CARRASCO</h2>
				<p className="info" >
				POACEA es un estudio de dibujo que se inicia el año 2018 en el taller de Loreto Carrasco ubicado en la ciudad de Osorno, en el entretecho de la casa de su abuela en Baquedano 598, donde conoce a Francisco A. Ortega quien colabora en el proyecto desde Producción. <br/>
				En el taller osornino experimenta con el dibujo y la serigrafía para ser aplicado como estampado en textiles utilizados en vestuario. Tras migrar a la ciudad de Santiago crea el sello que se imprimirá sobre dibujos y copias serigráficas.



				</p>
				<img src="images/revelar.webp" className="revelar" alt='icono revelar' />
			</Grid>
			{/***  Francisco ***/}
			<Grid item  xs={12} sm={12} md={4} lg={5}>
				<Box className="circleContainer__francisco">
					<Box className="boxImage__francisco">
						<img
							src="images/francisco/ellipse38.webp"
								/* onClick={setVisivility} */ className="circleImg__francisco"
							alt="logo Poacea"
						/>
						<img
							src="images/francisco/ellipse33.webp"
							/* onClick={setVisivility} */ /* className={
								display
									? "mixColoredCircle__francisco"
									: "mixColoredCircleInvisible"
							} */
							className='mixColoredCircle__francisco'
							alt="composicion de imagen"
						/>
						<img
							src="images/francisco/ellipse40.png"
								/* onClick={setVisivility} */ className="uniformCircle__francisco"
							alt="composicion de imagen"
						/>
						<img
							src="images/francisco/ellipse31.webp"
							alt="composicion de imagen Francisco"
							className="smallCircle_francisco"
						/>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} sm={12} md={7} lg={7}>
				<h2 className="subtituloSeccion">FRANCISCO ORTEGA</h2>
				<p className="info" >
				Actualmente el trabajo de taller es compartido junto a Cristina Daza con base en Santiago de Chile; Directora de fotografía y camarógrafa. quien ha realizado cámara y asistencia de cámara en diversos proyectos de cine y audiovisual. <br/>
				Desde el 2010 a la actualidad se relaciona con formatos fílmicos, desde su filmación, intervención, restauración y revelado.


				</p>
			</Grid>
							{/* CRISTINA */}
			<Grid item xs={12} sm={12} md={4} lg={5}>
				<Box className="circleContainer__cristina" >
					<Box className="boxImage__francisco">
						<img
							src="images/cristina/cristina.webp"
								/* onClick={setVisivility} */ className="circleImg__francisco"
							alt="logo Poacea"
						/>
						<img
							src="images/cristina/cristinaOculta.webp"
							/* onClick={setVisivility} */ /* className={
								display
									? "mixColoredCircle__francisco"
									: "mixColoredCircleInvisible"
							} */
							className='mixColoredCircle__cristina'
							alt="composicion de imagen"
						/>
						<img
							src="images/francisco/ellipse40.png"
								/* onClick={setVisivility} */ className="uniformCircle__cristina"
							alt="composicion de imagen"
						/>
						<img
							src="images/cristina/smallCircleCristina.webp"
							alt="composicion de imagen Francisco"
							className="smallCircle_cristina"
						/>
					</Box>
				</Box>
			</Grid>
			<Grid item xs={12} sm={12} md={7} lg={7}>
				<h2 className="subtituloSeccion">CRISTINA DAZA</h2>
				<p className="info" >
				Ambas de personalidades inquietas han logrado conservar un espacio de desarrollo común. <br/>
				El nombre POACEA es una inspiración a la familia de gramíneas o Poáceas (Poaceae) por ser un grupo de plantas con un alto desarrollo adaptativo.

				</p>
			</Grid>
		</Grid>

	)
}

export default Nosotros