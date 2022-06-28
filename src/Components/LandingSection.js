import React from 'react';
import Avatar from '@mui/material/Avatar';

const LandingSection = () => {
  return (
		<>
    <div id="home" style={{height:"4em"  }}></div>
			<div className='logoSection' style={{ marginBottom:"6em"  }}>
        <Avatar
          alt="logo Poacea"
          src="images/ESTUDIO1.svg"
          sx={{ width: "25em", height: "25em", borderRadius:0 }}
        />
      </div>
      <div className='logoCss'>
        <p className='logoCSS__firtLine'>POA</p>
        <p className='logoCSS__secondLine' >CEA</p>
        <p className='logo__thirdLine'>ESTUDIO DE DIBUJO Y FOTOGRAFIO</p>
      </div>
			<div id="about" style={{ height: 400, margin:"6em"  }}>
				<h1>This is About section</h1>
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
			<div id="contact" style={{ height: 400, margin:"6em"  }}>
				<h1>This is Contact section</h1>
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
      </div>
			<div id="service" style={{ height: 300, margin:"6em"  }}>
				<h1>This is Service section</h1>
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
      <div id="contacto">
        <p>Telefono</p>
      </div>
		</>
	);
}

export default LandingSection