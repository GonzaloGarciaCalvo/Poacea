import React from 'react';
import Box from '@mui/material/Box';
/* import Button from '@mui/material/Button'; */
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Grid } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: {xs:'85%', md:'39%', xl:'37%'}, 
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 0,
  p: 5,
  outline: 'none',
  borderRadius: '10px',
  /* display:'flex',
  flexdirection:'row', */
};

export default function BasicModal({obra}) { 
 
  let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches; //verifica si cumple condicion

  
  

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => { 
    setOpen(true);
    /* if (!isMobile) {
     
      setOpen(true);
      console.log("pantalla en true")
  }  else {console.log("no es movil")}; */
  }
  const handleClose = () => setOpen(false);

  return (
		<>
			<figure className="figure proyecto">{}
        <img src={obra.image}  className="fotoGaleria" alt="dibujo" />
				<figcaption onClick={handleOpen} className="descripcionProyecto">
          <h3>{obra.titulo}</h3>
          <p>{obra.tecnica}</p>
				</figcaption>
			</figure>

			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				/* sx={{width:{xs:'100%', md:'40%'}}} */
			>
				<Box sx={style}>
          <Grid 
            container 
            columnSpacing={{  sm: 2, md: 3 }}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item  xs={12} sm={6}>
              <img src={obra.image} className="fotoGaleriaAmpliada" alt="dibujo" />
            </Grid>
            <Grid item xs={12} sm={6} md={6} xl={6}>
              <div className='boxTextoModal'>
                <h3>{obra.titulo}</h3>
                <p>{obra.tecnica}</p>
                <h3>FORMATO</h3>
                <p>{obra.formato}</p>
                <h3>AUTOR</h3>
                <p>{obra.autor}</p>
                <h3>AÑO</h3>
                <p>{obra.year}</p>
              </div>
            </Grid>
          </Grid>
					
					{/* <Typography id="modal-modal-description" sx={{ mt: 1 }}>
          {obra.titulo}
					</Typography> */}
          
				</Box>
			</Modal>
		</>
	);
}