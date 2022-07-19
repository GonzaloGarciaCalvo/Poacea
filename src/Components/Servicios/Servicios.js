import "./style/Servicios.scss"
/* import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'; */
import serv from "./servicios.json"
import AccordionServicios from "./Accordion";
import Grid from '@mui/material/Grid';
import Container from "@mui/material/Container"
/* import BasicModal from "../Modal" */

const  Servicios= () => {
    
    
    
    return (
        
        <div id="servicios">
            <h1 className="tituloSeccion">PRODUCTOS <br/> Y SERVICIOS</h1>
            <div className="boxAccordion">
                {   
                    serv.map((producto) => {
                        
                        return (
                        <AccordionServicios 
                            key={producto.id}
                            nombre={producto.nombre}
                            descripcion={producto.descripcion}
                            titulo={producto.titulo}
                            img={producto.img}
                            className={(producto.id===2 || producto.id===4)? "sinBorde":"" }
                        />)
                    })
                    
                }
            </div>
        {/* <Grid   className='boxFotosServicios' >
            <Grid item xs={12} sm={6} md={3}>
                <img className="fotoServicios" src="../../images/servicios/digitalizado.jpg" alt="digitalizado"/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="fotoServicios" src="../../images/servicios/filmacionceremonias.jpg" alt="digitalizado"/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="fotoServicios" src="../../images/servicios/fotografiaenmarcado.jpeg" alt="digitalizado"/>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <img className="fotoServicios" src="../../images/servicios/retratointrospectivo.jpg" alt="digitalizado"/>
            </Grid>
		</Grid> */}
        </div>










        
        // <div>
        //     <Accordion>
        //         <AccordionSummary
        //             expandIcon={<ExpandMoreIcon />}
        //             aria-controls="panel1a-content"
        //             id="panel1a-header"
        //         >
        //             <Typography>DIBUJOS Y FOTOGRÁFIAS ENMARCADOS </Typography>
        //         </AccordionSummary>
        //         <AccordionDetails>
        //             <Typography>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        //                 malesuada lacus ex, sit amet blandit leo lobortis eget.
        //             </Typography>
        //         </AccordionDetails>
        //     </Accordion>
        //     <Accordion>
        //         <AccordionSummary
        //             expandIcon={<ExpandMoreIcon />}
        //             aria-controls="panel2a-content"
        //             id="panel2a-header"
        //         >
        //             <Typography>RETRATO INSTROSPECTIVO</Typography>
        //         </AccordionSummary>
        //         <AccordionDetails>
        //             <Typography>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        //                 malesuada lacus ex, sit amet blandit leo lobortis eget.
        //             </Typography>
        //         </AccordionDetails>
        //     </Accordion>
        //     <Accordion disabled>
        //         <AccordionSummary
        //             expandIcon={<ExpandMoreIcon />}
        //             aria-controls="panel3a-content"
        //             id="panel3a-header"
        //         >
        //             <Typography>Disabled Accordion</Typography>
        //         </AccordionSummary>
        //     </Accordion>
        // </div>
    );
}

export default Servicios