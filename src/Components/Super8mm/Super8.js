import "./style/Super8.scss"
import {Link} from 'react-scroll'

const Super8 = () => {
 
    return (
        <div  className="super8Background">
            <div  id="super8" >
                    <h1 className="tituloSeccion">SÚPER 8MM</h1>
                    <video src="./super8_x264.mp4" width="100%" height="auto" controls allowFullScreen="allowFullScreen" preload="false"></video>
                    <div>
                        El Super 8mm es un formato de película de cine que antiguamente se usaba en los paseos familiares, cumpleaños, bodas y otros eventos. Luego de filmar los familiares, se enviaba a laboratorios para su posterior revelado. Al ser revelado, este se podía proyectar en el living de tu casa. Pero para todo ello, es de completa necesidad adquirir cámaras que hacen funcionar este material sensible. Y así, cada elemento dentro crea un recuerdo y las primeras formas de cine doméstico.
                        <br />
                        Detalles generales: A continuación se enlistan los procesos de servicio que Poacea Estudio entrega.
                        
                        Detalles específicos:
                        <ul>
                        <li>Reel del formato: Se muestra el video explicativo del servicio Poacea en formato Super 8mm.</li>
                        <li>Proceso de Filmación: Filmación del evento. Para ello, se usa la cámara filmadora de Super 8mm.</li>
                        <li>Proceso de Revelado: Consta de enrollar la o las películas filmadas en un tanque de revelado especial para la cantidad de metros de cada cartucho de Super 8mm (15 metros x cada cartucho).</li>
                        <li>Proceso de Digitalización: Al igual que en el proceso de revelado, es necesario que la película de 15 metros pase por un scanner específico para el formato Super 8mm.
                            Proceso de entrega: Para la elaboración de cada pieza, se entrega un carrete con la película en su respectiva caja.</li>
                        </ul>
                    </div>
                    
                    <Link to="contacto" spy={true} smooth={true} duration={500} className="contactButton super8Buttton">Contacto</Link>
                
            </div>
        </div>
    )

}

export default Super8