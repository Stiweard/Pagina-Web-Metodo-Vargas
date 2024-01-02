import Portada from '../Components/Portada'
import imgFondo from '../Components/Image/FAQ-Banner.png'
import SectionNueve from '../Components/SectionNueve'

export default function Faq() {
    return (
        <div>
            <Portada
                titulo={'Preguntas Frecuentes'}
                descripcion={'¿Tienes alguna consulta o inquietud ? Contacte a nuestro equipo de asesoramiento'}
                imagenFondo={imgFondo}
            />
            <SectionNueve/>
        </div>
    )
}
