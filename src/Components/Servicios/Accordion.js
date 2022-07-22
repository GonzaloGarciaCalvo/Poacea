import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Grid from '@mui/material/Grid';
import {Link} from 'react-scroll'

const AccordionServicios = (props) => {
    const {img, titulo, nombre, descripcion} = props
    return (
        <>
            <Accordion disableGutters square>            
                <AccordionSummary
                    className='summary'
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >   
                    <div className='boxTituloServicio'>
                    <CameraAltIcon className="iconoCamara"/>   
                    <Typography className="nombreServicio"> 
                        {nombre} 
                    </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className='details'>
                    <Grid container direction="row">
                        <Grid item lg={3}> {/* {dar una ancho fijo a esta parte} */}
                            <img src={img} alt="imagen servicio" className='imgAcordion'></img>
                        </Grid>
                        <Grid item lg={9} className="boxDescripcionAcordion">
                                {/* <Typography className="tituloServicio">
                                    {titulo}
                                </Typography>
                                <Typography className="descripcion">
                                    {descripcion}
                                </Typography> */}
                            <div className='boxsuperior'>  
                                    <Typography className="tituloServicio">
                                        {titulo}
                                    </Typography>
                                <Typography className="descripcion">
                                    {descripcion}
                                </Typography>
                            </div>
                            {/* <Link to="contacto" spy={true} smooth={true} duration={500} className="contactButton serviceButton">Contacto</Link> */}
                            <div className='boxButton'>
                                <Link to="contacto" spy={true} smooth={true} duration={500} className="contactButton serviceButton">Contacto</Link>
                            </div>
                        </Grid>

                    </Grid>
                </AccordionDetails>
            </Accordion>
        </>
    )

}
export default AccordionServicios