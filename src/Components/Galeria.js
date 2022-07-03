import React from 'react'
import Grid from '@mui/material/Grid';

export const Galeria = () => {

  return (
				<Grid container className='containerFotos' id="galeria">
					<Grid item xs={3} className='boxFotoGaleria' >
						<img src="../../images/dibujos/d1.webp"  className='fotoGaleria' alt="foto"/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<img src="../../images/dibujos/d2.webp" className='fotoGaleria' alt="foto"/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<img src="../../images/dibujos/d3.webp" className='fotoGaleria' alt="foto"/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<img src="../../images/dibujos/d4.webp" className='fotoGaleria' alt="foto" />
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria' >
						<img src="../../images/dibujos/d5.webp"  className='fotoGaleria' alt="foto"/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<img src="../../images/dibujos/d6.webp" className='fotoGaleria' alt="foto"/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<img src="../../images/dibujos/d7.webp" className='fotoGaleria' alt="foto" />
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<img src="../../images/dibujos/d8.webp" className='fotoGaleria' alt="foto"  />
					</Grid>
				</Grid>
	);
}

export default Galeria