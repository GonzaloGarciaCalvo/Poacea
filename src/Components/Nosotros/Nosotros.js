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
								src="images/loreto/Mask_group.png"
                className="circleImg"
								alt="logo Poacea"
							/>
							<img
								src="images/loreto/Ellipse34.jpg"
                className="mixColoredCircle"
								alt="composicion de imagen"
							/>
							<img
								src="images/loreto/Ellipse37.jpg"
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
								src="images/cristina/cristina.png"
								className="circleImg"
								alt="logo Poacea"
							/>
							<img
								src="images/cristina/cristinaOculta.jpg"
								className='mixColoredCircle__cristina'
								alt="composicion de imagen"
							/>
							<img
								src="images/francisco/ellipse40.png"
								className="uniformCircle__cristina"
								alt="composicion de imagen"
							/>
							<img
								src="images/cristina/smallCircleCristina.png"
								alt="composicion de imagen"
								className="smallCircle_cristina"
							/>
						</Box>
					</Box>
				</Grid>

				<Grid item xs={16} sm={8} className="boxDescripcion">
					<p className="descripcionSocio">
					POACEA es un Estudio de Dibujo, iniciado el año 2018 por Loreto Carrasco Lic. En Artes Visuales por la U. Austral de Chile el año 2014, quien adecua un espacio en el entretecho de la casa de su abuela en Baquedano 598, Osorno. 



 

					</p>
					<p className="descripcionSocio">
					Loreto en el taller osornino trabaja en dibujo y serigrafía experimentando la técnica de máscaras de papel estampando sobre textiles utilizados para vestuario, compartiendo pruebas y resultados con Ana María Ramos, grabadora, a quien visita en su taller desde 2016. Tras migrar a la ciudad de Santiago el año 2019, por razones prácticas ahonda en el estudio del dibujo utilizando policromos, grafitos y tinta negra. 
					</p>
					<p className="descripcionSocio">
					Actualmente el espacio de estudio se realiza junto a Cristina Daza, quien se relaciona con distintos formatos fílmicos y ha realizado diversos proyectos de cine y audiovisual desde la cámara.
					</p>
					<p className="descripcionSocio">
					Loreto y Cristina, han logrado conservar un espacio de desarrollo común. Congeniando el nombre de POACEA en inspiración a la familia de gramíneas o Poaceae, por ser un grupo de plantas con un alto desarrollo adaptativo. 

					</p>
					
					<img src="images/revelar.jpg" className="revelar" alt='icono revelar'/>
				</Grid>
			</Grid>

  )
}

export default Nosotros