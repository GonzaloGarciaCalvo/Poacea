import { useState, useRef} from "react";
import { Grid, Container, Button, Modal } from "@mui/material";
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


    const addContacto = (e) => {
        e.preventDefault()
        setOpenModal(true)
    }
    const volverHome = () => {

        window.location.replace('')


    }
    return (
        <section>
            <div id="contacto" >
                <h1 className="tituloSeccion">CONTACTO</h1>
                <h3>Explícanos tu proyecto acá y te contestaremos <br/>en breve con una cotización a tu email</h3>
                <Grid>
                    <form name="contact"  className="form" ref={form} onSubmit={sendEmail}  >
                        <input type="hidden" name="form-name" value="contact" />
                        {/* <label>Nombre completo</label> */}
                        <input type="text" required placeholder="Ingresa tu nombre" name="user_name" />
                        {/* <label>Correo Electronico</label> */}
                        <input type="email" required placeholder="Ingresa tu correo electronico" name="user_email" />
                        {/* <label>Ingresa su mensaje</label> */}
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