import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CameraAltIcon from '@mui/icons-material/CameraAlt';

const AccordionServicios = (props) => {
    const {nombre, descripcion} = props
    return (
        <>
            <Accordion disableGutters square>            
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >   
                    <Typography className="nombreServicio"> <CameraAltIcon className="iconoCamara"/> {nombre} </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography className="descripcion">
                        {descripcion}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )

}
export default AccordionServicios