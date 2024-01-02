import Portada from '../Components/Portada'
import SectionUno from '../Components/SectionUno'
import SectionDos from '../Components/SectionDos'
import SectionTres from '../Components/SectionTres'
import SectionCuatro from '../Components/SectionCuatro'
import imgFondo from '../Components/Image/Banner-Principal.png'


export default function Inicio() {
    return (
        <div>
            <Portada 
            titulo={'Ligadura Mucosa Gástrica'} 
            descripcion={'Procedimiento endoscópico de alta tecnología para manejo síndrome metabólico, problemas de sobrepeso, obesidad y derivados.'}
            imagenFondo={imgFondo}
            />
            <SectionUno/>
            <SectionDos/>
            <SectionTres/>
            <SectionCuatro/>
        </div>
    )
}
