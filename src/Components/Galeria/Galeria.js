import React from 'react'
import Grid from '@mui/material/Grid';
import BasicModal from '../Modal';
import IconButton from '@mui/material/IconButton'
import {Link} from 'react-scroll'
import './Galeria.css'
import {obras} from './Obras'



 const Galeria = () => {

  return (
		<>
			<h1 className="tituloGaleria">GALERÍA</h1>
			<Grid container className='containerFotos' >	
				{obras.map(obra => 
					<Grid key={obra.id} item xs={6} sm={3} md={3} className='boxFotoGaleria' >
						<BasicModal obra={obra} /> 
					</Grid>
				)}
				
				<Grid item  xs={12} sm={6} >
					<div className="capPdf ">
						<a href='https://drive.google.com/file/d/1AhL1xwbaeESQdyEJzo6JiVnPz6vzvagQ/view?usp=sharing' target="_blank"className='pdfButton'>
								Ver PDF
						</a>
					</div>
					{/* <img src="../../images/dibujos/cap_pdf.jpg" alt="link a pdf"  className="capPdf "/> */}
				</Grid>
				
				<img src="../../images/adornoGaleria.png" className="adornoGaleria1" alt="adorno"/>
				<img src="../../images/adornoGaleria.png" className="adornoGaleria2" alt="adorno"/>
				<img src="../../images/adornoGaleria.png" className="adornoGaleria3" alt="adorno"/>
				<img src="../../images/adornoGaleria.png" className="adornoGaleria4" alt="adorno"/>
				<img src="../../images/adornoGaleria.png" className="adornoGaleria5" alt="adorno"/>
				<Grid item xs={12} direction="column"alignItems="center">
							
				</Grid>
				<Link to="contacto" spy={true} smooth={true} duration={500} className="contactButton contactButton__galery">Contacto</Link>

			</Grid>
		</>
	);
}

export default Galeria

