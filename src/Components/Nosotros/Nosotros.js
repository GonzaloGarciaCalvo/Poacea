import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './nosotros.css'

function Nosotros({itemInfo}) {
	

  return (
    <Grid container id="nosotros" columns={16}>
				<Grid item xs={16} sm={7}>
					<h1 className="tituloSeccion tituloNosotros">NOSOTROS</h1>
				</Grid>
				<Grid item xs={16} sm={9}>
				</Grid>
				<Grid 
				  item xs={16} sm={7}
				  sx={{display:'flex', flexDirection:'column',
					    alignItems:{xs:'center' ,md:'flex-end',
							justifyContent:{xs:'center'}
						}}}
					>
					<Box className="circleContainer">
						<Box className="boxImage">
							<img
								src="images/loreto/Mask_group.webp"
                className="circleImg"
								alt="logo Poacea"
							/>
							<img
								src="images/loreto/Ellipse34.webp"
                className="mixColoredCircle"
								alt="composicion de imagen"
							/>
							<img
								src="images/loreto/Ellipse37.png"
								className="uniformCircle" 
								alt="composicion de imagen"
							/>
							<img
								src="images/loreto/Ellipse36.png"
								alt="composicion de imagen"
								className="smallCircle"
							/>
						</Box>
					</Box>

					<Box className="circleContainer" >
						<Box className="boxImage">
							<img
								src="images/cristina/cristina.webp"
								className="circleImg"
								alt="logo Poacea"
							/>
							<img
								src="images/cristina/cristinaOculta.webp"
								className='mixColoredCircle__cristina'
								alt="composicion de imagen"
							/>
							<img
								src="images/francisco/ellipse40.png"
								className="uniformCircle__cristina"
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

				<Grid item xs={16} sm={8} className="boxDescripcion">
					<p className="descripcionSocio">
          POACEA es un estudio de dibujo que se inicia el año 2018 en el taller de Loreto Carrasco ubicado 
          en la ciudad de Osorno, en el entretecho de la casa de su abuela en Baquedano 598, 
          donde conoce a Francisco A. Ortega quien colabora en el proyecto desde Producción.
					</p>
					<p className="descripcionSocio">
          En el taller osornino experimenta con el dibujo y la serigrafía para ser aplicado 
          como estampado en textiles utilizados en vestuario. Tras migrar a la ciudad de Santiago 
          crea el sello que se imprimirá sobre dibujos y copias serigráficas.
					</p>
					<p className="descripcionSocio">
						Actualmente el trabajo de taller es compartido junto a Cristina Daza 
						con base en Santiago de Chile; Directora de fotografía y camarógrafa. 
						quien ha realizado cámara y asistencia de cámara en diversos proyectos de cine y audiovisual.
					</p>
					<p className="descripcionSocio">
						Desde el 2010 a la actualidad se relaciona con formatos fílmicos, desde su filmación, 
						intervención, restauración y revelado.
					</p>
					<p className="descripcionSocio">
						Ambas de personalidades inquietas han logrado conservar un espacio de desarrollo común.
					</p>
          <p className="descripcionSocio"> 
						El nombre POACEA es una inspiración a la familia de gramíneas o Poáceas (Poaceae) por ser un grupo de plantas con un alto desarrollo adaptativo.
					</p>
					<img src="images/revelar.webp" className="revelar" alt='icono revelar'/>
				</Grid>
			</Grid>

  )
}

export default Nosotros