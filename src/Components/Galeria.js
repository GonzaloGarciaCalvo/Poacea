import React from 'react'
import { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import { Image } from 'mui-image';

export const Galeria = () => {
const [loading, setLoading] = useState(true)
console.log(" Galeria")
/* useEffect(() => {
	
console.log("renderiza Galeria")


}, [loading]) */

  return (
				<Grid container className='containerFotos' id="galeria">
					<Grid item xs={3} className='boxFotoGaleria' >
						<Image src="../../images/dibujos/d1.webp"  className='fotoGaleria' lazy/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<Image src="../../images/dibujos/d2.webp" className='fotoGaleria' lazy/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<Image src="../../images/dibujos/d3.webp" className='fotoGaleria' lazy/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<Image src="../../images/dibujos/d4.webp" className='fotoGaleria' lazy />
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria' >
						<Image src="../../images/dibujos/d5.webp"  className='fotoGaleria' lazy/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<Image src="../../images/dibujos/d6.webp" className='fotoGaleria' lazy/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<Image src="../../images/dibujos/d7.webp" className='fotoGaleria' lazy/>
					</Grid>
					<Grid item xs={3} className='boxFotoGaleria'>
						<Image src="../../images/dibujos/d8.webp" className='fotoGaleria' lazy />
					</Grid>
				</Grid>
	);
}

export default Galeria