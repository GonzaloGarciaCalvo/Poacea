import React from 'react'
import Grid from '@mui/material/Grid';
import BasicModal from '../Modal';
import './Galeria.css'
export const Galeria = () => {

  return (
				<Grid container className='containerFotos' id="galeria">
					<Grid item xs={12} sm={6} md={3} className='boxFotoGaleria' >
					<BasicModal imgUrl={"../../images/dibujos/d1.webp"} /> 
						{/* <img  src="../../images/dibujos/d1.webp"  className='fotoGaleria' alt="foto"/> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}  className='boxFotoGaleria'>
						<BasicModal imgUrl={"../../images/dibujos/d2.webp"} sx={{width:"100%"}}/>
						{/* <img src="../../images/dibujos/d2.webp" className='fotoGaleria' alt="foto"/> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}  className='boxFotoGaleria'>
						<BasicModal imgUrl={"../../images/dibujos/d3.webp"} sx={{width:"100%"}}/>
						{/* <img src="../../images/dibujos/d3.webp" className='fotoGaleria' alt="foto"/> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}  className='boxFotoGaleria'>
						<BasicModal imgUrl={"../../images/dibujos/d4.webp"} sx={{width:"100%"}}/>
						{/* <img src="../../images/dibujos/d4.webp" className='fotoGaleria' alt="foto" /> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}  className='boxFotoGaleria' >
						<BasicModal imgUrl={"../../images/dibujos/d5.webp"} sx={{width:"100%"}}/>
						{/* <img src="../../images/dibujos/d5.webp"  className='fotoGaleria' alt="foto"/> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}  className='boxFotoGaleria'>
						<BasicModal imgUrl={"../../images/dibujos/d6.webp"} sx={{width:"100%"}}/>
						{/* <img src="../../images/dibujos/d6.webp" className='fotoGaleria' alt="foto"/> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3} xl={3} className='boxFotoGaleria'>
						<BasicModal imgUrl={"../../images/dibujos/d7.webp"} sx={{width:"100%"}}/>
						{/* <img src="../../images/dibujos/d7.webp" className='fotoGaleria' alt="foto" /> */}
					</Grid>
					<Grid item xs={12} sm={6} md={3}  className='boxFotoGaleria'>
						<BasicModal imgUrl={"../../images/dibujos/d8.webp"} sx={{width:"100%"}}/>
					{/* 	<img src="../../images/dibujos/d8.webp" className='fotoGaleria' alt="foto"  /> */}
					</Grid>
					<img src="../../images/adornoGaleria.png" className="adornoGaleria1" alt="adorno"/>
					<img src="../../images/adornoGaleria.png" className="adornoGaleria2" alt="adorno"/>
					<img src="../../images/adornoGaleria.png" className="adornoGaleria3" alt="adorno"/>
				</Grid>
	);
}

export default Galeria