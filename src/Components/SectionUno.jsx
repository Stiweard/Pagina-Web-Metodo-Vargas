import './Css/SectionUno.css'
import imgUno from './Image/photo_2023-03-29_15-01-05.jpg'
import imgDos from './Image/photo_2023-03-08_10-39-21.jpg'
import imgTres from './Image/juli.png'
import imgCuatro from './Image/photo_2022-12-06_12-33-12.jpg'
import imgCinco from './Image/photo_2023-03-29_14-47-21.jpg'
import imgSeis from './Image/_Q3A2233.jpg'
import imgSiete from './Image/photo_2023-03-29_15-00-55.jpg'
import imgOcho from './Image/Dra-Maria.png'
import imgIcoUno from './Image/Proposito-Icon.svg'
import imgIcoDos from './Image/Vision-Icon.svg'
import imgIcoTres from './Image/Mision-Icon.svg'
import Carrusel from '../Components/Carrusel'

export default function SectionUno() {
    
    return (

        <section className="sectionDosUno">
            <div className="contenidoSectionDos">
                <div className="imgContenedorSectionDos">
                    <div className="duivsegunodlesrtr">
                        <h2 className='Titulo'>Pioneros en nuestro procedimiento</h2>
                        <p>Más 1500 pacientes alrededor del mundo que han tenido cambios drásticos y positivos.</p>
                    </div>
                </div>
                <div className="divImgDelospacDos">

                    <div className="dicimgDso">
                        <img src={imgUno} alt="" style={{ height: 'auto' }} />
                    </div>
                    <div className="dicimgDso1">
                        <img src={imgDos} style={{ objectFit: 'cover', width: '350px' }} alt="" />
                        <img src={imgTres} style={{ objectFit: "contain", width: "350px", height: "auto" }} alt="" />
                    </div>
                    <div className="dicimgDso">
                        <img src={imgCuatro} alt="" style={{ height: "auto" }} />
                    </div>
                    <div className="dicimgDso1">
                        <img src={imgCinco} alt="" style={{ width: "330px", height: "auto" }} />
                        <img src={imgSeis} alt="" style={{ width: "330px", height: "auto" }} />
                    </div>
                    <div className="dicimgDso">
                        <img src={imgSiete} alt="" style={{ height: "auto" }} />
                    </div>
                    <div className="dicimgDso">
                        <img src={imgOcho} alt="" style={{ height: "auto" }} />
                    </div>
                </div>
                <Carrusel />
                <div className="dicvontendordosdedescriopnp">
                    <p>Comprometidos con la evolución progresiva de nuestros pacientes, garantizando
                        un asesoramiento y seguimiento de calidad para alcanzar una vida sana
                    </p>
                </div>
                <div className="divflexcuatrosdedescricion">
                    <div className="cotedertidfedecuadaroican">
                        <img src={imgIcoUno} alt="" />
                        <div className="contendoirDesP">
                            <h2 className='Titulo'>Propósito</h2>
                            <p>Generar una mejor
                                calidad de vida
                            </p>
                        </div>
                    </div>
                    <div className="cotedertidfedecuadaroican">
                        <img src={imgIcoDos} alt="" />
                        <div className="contendoirDesP">
                            <h2 className='Titulo'>Visión</h2>
                            <p>Proveer una solución global
                                libre de cirugías al síndrome
                                metabólico y sus derivados
                            </p>
                        </div>
                    </div>
                    <div className="cotedertidfedecuadaroican">
                        <img src={imgIcoTres} alt="" />
                        <div className="contendoirDesP">
                            <h2 className='Titulo'>Misión</h2>
                            <p>Ser la opción número
                                01 en el manejo de la
                                obesidad
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
