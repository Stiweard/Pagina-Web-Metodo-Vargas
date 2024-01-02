import Portada from '../Components/Portada'
import imgFondo from '../Components/Image/edv.png'
import SectionOcho from '../Components/SectionOcho'

export default function Modulo() {
    return (
        <div>
            <Portada
                titulo={'Estilo de Vida'}
                descripcion={'Un discernimiento inteligente permite que nuestro proceso sea agradable y creativo y favorece el que su máquina corporal esté en óptimas condiciones de salud.'}
                imagenFondo={imgFondo}
            />
            <SectionOcho/>
        </div>
    )
}

