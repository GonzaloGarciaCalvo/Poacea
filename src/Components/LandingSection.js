/* import React from 'react'; */
import Avatar from '@mui/material/Avatar';
import { useSyncExternalStore } from 'react';
import Box from '@mui/material/Box';
import { useState } from 'react';



const LandingSection = () => {
  /* let circulo1 = document.getElementById("mixColoredCircle")
    console.log(circulo1)
    circulo1.addEventListener("click",setVisivility )
    let circulo2 = document.getElementById("circleImg")
    console.log(circulo2)
    circulo2.addEventListener("click",setVisivility ) */
    const [display, setDisplay] = useState(true)
    function setVisivility(){
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
    console.log("display fuera de setVisivility", display)
    
    

  return (
		<>
      <div id="home" style={{height:"4em"  }}></div>
			<div className='logoSection' style={{ marginBottom:"6em"  }}>
        <Avatar
          alt="logo Poacea"
          src="images/ESTUDIO1.svg"
          sx={{ width: "25em", height: "25em", borderRadius:0 }}
          // LOGO CON MALA CALIDAD, fake svg
        />
      </div>
      
			<div id="nosotros" style={{ margin:"6em"  }}>
				<h1 className='tituloSeccion' >Nosotros</h1>
        <h2 className='subtituloSeccion'>LORETO CARRASCO</h2>
        <Box classNAme="circleContainer" sx={{ width: "30%", height: "30vw", margin:"3vw" }}>
          <Box className="boxImage" sx={{ width: "100%", height: "100%", margin:"4em", position:"relative" }}>
          <img src="images/loreto/Mask_group.png" /* onClick={setVisivility} */ className="circleImg" alt="logo Poacea" />
          <img src="images/loreto/Ellipse34.webp" /* onClick={setVisivility} */ className={display? 'mixColoredCircle':'mixColoredCircleInvisible'}  alt="composicion de imagen"/>
          <img src="images/loreto/Ellipse37.png"  /* onClick={setVisivility} */ className="uniformCircle" alt="composicion de imagen"/> 
          <img src="images/loreto/Ellipse36.png" alt="composicion de imagen" className="smallCircle" /> 
          </Box>
        </Box>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				repellendus. Totam nihil similique a repellat minus dolor amet quasi.
				Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				repellendus. Totam nihil similique a repellat minus dolor amet quasi.
				Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				repellendus. Totam nihil similique a repellat minus dolor amet quasi.
				Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				repellendus. Totam nihil similique a repellat minus dolor amet quasi.
				Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
      </div>
      <div id="galeria" style={{ height: 100, margin:"6em"  }}>
          <h1 className='tituloSeccion' >GALERIA</h1>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				repellendus. Totam nihil similique a repellat minus dolor amet quasi.
				Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
          </p>
      </div>
			<div id="super8" style={{ height: 300, margin:"6em"  }}>
				<h1 className='tituloSeccion' >SUPER 8MM</h1>
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
			<div id="servicios" style={{ height: 300, margin:"6em"  }}>
				<h1 className='tituloSeccion' >SERVICIOS</h1>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				repellendus. Totam nihil similique a repellat minus dolor amet quasi.
				Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Id,
				repellendus. Totam nihil similique a repellat minus dolor amet quasi.
				Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        repellendus. Totam nihil similique a repellat minus dolor amet quasi.
			</div>
      <div id="contacto" style={{ height: 300, margin:"6em" }} >
        <h1 className='tituloSeccion'>CONTACTO</h1>
        <p>Telefono</p>
      </div>
		</>
	);
}

export default LandingSection