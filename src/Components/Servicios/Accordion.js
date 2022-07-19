import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Grig from '@mui/material/Grid'
import Grid from '@mui/material/Grid';

const AccordionServicios = (props) => {
    const {img, titulo, nombre, descripcion} = props
    return (
        <>
            <Accordion disableGutters square>            
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >   
                    <Typography className="nombreServicio"> 
                        <CameraAltIcon className="iconoCamara"/> {nombre} 
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Grid container direction="row">
                        <Grid item lg={3}>
                            <img src={img} alt="imagen servicio"></img>
                        </Grid>
                        <Grid item lg={9}>
                            <Typography className="tituloServicio">
                                {titulo}
                            </Typography>
                            <Typography className="descripcion">
                                {descripcion}
                            </Typography>
                        </Grid>

                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    )

}
export default AccordionServicios