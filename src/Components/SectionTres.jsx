// import './Css/SectionTres.css'
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import PacienteUno from '../Components/Image/Pacientes-02.png'
import PacienteDos from '../Components/Image/Pacientes_Duberlys-Espinoza-16,3-en-13-meses.png'
import PacienteTres from '../Components/Image/Pacientes_Gladis-Quiroja-27,45kg-en-1-ano.png'
import PacienteCuatro from '../Components/Image/Pacientes_Isabel-Pabon-26,3kg-en-1-ano.png'
import PacienteCinco from '../Components/Image/Pacientes_Joselyn-Peres-16-kg-en-1-ano.png'
import PacienteSeis from '../Components/Image/Pacientes_Julia-Infante-18kg-en-1-ano.png'
import PacienteSiete from '../Components/Image/Pacientes_Linora-Pernia-34-kg-en-1-ano-y-3 meses.png'
import PacienteOcho from '../Components/Image/Pacientes_Maja-de-Wakil-43-kg-en-11-meses.png'
import PacienteNueve from '../Components/Image/Pacientes_Maytte-Milla-7,4-kg-en-3-meses.png'
import PacienteDies from '../Components/Image/Pacientes_Monica-Perez-23,2-en-1-ano-y-4-meses.png'
import PacienteOnce from '../Components/Image/Pacientes_Nathaly-de-Altuve-16,5-en-7-meses.png'
import PacienteDoce from '../Components/Image/Pacientes_Pedro-Galindez-27,4-kg-en-6-meses.png'
import PacienteTrece from '../Components/Image/Pacientes_Yulis-Molero-10,2-kg-en-2-meses.png'
import PacienteCatorce from '../Components/Image/Pacientes_Zachenka-Lopez-15,2-kg-en-10-meses.png'

import '../../node_modules/swiper/swiper.css';
import '../../node_modules/swiper/modules/pagination/pagination.min.css';
import '../../node_modules/swiper/modules/navigation/navigation.min.css';
import '../Components/Css/stylecarrusedos.css';
import '../Components/Css/carruselDos.css';

import { Autoplay, Pagination, Navigation } from 'swiper';

export default function SectionTres() {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}                  
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
                speed={1000}
            >

                <SwiperSlide>
                    <div style={{
                        position: 'relative'
                    }}>
                        <img src={PacienteUno} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}></p></div>
                    </div>
                    <div style={{
                        position: 'relative'
                    }}>
                        <img src={PacienteDos} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Duberlys Espinoza</span> - 16,3 en 13 meses</p></div>
                    </div>
                    <div style={{
                            position: 'relative'
                        }}>
                            <img src={PacienteTres} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Gladis Quiroja</span> - 27,45kg en 1 año</p></div>
                        </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{
                        position: 'relative'
                    }}>
                        <img src={PacienteCuatro} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Isabel Pabón</span> - 26,3kg en 1 año </p></div>
                    </div>
                <div style={{ position: 'relative' }}>
                        <img src={PacienteCinco} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Joselyn Peres</span> - 16 kg en 1 año </p></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={PacienteSeis} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Julia Infante</span> - 18kg en 1 año </p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{ position: 'relative' }}>
                        <img src={PacienteSiete} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Linora Pernía</span> - 34 kg en 1 año y 3 meses</p></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={PacienteOcho} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Maja de Wakil</span> - 43 kg en 11 meses</p></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={PacienteNueve} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Maytte Milla</span> - 7,4 kg en 3 meses</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{ position: 'relative' }}>
                        <img src={PacienteDies} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>MónicaPerez -</span> 23,2 en 1 año y 4 meses</p></div>
                    </div>
                <div style={{ position: 'relative' }}>
                        <img src={PacienteOnce} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Nathaly de Altuve</span> - 16,5 en 7 meses</p></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={PacienteDoce} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Pedro Galindez</span> - 27,4 kg en 6 meses</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div style={{ position: 'relative' }}>
                        <img src={PacienteTrece} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Yulis Molero</span> - 10,2 kg en 2 meses</p></div>
                    </div>
                    <div style={{ position: 'relative' }}>
                        <img src={PacienteCatorce} alt="" /><div className='DivDelcarrusel'><p className='PDic' style={{ maxWidth: '80%' }}><span style={{ fontSize: '1.5em' }}>Zachenka Lopez</span> - 15,2 kg en 10 meses</p></div>
                    </div>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </>
    );
}



// Import Swiper styles

// import required modules

{/* <SwiperSlide>/SwiperSlide>
                            <SwiperSlide>
                            <SwiperSlide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                            </SwiperSlide>
                            <SwiperS
                            lide>
                    </SwiperSlide> */}
