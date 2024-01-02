import img from './Image/logo-metodo-vargas.png'
import './Css/SectionDos.css'
import imgUno from './Image/img-index.png'
import imgDos from './Image/Clipboard.svg'
import imgTres from './Image/endoscope.svg'
import imgCuatro from './Image/units.png'
import imgCinco from './Image/monitoreo.png'
import imgFondo from './Image/Fondo-website.png'
import video from './Video/descripcion-mas-extensa-de-metodo-vargas.mp4'
import React, { useState, useEffect,useRef  } from 'react';


export default function SectionDos() {
    const [count, setCount] = useState(0);
    const totalCount = 1500;
    const increment = totalCount / 500; // ajusta la velocidad de incremento según tus necesidades
    const targetRef = useRef(null);

    useEffect(() => {

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Define el porcentaje de visibilidad en el que el observer se disparará
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const interval = setInterval(() => {
                        if (count < totalCount) {
                            setCount((prevCount) => {
                                const newCount = prevCount + increment;
                                return newCount >= totalCount ? totalCount : newCount;
                            });
                        } else {
                            clearInterval(interval);
                        }
                    }, 100);
                }
            });
        }, [count, totalCount, increment]);

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        return () => {
            if (observer && observer.disconnect) {
                observer.disconnect();
            }
        };
    }, [count, totalCount, increment]);

    return (
        <section className="sectioCuatro" style={{ backgroundImage: `url(${imgFondo})` }}>
            <div className="contenidoSectionCuatro">
                <div className="imgContenedorSectionCuatro">
                    <div className="divcuatrocarruselcuatro">
                        <div className="divcuatrop">
                            <p className="slide-right">7 Min Ambulatorio</p>
                            <img src={img} className="slide-right-one" style={{ width: "150px", position: "absolute" }} alt="" />
                        </div>
                        <div className="divcuatrop">
                            <p className="slide-right">Sin Complicaciones</p>
                            <img src={img} className="slide-right-one" style={{ width: "150px", position: "absolute" }} alt="" />
                        </div>
                        <div className="divcuatrop">
                            <p className="slide-right">No hay molestias</p>
                            <img src={img} className="slide-right-one" style={{ width: "150px", position: "absolute" }} alt="" />
                        </div>
                        <div className="divcuatrop">
                            <p className="slide-right">Sin Efectos Secundarios</p>
                            <img src={img} className="slide-right-one" style={{ width: "150px", position: "absolute" }} alt="" />
                        </div>
                        <div className="divcuatrop">
                            <p className="slide-right">Reparación de órganos dañados</p>
                            <img src={img} className="slide-right-one" style={{ width: "150px", position: "absolute" }} alt="" />
                        </div>
                        <div className="divcuatrop">
                            <p className="slide-right">Disminuye el deseo de comer </p>
                            <img src={img} className="slide-right-one" style={{ width: "150px", position: "absolute" }} alt="" />
                        </div>
                        <div className="divcuatrop">
                            <p className="slide-right">Saciedad Temprana</p>
                            <img src={img} className="slide-right-one" style={{ width: "150px", position: "absolute" }} alt="" />
                        </div>
                        <div className="divcuatrop">
                            <p className="slide-right">Disminuye el deseo de comer harinas y dulces</p>
                            <img src={img} className="slide-right-one" style={{ width: "150px", position: "absolute" }} alt="" />
                        </div>
                    </div>
                </div>

        <div ref={targetRef} className="divcontenddocnetercuatro">
            <div className="divflexcuatrocontendoro">
                <div className="divflexcuatrocontendoroDCi">
                <video src={video} controls></video>
                            <img src={imgUno} alt="" />
                </div>
                <div className="divConetedorIcondescripion">
                    <div className="divimgIcon">
                    <img src={imgDos} alt="" />

                        <div className="divcuartoflexprocedimientos">
                            <h3>{Math.floor(count)}</h3>
                            <p>Procedimientos realizados</p>
                        </div>
                    </div>
                    <div className="divimgIcon">
                    <img src={imgTres} alt="" />

                        <div className="divcuartoflexprocedimientos">
                            <h3>{Math.floor(count / 214)}</h3>
                            <p>Años operando</p>
                        </div>
                    </div>
                    <div className="divimgIcon">
                    <img src={imgCuatro} alt="" />
                        <div className="divcuartoflexprocedimientos">
                            <h3>{Math.floor(count / 375)}</h3>
                            <p>Unidades modelo</p>
                        </div>
                    </div>
                    <div className="divimgIcon">
                    <img src={imgCinco} alt="" />

                        <div className="divcuartoflexprocedimientos">
                            <h3>{Math.floor(count / 1.875)}</h3>
                            <p>Pacientes en monitoreo</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


            </div>

        </section>
    )
}
