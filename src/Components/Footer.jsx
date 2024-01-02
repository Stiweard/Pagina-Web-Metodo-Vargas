import { Link } from 'react-router-dom';
import './Css/Footer.css'
import { FaFacebook, FaTwitter, FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelopeOpen } from "react-icons/fa";


export default function Footer() {
    return (
        <footer className="footer-section">
            <div className="div-contenedor-ubicacion-telefono-gmail">
                <div className="div-ubicacion UTG">
                    <FaMapMarkerAlt />
                    <div className="div-informacion-ubicacion iutg">
                        <p className="tituloutg">Ubicación</p>
                        <p className="contenido-utg">Piso 7, Torre plaza III, Urb. Santa Paula, Consultorio 701, Caracas 1061, Miranda</p>
                    </div>
                </div>
                <div className="div-telefono UTG">
                    <FaPhone />
                    <div className="div-informacion-telefono iutg">
                        <p className="tituloutg">Telefono</p>
                        <p className="contenido-utg">+584142242017</p>
                    </div>
                </div>
                <div className="div-gmail UTG">
                    <FaEnvelopeOpen />
                    <div className="div-informacion-gmail iutg">
                        <p className="tituloutg">gmail</p>
                        <p className="contenido-utg">epigeneticavargas@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className="contenedor-logo-enlaces-estilo-de-vida">
                <div className="div-logo-metodo-vargas">
                    <div className="contenedor-logo">
                        <p className="logo-metodo">Método</p>
                        <p className="logo-vargas">Vargas</p>
                    </div>
                    <div className="div-contenido-logo">
                        <p className="logo-contenido">En el Método Vargas, creemos en un enfoque moderno, sencillo y eficaz para ayudarle a perder peso de manera segura y efectiva. Pero no nos detenemos allí: también brindamos una guía personalizada para ayudar a nuestros pacientes a mantenerse en su peso ideal una vez finalizado el procedimiento. Nuestro método se enfoca en encontrar el equilibrio adecuado entre la alimentación saludable y la actividad física, mientras que también se adaptan a las necesidades individuales de cada paciente. De esta manera, no solo le ayudamos a perder peso de manera efectiva, sino que también le brindamos las herramientas para mantener su nueva y saludable forma de vida a largo plazo.
                            Confíe en el Método Vargas para alcanzar sus objetivos de pérdida de peso de manera segura y duradera</p>
                    </div>
                </div>
            </div>
            <div className="div-redes-sociales">
                <div className="div-titulo redes sociales">
                    <p className='tituloen'>Siguenos</p>
                </div>
                <div className="div-iconos-redes-sociales">
                    <Link to={"https://www.facebook.com/metodovargasve"}><FaFacebook className='fa-facebook' /></Link>
                    <Link to={"https://www.twitter.com/metodovargas"}><FaTwitter className='fa-twitter' /></Link>
                    <Link to={"https://www.instagram.com/metodovargas/"}><FaInstagram className='fa-instagram' /></Link>
                    <Link to={"https://api.whatsapp.com/send?phone=584142242017 "}><FaWhatsapp className='fa-whatsapp' /></Link>
                </div>
            </div>
            <div className="div-copy-righ">
                <p id="copyright-footer"><Link to={"/PoliticasCodiciones"} style={{ textDecoration: "none", color: "#fff" }}>© 2022 Todos Los Derechos Reservados. Gastrometabolic Vargas, C.A</Link></p>
                <a href={'https://elmetodovargas.com/Documentos/terminos-y-condiciones.html'} style={{
                                    textDecoration: 'none',
                                    color: '#4cd3f2'
                                }}> Términos y condicones</a>
            </div>

        </footer>
    )
}
