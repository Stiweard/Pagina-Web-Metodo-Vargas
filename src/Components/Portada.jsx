import React from 'react'
import './Css/Portada.css'

export default function Portada({titulo, descripcion, imagenFondo}) {
    return (
        <section 
        className="sectionUno"
        style={{backgroundImage: `linear-gradient(0deg, #0007, #0007), url(${imagenFondo})`}}
        >
            <div 
            className="contenidoSectionUno"
            >
                <div 
                className="divContenedorContenidoSectionUno"
                >
                    <h1>
                        {titulo}
                    </h1>
                    <p>
                        {descripcion}
                    </p>
                </div>

            </div>
        </section>
    )
}
