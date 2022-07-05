import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import './nosotros.css'

function Nosotros() {
  return (
    <Grid container id="nosotros" style={{}}>
				{/* <Grid item xs={12}>
					<h1 className="tituloSeccion tituloNosotros">Nosotros</h1>
				</Grid> */}
				<Grid item xs={5}>
					<h1 className="tituloSeccion tituloNosotros">Nosotros</h1>
				</Grid>
				<Grid item xs={7}>
					
				</Grid>
				<Grid item xs={5}>
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
				<Grid item xs={7}>
					<h2 className="subtituloSeccion">LORETO CARRASCO</h2>
					<p style={{ paddingLeft: "6em", paddingRight: "6em" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
						repellendus. Totam nihil similique a repellat minus dolor amet
						quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Id, repellendus. Totam nihil similique a repellat minus dolor
						amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. repellendus. Totam nihil similique a repellat minus
						dolor amet quasi. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Id, repellendus. Totam nihil similique a repellat minus dolor
						amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. repellendus. Totam nihil similique a repellat minus
						dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem
						maxime minima animi.
					</p>
					<img src="images/revelar.webp" className="revelar" alt='icono revelar'/>
				</Grid>
				{/***  Francisco ***/}
				<Grid item xs={5}>
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
				<Grid item xs={7}>
					<h2 className="subtituloSeccion">FRANCISCO ORTEGA</h2>
					<p style={{ paddingLeft: "6em", paddingRight: "6em" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
						repellendus. Totam nihil similique a repellat minus dolor amet
						quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Id, repellendus. Totam nihil similique a repellat minus dolor
						amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. repellendus. Totam nihil similique a repellat minus
						dolor amet quasi. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Id, repellendus. Totam nihil similique a repellat minus dolor
						amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. repellendus. Totam nihil similique a repellat minus
						dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem
						maxime minima animi.
					</p>
				</Grid>

				<Grid item xs={5}>
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
				<Grid item xs={7}>
					<h2 className="subtituloSeccion">FRANCISCO ORTEGA</h2>
					<p style={{ paddingLeft: "6em", paddingRight: "6em" }}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
						repellendus. Totam nihil similique a repellat minus dolor amet
						quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Id, repellendus. Totam nihil similique a repellat minus dolor
						amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. repellendus. Totam nihil similique a repellat minus
						dolor amet quasi. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Id, repellendus. Totam nihil similique a repellat minus dolor
						amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime
						minima animi. repellendus. Totam nihil similique a repellat minus
						dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem
						maxime minima animi.
					</p>
				</Grid>
			</Grid>

  )
}

export default Nosotros