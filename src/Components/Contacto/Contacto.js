import { useState, } from "react";
import { Grid, Button, Modal } from "@mui/material";
import "../Contacto/style/Contacto.scss"


const Contacto = () => {
    const [openModal, setOpenModal] = useState(false)


    const volverHome = () => {
        window.location.replace('')
    }
    return (
        <section>
            <div id="contacto" >
                <h1 className="tituloSeccion">CONTACTO</h1>
                <h3>Explícanos tu proyecto acá y te contestaremos <br/>en breve con una cotización a tu email</h3>
                <Grid>
                    <form name="contact"  className="form" method="POST" action="/formulario.php"  >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" required placeholder="Ingresa tu nombre" name="name" />
                        <input type="email" required placeholder="Ingresa tu correo electronico" name="correo" />
                        <textarea required placeholder="Describe tu proyecto aquí" name="message" />
                        <Button type="submit" className="btnContacto" name="button" id="button" variant="contained" >Enviar</Button>
                    </form>
                </Grid>

            </div>
            <Modal onClose={() => setOpenModal(false)} open={openModal}>
                <div className="envioForm">
                    <h4>Muchas gracias por contactarnos, a la brevedad le responderemos.</h4>
                    <Button className="btnVolver" onClick={volverHome}  >Volver</Button>
                </div>
            </Modal>

        </section>

    )
}
export default Contacto