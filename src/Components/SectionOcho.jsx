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
                    <h1 className='titulo'>Módulos</h1>
                </div>
            </section>

            <section class="sectionDos">
                <div class="divContenetedorSectionDos">
                    <div class="divDosContenedorImg">
                        <BoxImg
                        titulo={'Entrenamiento'}
                        img={imgUno}
                        />
                        
                        <BoxImg
                        titulo={'Nutrición'}
                        img={imgDos}
                        />
                        
                        <BoxImg
                        titulo={'Apoyo Emocional'}
                        img={imgTres}
                        />
                        
                        
                    </div>
                    <div class="divContenedorP">
                        <p>
                        </p>
                    </div>
                </div>
                <div class="contenidoImgflexTres">
                    <div class="divContenedorIMgCoontenDos">
                        <div class="divContenedidos">
                            <div class="descripciondos">
                                <h3 className='titulo'>Entrenamiento:</h3>
                                <p>Desarrollamos una línea de rutinas de entrenamiento
                                    enfocadas en la pérdida de grasa. y adaptadas a sus
                                    necesidades físicas, de tiempo y ubicacion con herramientas
                                    deportivas de fácil uso y movilización con el apoyo de
                                    nuestra coach a nivel digital y presencial
                                </p>
                            </div>
                            <div class="descripciondos">
                                <h3 className='titulo'>Nutrición:</h3>
                                <p>Nos enfocamos en guiar a nuestros pacientes a
                                    alcanzar una perdida de peso saludable a través
                                    de planes de alimentación personalizados y deliciosos
                                </p>
                            </div>
                            <div class="descripciondos">
                                <h3 className='titulo'>Apoyo emocional:</h3>
                                <p>Damos apoyo a nuestros pacientes, que presentan una situación,
                                    conflicto o desequilibrio emocional cualquier área
                                    de su vida.
                                    Identificando la raíz del problema que aflige su salud y ha derivado en obesidad.
                                    Te ayudamos a reconectar y reconocer tus emociones a fin de
                                    simplificar no solo el proceso pérdida de peso sino a reconocerte y construir tu
                                    mejor versión.
                                </p>
                            </div>
                            <div class="divPDosfinal">
                                <p>Te esperamos para acompañarte en tu proceso.
                                </p>
                            </div>
                        </div>
                        <div class="divContenedorImgDos">
                            <img src={imgCelular} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section class="sectiontres">
                <div class="contendoflextres">
                    <div class="contenedorSectionTres">
                        <div class="contenedorContenedifoTres">
                            <div class="divContendiDescripcionTres">
                                <h2 className='titulo'>Efectividad</h2>
                                <p>En el 97% hay una tasa de éxito en cuanto a
                                    la sensación de saciedad, y el 3% se reconocen
                                    factores asociados a endocrinopatías que
                                    deberán ser tratados por nuestros especialistas,
                                    y otros casos que ameritan un manejo de la
                                    ansiedad, abordados a profundidad con
                                    asesoramiento psicológico para alcanzar el objetivo.
                                </p>
                            </div>
                            <div class="divContendiDescripcionTres">
                                <h2 className='titulo'>Seguimiento</h2>
                                <p>Nuestro seguimiento semanal:
                                    via online (whatsapp y App metodovargas)
                                    y presenciales según requiera el caso.

                                    Trimestrales para ecografía y elastografia
                                </p>
                            </div>
                            <div class="divContendiDescripcionTresImg">
                                <img class="whatsappImg" src={imgIcon}alt="" />
                                <Link to={"https://api.whatsapp.com/send?phone=584142242017"}><img src={imgIcon} alt="" /></Link>
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
