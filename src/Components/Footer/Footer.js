import { Container } from "@mui/material";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowCircleUpOutlinedIcon from '@mui/icons-material/ArrowCircleUpOutlined';
import {Link} from 'react-scroll';
import Grid from "@mui/material/Grid";
import "./style/Footer.scss"

const Footer = () => {
    return (
        <footer>
            <Grid className="footer">
                <div className="boxFooter">
                    <div className="logoFooter">
                        <img src="./images/ESTUDIO1footer.png" alt="logo Poacea"/>
                    </div>
                    <div className="boxRedes">
                        <div className="redes">
                            <a href="https://wa.me/+56997773406" target="_blank" rel="noreferrer">
                                <WhatsAppIcon />

                            </a>
                            <a href='https://www.instagram.com/ppoaceaa/' target="_blank"  rel="noreferrer">
                                <InstagramIcon />

                            </a>
                            <a href='mailto:info@poacea.cl' target="_blank" rel="noreferrer">
                                <EmailIcon />

                            </a>
                            <a href="https://www.google.com/maps/place/Poacea/@-33.4651534,-70.6228493,15z/data=!4m5!3m4!1s0x0:0x7ed4d3e71c40a1d!8m2!3d-33.4651534!4d-70.6228493?hl=es-419" target="_blank" rel="noreferrer"><LocationOnIcon /></a>
                        </div>
                        <div className="copyRight">
                            <p>Estudio de dibujo y cinematografía trabaja en formatos análogos y sus distintas
                                mediaciones hacia lo digital, dejando a disposición nuestro estilo visual para el desarrollo de proyectos que requieran de este lenguaje.
                            </p>
                            <p> Copyright  ©  2022. POACEA.</p>
                        </div>
                    </div>
                    <div className="boxArrow">
                        <Link to="top" smooth='true'>
                            {/* <img src="../../images/upload.png" className="upArrow"></img> */}
                            <ArrowCircleUpOutlinedIcon color="white" sx={{color:"white", fontSize:"8em"}} />
                        </Link>
                        {/* <svg src="./images/upArrow.svg" alt="icono ir arriba" className="upArrow" ></svg> */}
                        {/* <img src="../../images/upload.png" className="upArrow"></img> */}
                    </div>

                </div>
            </Grid>
        </footer>
    )
}

export default Footer