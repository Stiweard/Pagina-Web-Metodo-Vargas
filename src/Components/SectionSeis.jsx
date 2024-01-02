import ImgCard from './ImgCard'
import imgUno from './Image/doc-redondo.png'
import imgDos from './Image/Mafer.png'
import imgTres from './Image/Bilbao.png'
import imgCuatro from './Image/Amneris.png'
import imgCinco from './Image/Gabo.jpg'
import imgSeis from './Image/jul.png'
import imgSiete from './Image/conchi.png'
import imgOcho from './Image/Rosi.png'
import imgNueve from './Image/Enilda.png'
import imgDies from './Image/jenny.png'
import imgOnce from './Image/Mari.png'
import imgDoce from './Image/Berinna-Briceno-Nutricionista.png'

export default function SectionSeis() {
    return (
        <section className="sectioCuatro">
            <div className="contendifoDivcCuatro">
                <div className="contenedorCuatroTitulo">
                    <h2 style={{color:"#fff"}}>Nuestro Equipo</h2>
                </div>
                <div className="contenedorflexCuatro">
                    <div className="contendorImgEcquipodseDoctores">
                    <ImgCard 
                    img={imgUno}
                    Nombre={'Dr. Fernando Vargas'}
                    descripcionUno={"Fundador"}
                    descripcionDos={"Gastroenterólogo"}
                    descripcionTres={"Internista"}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />
                    <ImgCard 
                    img={imgDos}
                    Nombre={'Dra. Mª Fernanda Vargas'}
                    descripcionUno={"Cirujano General"}
                    descripcionDos={"Laparoscopista"}
                    descripcionTres={"Endoscopista"}
                    descripcionCuatro={"Obesólogo"}
                    descripcionCinco={"Ecografista"}
                    />
                    <ImgCard 
                    img={imgTres}
                    Nombre={'Dra. Maria Gloria Bilbao'}
                    descripcionUno={"Médico General"}
                    descripcionDos={"Gastroenterólogo"}
                    descripcionTres={""}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />
                    <ImgCard 
                    img={imgCuatro}
                    Nombre={''}
                    descripcionUno={""}
                    descripcionDos={""}
                    descripcionTres={""}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />
                    <ImgCard 
                    img={imgCinco}
                    Nombre={'Gabriel De Sousa'}
                    descripcionUno={"Psicólogo"}
                    descripcionDos={""}
                    descripcionTres={""}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />

                    <ImgCard 
                    img={imgSeis}
                    Nombre={'Julice Parra'}
                    descripcionUno={"Coach"}
                    descripcionDos={""}
                    descripcionTres={""}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />
                    <ImgCard 
                    img={imgSiete}
                    Nombre={'María de Abreu'}
                    descripcionUno={"Nutricionista"}
                    descripcionDos={""}
                    descripcionTres={""}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />
                    <ImgCard 
                    img={imgOcho}
                    Nombre={'Rosibel Hernandez'}
                    descripcionUno={"Enfermería"}
                    descripcionDos={"Emergenciología"}
                    descripcionTres={"Nefrología"}
                    descripcionCuatro={"Medicina Ocupacional"}
                    descripcionCinco={""}
                    />
                    <ImgCard 
                    img={imgNueve}
                    Nombre={'Enilda Leal'}
                    descripcionUno={"Enfermería"}
                    descripcionDos={"Médico quirúrgico"}
                    descripcionTres={"Pediatría"}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />

                    <ImgCard 
                    img={imgDies}
                    Nombre={'Jenny Contreras'}
                    descripcionUno={"Enfermería"}
                    descripcionDos={"Asistencia Ultrasonido y Pesaje"}
                    descripcionTres={""}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />

                    <ImgCard 
                    img={imgOnce}
                    Nombre={'Maribel  Delgado'}
                    descripcionUno={"Enfermería"}
                    descripcionDos={"oncología"}
                    descripcionTres={""}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />
                    <ImgCard 
                    img={imgDoce}
                    Nombre={'Berinna Briceño'}
                    descripcionUno={"Nutricionista"}
                    descripcionDos={""}
                    descripcionTres={""}
                    descripcionCuatro={""}
                    descripcionCinco={""}
                    />



                    </div>
                </div>
            </div>
        </section>

    )
}
