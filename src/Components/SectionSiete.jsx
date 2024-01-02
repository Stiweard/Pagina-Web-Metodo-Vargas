import imgUno from './Image/img-prueba-3.jpg'
import imgDos from './Image/unidad2.jpg'
import imgTres from './Image/img-sala2.jpg'
import imgCuatro from './Image/sala3-img.jpg'
import './Css/SectionSiete.css'

export default function SectionSiete() {
    return (
        <div>
            <section className="sectionDeRelleno">
                <div className="divContenedorRelleno">
                    <h1 className='titulo'>Nuestras Instalaciones</h1>
                </div>
            </section>

            <section className="ubicacion">
                <div className="contenedor-titulo-ubicacion">
                    <div className="contenedor-unbicacion-google-map">
                        <iframe
                            className="iframe-visita-virtual"
                            src="https://www.google.com/maps/embed?pb=!4v1667745422908!6m8!1m7!1sCAoSLEFGMVFpcE54YzNwVUtsZkJObXltakotcEQ2aTdOUUdmaXphQlRrRzA2OGc1!2m2!1d10.4635359!2d-66.841078!3f312.3783247207377!4f7.643808339531162!5f0.7820865974627469"
                            width="100%"
                            height="100%"
                            style={{ border: "0" }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                    <div className="contenedor-apartados-del-consultorio">
                        <div className="ubicacion-consultorio-1">
                            <img className="img-visita-virtual-1" src={imgUno} alt="" onClick={()=>{document.querySelector('.iframe-visita-virtual').src = 'https://www.google.com/maps/embed?pb=!4v1667745422908!6m8!1m7!1sCAoSLEFGMVFpcE54YzNwVUtsZkJObXltakotcEQ2aTdOUUdmaXphQlRrRzA2OGc1!2m2!1d10.4635359!2d-66.841078!3f312.3783247207377!4f7.643808339531162!5f0.7820865974627469'}} />
                        </div>
                        <div className="ubicacion-consultorio-2">
                            <img className="img-visita-virtual-2" src={imgDos} alt="" onClick={()=>{document.querySelector('.iframe-visita-virtual').src = 'https://www.google.com/maps/embed?pb=!4v1667745784238!6m8!1m7!1sCAoSLEFGMVFpcE1zakFYalZVcngtczZJTWl6bnVzZW95RmpkUng3MFR1SjZmZng1!2m2!1d10.4635158!2d-66.84108909999999!3f286.6746258285426!4f-13.807465887294626!5f0.7820865974627469'}} />
                        </div>
                        <div className="ubicacion-consultorio-3">
                            <img className="img-visita-virtual-3" src={imgTres} alt="" onClick={()=>{document.querySelector('.iframe-visita-virtual').src = 'https://www.google.com/maps/embed?pb=!4v1667747574519!6m8!1m7!1sCAoSLEFGMVFpcE1mSVhSQ2pmWmF2b1dLWW9RM2dJY1hnZ0t3UWU3UHFxMnRBZElH!2m2!1d10.4635459!2d-66.8411247!3f64.52505132346089!4f-27.58297841035268!5f0.7820865974627469'}} />
                        </div>
                        <div className="ubicacion-consultorio-4">
                            <img className="img-visita-virtual-4" src={imgCuatro} alt="" onClick={()=>{document.querySelector('.iframe-visita-virtual').src = 'https://www.google.com/maps/embed?pb=!4v1667746147877!6m8!1m7!1sCAoSLEFGMVFpcE16aENIQTcwaXp3TEEzdHFmZ1ZVLTQ1MFBLZWxVQzczZ0k2TkNY!2m2!1d10.4635142!2d-66.8411394!3f266.06745546739864!4f-21.038800093579383!5f0.7820865974627469'}} />
                        </div>
                    </div>
                </div>
            </section >
        </div >
    )
}
