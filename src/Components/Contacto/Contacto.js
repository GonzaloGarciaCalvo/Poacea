import { useState, useRef} from "react";
import { Grid, Button, Modal } from "@mui/material";
import "../Contacto/style/Contacto.scss"
import emailjs from '@emailjs/browser';


const Contacto = () => {
    const [openModal, setOpenModal] = useState(false)

    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7i15h5p', 'template_2hsynle', form.current, 'yqDBror8_hTAX0mCP')
      .then((result) => {
        console.log(result.text);
        setOpenModal(true)
      }, (error) => {
          console.log(error.text);
      });
      
  };


    const volverHome = () => {
        window.location.replace('')
    }
    return (
        <section>
            <div id="contacto" >
                <h1 className="tituloSeccion">CONTACTO</h1>
                <h2>Explícanos tu proyecto acá y te contestaremos <br/>en breve con una cotización a tu email</h2>
                <Grid>
                    <form name="contact"  className="form" ref={form} onSubmit={sendEmail}  >
                        <input type="hidden" name="form-name" value="contact" />
                        <input type="text" required placeholder="Ingresa tu nombre" id="nombre" name="nombre" />
                        <input type="email" required placeholder="Ingresa tu correo electronico" id="email" name="email" />
                        <textarea required placeholder="Describe tu proyecto aquí" id="mensaje" name="mensaje" />
                        <Button type="submit" className="btnContacto" name="button" id="button" variant="contained" >Enviar</Button>
                    </form>
                </Grid>

            </div>
            <Modal onClose={() => setOpenModal(false)} open={openModal}>
                <div className="envioForm">
                    <h3>Muchas gracias por contactarnos, a la brevedad le responderemos.</h3>
                    <Button className="btnVolver" onClick={volverHome}  >Volver</Button>
                </div>
            </Modal>

        </section>

    )
}
export default Contacto