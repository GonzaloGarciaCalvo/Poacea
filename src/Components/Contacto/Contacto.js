import { useState, } from "react";
import { Grid, Container, Button, Modal } from "@mui/material";
import "../Contacto/style/Contacto.scss"


const Contacto = () => {
    const [openModal, setOpenModal] = useState(false)


    const addContacto = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }
    const volverHome = () => {

        window.location.replace('')


    }
    return (
        <>
            <Container id="contacto" >
            <h1 className="tituloSeccion">CONTACTO</h1>
                <h3>Explícanos tu proyecto acá y te contestaremos <br/>en breve con una cotización a tu email</h3>
                <Grid>
                    <form name="contact" method="post" className="form" >
                        <input type="hidden" name="form-name" value="contact" />
                        <label>Nombre completo</label>
                        <input type="text" required placeholder="Ingresa tu nombre" name="name" />
                        <label>Correo Electronico</label>
                        <input type="email" required placeholder="Ingresa tu correo electronico" name="correo" />
                        <label>Ingresa su mensaje</label>
                        <textarea required placeholder="..." name="message" />
                        <Button type="submit" className="btnContacto" variant="contained" >Enviar</Button>
                    </form>
                </Grid>




            </Container>
            <Modal onClose={() => setOpenModal(false)} open={openModal}>
                <div className="envioForm">
                    <h4>Muchas gracias por contactarnos, a la brevedad le responderemos.</h4>
                    <Button className="btnVolver" onClick={volverHome}  >Volver</Button>
                </div>



            </Modal>

        </>

    )
}
export default Contacto