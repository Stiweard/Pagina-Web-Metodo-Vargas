import './Css/SectionSeis.css'

export default function ImgCard({img,Nombre, descripcionUno, descripcionDos, descripcionTres, descripcionCuatro, descripcionCinco}) {
    return (
        <div className="EquipoPersona">
            <img src={img} alt="" className='imgGabo' />
            <div>
            <p className='Pbold'>
                {Nombre}
            </p>
            <p>
                {descripcionUno}
            </p>
            <p>
            {descripcionDos}
            </p>
            <p>
            {descripcionTres}
            </p>
            <p>
            {descripcionCuatro}
            </p>
            <p>
            {descripcionCinco}
            </p>
            </div>
        </div>
    )
}
