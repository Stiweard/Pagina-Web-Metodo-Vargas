import './Css/SectionCinco.css'
import img from './Image/img-video.png'
import imagen from './Image/ppc.png'

export default function () {
    return (
        <div>
            <section className="sectionDeRelleno">
                <div className="divContenedorRelleno">
                    <h1 className='titulo'>¿Qué es Método Vargas?</h1>
                </div>
            </section>

            <section className="sectionDos">
                <div className="contenidoSectionDos">
                    <div className="contenedorFlexdos">
                        <div className="contendeorPDosDiv">
                            <p>Es un abordaje multidisciplinario que incluye un
                                estudio exhaustivo de patologías y comorbilidades
                                asociadas al síndrome metabólico a través de
                                laboratorio, elastografía y ecografía; y nuestra técnica
                                endoscópica para eliminar selectivamente células productoras
                                de ghrelina, generadoras de apetito, especialmente
                                de dulces y harinas, por medio de una
                                ligadura mucosa gástrica de tipo ambulatoria.
                            </p>
                        </div>
                        <div className="contendeorPDosDiv">
                            <p> Esta, en conjunto con un especialista en
                                nutrición, un coach físico y asesoría psicológica
                                y emocional están dirigidos a abordar de forma específica e individualmente cada paciente
                                a través de nuestras herramientas de alta tecnología: la App Método Vargas creada y
                                desarrollada
                                por nuestro equipo de expertos, interconectada con una balanza y smartwatch, y un equipo
                                de seguimiento online 24/7 monitorizaremos su progreso hasta alcanzar su meta
                                de manera saludable disminuyendo grasa corporal sin masa muscular.
                            </p>
                        </div>
                    </div>
                    <div className="contenediorVideocontendo">
                        <img src={img} alt="" />
                    </div>
                </div>
            </section>
            <section className="sectionTres" style={{backgroundImage:`linear-gradient(0deg, #0007, #0007),url(${imagen})`}}>
                <div className="contendifoDivcTres">
                    <h2 className='titulo'>Perdida de Peso Controlada</h2>
                    <p>La pérdida de peso es progresiva y controlada gracias a que el establecimiento de la meta inicial
                        es individualizado por la especialista en nutrición y el coach físico a fin de que la pérdida de
                        peso
                        sea a expensas de grasa corporal sin pérdida de masa muscular, siempre haciendo los ajustes
                        necesarios en cada fase y según la evolución del caso que se esté estudiando.
                    </p>

                    <p> De igual manera, se estima que la pérdida de grasa corporal diaria es de aproximadamente 100g, y de
                        2,8kg
                        mensuales, por lo que permitimos que la piel se adapte a este nuevo volumen corporal y no se formen
                        pliegues redundantes
                    </p>
                </div>
            </section>
        </div>
    )
}
