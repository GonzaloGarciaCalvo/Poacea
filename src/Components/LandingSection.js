
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import React, { /* useState, */ Suspense, lazy  } from 'react';
import Grid from '@mui/material/Grid';
import CircularIndeterminate from './Spinner'
import useNearScreen from '../Hooks/UseNearScreen'
import Servicios from './Servicios.js';
/* import Galeria from './Galeria.js'; */





const LandingSection = () => {

  const {isNearScreen, fromRef} = useNearScreen({
    distance: '400px'
  })
  const SeccionGaleria = lazy(
    () => import('./Galeria')
  )

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
		<>
			<div id="home" style={{ height: "2em" }}></div>
			<div
				className="logoSection"
				style={{ marginBottom: "1em", marginTop: "3em" }}
			>
				<Avatar
					alt="logo Poacea"
					src="images/ESTUDIO1.png"
					sx={{ width: "25em", height: "25em", borderRadius: 0 }}
					// LOGO CON MALA CALIDAD, fake svg
				/>
			</div>

			<Grid container id="nosotros" style={{}}>
				<Grid item xs={12}>
					<h1 className="tituloSeccion">Nosotros</h1>
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
			</Grid>
			<Box
				sx={{ width: "100%", height: "7rem", backgroundColor: "#F90606" }}
			></Box>
		{/* 	<div id="galeria" style={{ height: 100, margin: "6em" }}>
				<h1 className="tituloSeccion">GALERIA</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
					repellendus. Totam nihil similique a repellat minus dolor amet quasi.
					Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				</p>
			</div> */}
			<div id="galeria" ref={fromRef} className="divConRef galery"  style={{margin:"6em"}} >
			<h1 className="tituloSeccion">GALERIA</h1>
				<Suspense>
					<div>
          {isNearScreen ? <SeccionGaleria /> : <CircularIndeterminate />}
					</div>
				</Suspense>
			</div>
			<div id="super8" style={{ height: 300, margin: "6em" }}>
				<h1 className="tituloSeccion">SUPER 8MM</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
					repellendus. Totam nihil similique a repellat minus dolor amet quasi.
					Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
					repellendus. Totam nihil similique a repellat minus dolor amet quasi.
					Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
					Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
					repellendus. Totam nihil similique a repellat minus dolor amet quasi.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
					repellendus. Totam nihil similique a repellat minus dolor amet quasi.
					Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
					repellendus. Totam nihil similique a repellat minus dolor amet quasi.
				</p>
			</div>
			<Servicios />
			<div id="contacto" style={{ height: 300, margin: "6em" }}>
				<h1 className="tituloSeccion">CONTACTO</h1>
			</div>

			
		</>
	);
}

export default LandingSection