import { Container } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import "./style/Footer.scss"
const Footer = () => {
    return (
        <>
            <Container className="footer">
                <div className="boxFooter">
                    <div className="logoFooter">
                        <img src="./images/ESTUDIO1footer.png" />
                    </div>
                    <div className="boxRedes">
                        <div className="redes">
                            <a href="https://wa.me/+56997773406" target="_blank">
                                <WhatsAppIcon />

                            </a>
                            <a href='https://www.instagram.com/ppoaceaa/' target="_blank">
                                <InstagramIcon />

                            </a>
                            <a href='mailto:info@poacea.cl' target="_blank">
                                <EmailIcon />

                            </a>
                            <a href="https://www.google.com/maps/place/Poacea/@-33.4651534,-70.6228493,15z/data=!4m5!3m4!1s0x0:0x7ed4d3e71c40a1d!8m2!3d-33.4651534!4d-70.6228493?hl=es-419" target="_blank"><LocationOnIcon /></a>
                        </div>
                        <div className="copyRight">
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda libero rerum itaque? Alias architecto officia minima saepe, amet quibusdam hic odit corrupti sequi? Voluptates expedita corporis rerum? Aut, accusantium accusamus.
                            </p>
                            <h5> Copyright  ©  2022. POACEA.</h5>
                        </div>
                    </div>
                </div>

            </Container>

        </>
    )
}

export default Footer