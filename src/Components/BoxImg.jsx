import './Css/SectionOcho.css'

export default function BoxImg({ titulo, img }) {
    return (
        <div class="imgContenDos">
            <h3 className='titulo'>{titulo}</h3>
            <div style={{
                backgroundImage: `url(${img})`, height: '300px',
                width: '500px',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                margin:"5px"
            }}>

            </div>
        </div>
    )
}
