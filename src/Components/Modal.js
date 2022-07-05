import * as React from 'react';
import Box from '@mui/material/Box';
/* import Button from '@mui/material/Button'; */
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
   width: {xs:'95%', md:'30%', xl:'25%', xxl:'30%'}, 
  /*maxWidth:'100%', */
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 0,
  p: 1,
  outline: 'none',
};

export default function BasicModal({imgUrl}) {

  let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches; //verifica si cumple condicion
  /* let ancho = window.innerWidth;  ancho de la pantalla en px, no sirve*/
  /* console.log("ancho, ", ancho) */
  const [open, setOpen] = React.useState(false);
  /* const handleOpen = () =>if (ancho > 600) setOpen(true); */
  const handleOpen = () => { 
    if (!isMobile) {
      /* (ancho > 200) {*/
      setOpen(true);
      console.log("pantalla en true")
  }  else {console.log("no es movil")};
  }
  const handleClose = () => setOpen(false);


  return (
    
    <>
      <img src={imgUrl} onClick={handleOpen} className='fotoGaleria' alt="dibujo"/>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        /* sx={{width:{xs:'100%', md:'40%'}}} */
      >
        <Box sx={style}>
          <img src={imgUrl}  className='fotoGaleriaAmpliada' alt="dibujo"/>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            Duis mollis, est no
          </Typography>
        </Box>
      </Modal>
    
    </>
  );
}