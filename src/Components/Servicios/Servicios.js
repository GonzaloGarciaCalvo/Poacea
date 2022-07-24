import "./style/Servicios.scss"
import serv from "./servicios.json"
import AccordionServicios from "./Accordion";

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
                            id={producto.id}
                            className="accordionServicios"
                        />)
                    })
                    
                }
            </div>
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