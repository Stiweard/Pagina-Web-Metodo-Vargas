import './Css/SectionNueve.css'
import imgUno from './Image/Pilares-de-nuestro-metodo.png'
import imgDos from './Image/modelo-liga-real.png'
import imgTres from './Image/bypass.png'
import imgCuatro from './Image/mgg.png'
import imgCinco from './Image/Balon.png'
import imgSeis from './Image/Saxenda.png'
import imgSiete from './Image/image-PhotoRoom.png-PhotoRoom.png'
import { Link } from 'react-router-dom';

export default function SectionNueve() {
    return (
        <div>
            <section className="sectionDeEnlace">
                <div className="contenedordivEnalce frame">
                    <button

                        className="custom-btn btn-16"><Link to={"https://api.whatsapp.com/send?phone=584142242017"} style={{textDecoration:"none", color:"#fff"}}>Asesoramiento</Link></button>
                </div>
            </section>

            <section className="sectionDos">
                <div className="contenidoSectionDos" style={{maxWidth:"none"}}>
                    <div className="divContenidoSectionDos" style={{width:"100%"}}>
                        <div className="separarimg">
                            <h2>¿Es sólo una ligadura mucosa y ya?</h2>
                            <p>No, es un abordaje multidisciplinario, el cual incluye
                                detección, prevención y tratamiento de endocrinopatías,
                                hepatopatías, apnea del sueño, patologías y comorbilidades
                                asociadas al síndrome metabólico, asociado al uso de
                                oligoelementos y minerales que nos permitan, en conjunto
                                con nuestra especialista en nutrición y coach físico
                                enseñar un estilo de vida saludable que se mantenga en el tiempo que no sólo permita
                                alcanzar y mantener la meta pautada sino prolongar los años de vida de nuestros pacientes.
                            </p>
                        </div>
                        <img className="faqimg1" src={imgUno} alt="" />
                    </div>
                    <div className="divContenidoSectionDos" style={{width:"100%"}}>
                        <div className="separarimg">
                            <h2>¿Cómo es el procedimiento de ligadura mucosa? </h2>
                            <p>Es similar a una gastroscopia, que tiene una duración de aproximadamente 7 minutos, donde se
                                realiza
                                una ligadura de la mucosa gástrica, específicamente del fundus gástrico,
                                por medio de unas pinzas que pasan a través del canal
                                de trabajo del endoscopio, tomando un pliegue de la misma.
                                Este pliegue contiene células productoras de ghrelina,
                                la cual es una hormona responsable de generar apetito,
                                particularmente por alimentos ricos en hidratos de carbono
                                y azúcares refinados.

                                Este procedimiento, es rápido, ambulatorio no tiene complicaciones, se hace bajo
                                una sedación suave, breve y de recuperación inmediata.
                            </p>
                        </div>
                        <img className="faqimg2" src={imgDos} alt="" />
                    </div>
                    <div className="divContenidoSectionDos" style={{width:"100%"}}>
                        <div className="separarimg">
                            <h2>¿Una persona que se hizo un bypass gástrico
                                o manga gástrica se puede realizar este procedimiento?
                            </h2>
                            <p>Sí, y con buenos resultados. Siempre y cuando cumpla el plan
                                indicado por nuestros especialistas.
                            </p>
                        </div>
                        <div className="divimgfaq">
                            <img className="faqimg3" src={imgTres} alt="" />
                            <img className="faqimg4" src={imgCuatro} alt="" />
                        </div>
                    </div>
                    <div className="divContenidoSectionDos" style={{width:"100%"}}>
                        <div className="separarimg">
                            <h2>¿Una persona que se inyectó Liraglutide o Semaglutide
                                o que se colocó balón gástrico puede realizarse este procedimiento?
                            </h2>
                            <p>Sí, y con buenos resultados. Siempre y cuando cumpla el plan
                                indicado por nuestros especialistas
                            </p>
                        </div>
                        <div className="divimgfaq">
                            <img className="faqimg5" src={imgCinco} alt="" />
                            <img className="faqimg6" src={imgSeis} alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <section className="sectionTres">
                <div className="contenedorDivSectionTres">
                    <div className="divContenSectiontresP" style={{width:"100%"}}>
                        <p>**Adicionalmente sumamos a nuestra experiencia la herramienta
                            de un test genómico nutricional de nueva generación, que
                            con gran precisión analiza a través de una muestra de saliva el ADN,
                            determinando las variaciones genéticas para comprender
                            como debe alimentarse cada persona para mantener
                            su cuerpo sano por dentro y por fuera.
                        </p>
                    </div>
                    <div className="divImgSectiontres">
                        <img src={imgSiete} alt="" />
                    </div>
                </div>
            </section>
        </div>
    )
}
