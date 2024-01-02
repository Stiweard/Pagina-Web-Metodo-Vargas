import '../Components/Css/SectionNueve.css'
import '../Components/Css/titulo.css'
import Portada from '../Components/Portada'
import imgFondo from '../Components/Image/Endosc.png'
import imgGas1 from '../Components/Image/imgGastroentelogia1.jpg'
import imgGas2 from '../Components/Image/imgGastroentelogia2.jpg'
import imgGas3 from '../Components/Image/imgGastroentelogia3.jpg'
import imgGas4 from '../Components/Image/imgGastroentelogia4.jpg'
import { Link } from 'react-router-dom';

export default function Gastroenterogia() {

    return (
        <>
            <Portada
                titulo={'Gastroenterología'}
                descripcion={''}
                imagenFondo={imgFondo}
            />
            <section className="sectionDeEnlace">
                <div className="contenedordivEnalce frame">
                    <button className="custom-btn btn-16">
                        <Link to={"https://api.whatsapp.com/send?phone=584142242017"} style={{ textDecoration: "none", color: "#fff" }}>Agenda tu cita</Link>
                    </button>
                </div>
            </section>
            <section className="sectionDos" style={{
                paddingBottom: '30vh'
            }}>
                <div className="contenidoSectionDos" style={{
                    maxWidth: "none"
                }}>
                    <div className="divContenidoSectionDos" style={{
                        width: "100%", display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div className="separarimg">
                            <p style={{
                                fontSize: '1.5em',
                                maxWidth: '1500px',
                                lineHeight: '1.1em'
                            }}>Contamos con un servicio en el área de gastroenterología para el manejo diagnóstico
                                y terapéutico de patologías frecuentes como reflujo gastroesofágico, ulcera péptica,
                                gastropatía por helycobacter pylori, dispepsia, duodenopatias, colon irritable, colopatías,
                                diverticulosis y diverticulitis, enfermedad inflamatoria intestinal, patología hemorroidal,
                                fisura anal, y patologías más complejas como la disfagia orofaríngea y esofágica,
                                hemorragias digestivas superior, inferior, y del intestino medio, enfermedad de Crohn,
                                colitis ulcerativa.
                            </p>
                        </div>
                    </div>
                    <div className="divContenidoSectionDos" style={{
                        width: "100%", display: 'flex',
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <div className="separarimg">
                            <p style={{
                                fontSize: '1.5em',
                                maxWidth: '1500px',
                                lineHeight: '1.1em'
                            }}>Así como también endoscopias diagnósticas y terapéuticas con equipos de doble canal,
                                ERBE, Argón Plasma para procedimientos de microcirugía endoscópicos de alta precisión
                                que lo ameriten, colocación de gastrostomías, dilataciones, resecciones mucosas
                                y submucosas de lesiones neoplásicas in situ  y de sospecha, contando con técnica de
                                cromoendoscopia virtual como el FICE.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divContenidoSectionDos" style={{ width: "100%" }}>
                    <div className="separarimg">
                        <h2 style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Nuestros Servicios
                        </h2>
                    </div>
                    <div style={{
                        display: 'flex',
                        padding: '25px',
                        flexWrap: 'wrap',
                        width: '100%',
                        justifyContent: 'space-evenly'
                    }}>
                        <div style={{
                            display: 'flex',
                            gap: '20px 0',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div className="separarimg" >
                                <h2 className='titulo' style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Consultra Gastroenterológica
                                </h2>
                            </div>
                            <div className="separarimg" >
                                <h2 className='titulo' style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Ecosonografía
                                </h2>
                            </div>
                            <div className="separarimg">
                                <h2 className='titulo'style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Endoscopias Digestivas
                                </h2>
                            </div>
                            <div className="separarimg" >
                                <h2 className='titulo' style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Tiroidea
                                </h2>
                            </div>
                        </div>
                        <div style={{
                            display: 'flex',
                            gap: '20px 0',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}>
                            <div className="separarimg" >
                                <h2 className='titulo' style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Colonoscopia
                                </h2>
                            </div>
                            <div className="separarimg" >
                                <h2 className='titulo' style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Abdominal
                                </h2>
                            </div>
                            <div className="separarimg" >
                                <h2 className='titulo' style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Gastroscopia
                                </h2>
                            </div>
                            <div className="separarimg" >
                                <h2 className='titulo' style={{
                                padding: '15px',
                                fontSize: '2em'
                            }}>Pélvica
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
            <div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '25px'
                }}>
                    <div>
                        <img style={{
                            width: '300px',
                            position: 'relative',
                            top: '-215px'
                        }} src={imgGas1} alt="" />
                    </div>
                    <div>
                        <img style={{
                            width: '300px'
                        }} src={imgGas2} alt="" />
                    </div>
                    <div>
                        <img style={{
                            width: '300px',
                            position: 'relative',
                            top: '-215px'
                        }} src={imgGas3} alt="" />
                    </div>
                    <div>
                        <img style={{
                            width: '300px'
                        }} src={imgGas4} alt="" />
                    </div>
                </div>
            </div>

        </>
    )
}
