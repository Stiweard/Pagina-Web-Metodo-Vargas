import Portada from '../Components/Portada'
import imgFondo from '../Components/Image/endoscopio.png'
import SectionCinco from '../Components/SectionCinco'
import SectionSeis from '../Components/SectionSeis'
import SectionSiete from '../Components/SectionSiete'
import '../Components/Css/Responsive.css'
export default function Faq() {
    return (
        <div>
            <Portada
                titulo={'Tome Decisiones Inteligentes'}
                descripcion={'Libérese del exceso de grasa corporal sin perder masa muscular Modifícamos su plan para que se mantenga sano en su peso ideal.'}
                imagenFondo={imgFondo}
            />
            <SectionCinco />
            <SectionSeis />
            <SectionSiete />
        </div>
    )
}
