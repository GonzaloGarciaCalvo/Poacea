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
  width: 400,
  maxWidth:'100%',
  bgcolor: 'background.paper',
  border: '0px solid #000',
  boxShadow: 0,
  p: 4,
  outline: 'none',
};

export default function BasicModal({imgUrl}) {

  let ancho = window.innerWidth;
  console.log("ancho, ", ancho)
  const [open, setOpen] = React.useState(false);
  /* const handleOpen = () =>if (ancho > 600) setOpen(true); */
  const handleOpen = () => { if (ancho > 600) setOpen(true)};
  const handleClose = () => setOpen(false);

 

  return (
    
    <>
      <img src={imgUrl} onClick={handleOpen} className='fotoGaleria' alt="dibujo"/>
      <Modal
        open={open}
        onClose={handleClose}
        /* aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description" */

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