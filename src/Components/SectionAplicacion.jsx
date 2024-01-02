import BoxImg from './BoxImg'
import imgUno from './Image/Boton-de-Entrenamiento.png'
import imgDos from './Image/Boton-de-Nutricion.png'
import imgTres from './Image/Boton-de-Emociones.png'
import imgCelular from './Image/celular.png'
import imgIcon from './Image/whatsapp.png'
import videoApp from './Video/App-Metodo-Vargas.mp4'
import { Link } from 'react-router-dom';
import './Css/SectionOcho.css'

export default function SectionOcho() {
    return (
        <div>
            <section class="sectionDeRelleno">
                <div class="divContenedorRelleno">
                    <h1 className='titulo'>Aplicaciones</h1>
                </div>
            </section>

            <section class="sectiontres">
                <div class="contendoflextres">
                    <div class="contenedorSectionTres">
                        <div class="contenedorContenedifoTres">
                            <div class="divContendiDescripcionTres1">
                                <h2 className='titulo'>Administrador</h2>
                                <p>La versión administrador del "Método Vargas" es una plataforma de gestión integral diseñada para profesionales de la salud y administradores. Ofrece un panel de control intuitivo que permite supervisar y analizar los datos de múltiples pacientes con obesidad de manera eficiente. Con funciones avanzadas de seguimiento, generación de informes y personalización de planes, los administradores pueden adaptar el enfoque del tratamiento según las necesidades individuales de cada paciente. Además, la versión administrador facilita la comunicación fluida entre los profesionales de la salud y los pacientes, lo que optimiza la atención y el apoyo en tiempo real.
                                </p>
                                <button

                                    className="custom-btn btn-16"><Link to="https://elmetodovargas.com/Documentos/loginAppWebAdmin.html" target="_blank" style={{ textDecoration: "none", color: "#fff" }}>
                                        Ingresar administrador
                                    </Link></button>
                            </div>
                            <div class="divContendiDescripcionTres1">
                                <h2 className='titulo'>Paciente</h2>
                                <p>La versión paciente del "Método Vargas" es una aplicación centrada en el bienestar individual. Diseñada para ayudar a las personas con obesidad a lograr sus objetivos de pérdida de peso de manera sostenible, ofrece herramientas prácticas y recursos personalizados. A través de seguimiento de la ingesta de alimentos, planificación de ejercicios, recordatorios de medicación, acceso a consejos de expertos y una comunidad de apoyo, la versión paciente brinda a los usuarios el apoyo necesario para tomar decisiones informadas sobre su salud. Fomenta un enfoque holístico hacia la pérdida de peso, alentando hábitos positivos y empoderando a los pacientes en su viaje hacia una vida más saludable.
                                </p>
                                <button

                                    className="custom-btn btn-16"><Link to={"https://patientapp.elmetodovargas.com/login"} style={{ textDecoration: "none", color: "#fff" }}>Ingresar a paciente</Link></button>
                            </div>
                        </div>
                        <div class="divTresImg">
                            <video src={videoApp} controls></video>
                            <img src={imgCelular} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
