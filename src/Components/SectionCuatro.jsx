import './Css/SectionCuatro.css'

export default function SectionCuatro() {

    return (
        <section className="ubicacion">
            <div className="div-mapa-de-google">
                <div className="mapa">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15693.878523177029!2d-66.841106!3d10.4635952!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1d48e1f982cf1049!2sUnidad%20Epigen%C3%A9tica%20Vargas%20(M%C3%A9todoVargas)!5e0!3m2!1ses!2sve!4v1664750529808!5m2!1ses!2sve"
                        width="100%" height="100%" style={{ border: "0" }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </section>
    )
}
