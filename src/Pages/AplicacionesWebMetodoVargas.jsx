import Portada from '../Components/Portada'
import imgFondo from '../Components/Image/edv.png'
import SectionAplicacion from '../Components/SectionAplicacion'

export default function Modulo() {
    return (
        <div>
            <Portada
                titulo={'Aplicación Método Vargas'}
                descripcion={'"Método Vargas" es una aplicación de seguimiento especialmente diseñada para pacientes que desean mejorar su salud y alcanzar un peso óptimo. Esta aplicación ofrece una combinación de herramientas personalizadas y recursos para ayudar a los usuarios a adoptar un enfoque integral hacia la gestión de su peso.'}
                imagenFondo={imgFondo}
            />
            <SectionAplicacion/>
        </div>
    )
}

