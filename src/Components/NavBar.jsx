import { NavLink } from 'react-router-dom'
import './Css/NavBar.css'
import img from './Image/logo-metodo-vargas.png'
import { FaUserAlt,FaSignInAlt } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
// import LoginUser from '../Components/LoginUser'
import { useState } from 'react';
import '../Components/Css/login.css'


export default function NavBar() {
    let arrayInfoBasica1 = []
    const [isExpanded1, setIsExpanded1] = useState(false);
    const handleToggle1 = () => { setIsExpanded1(!isExpanded1); };
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const [nombre, setNombre] = useState(" ");




    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                className={({ isActive }) => {
                                    isActive ? document.querySelector('.title').textContent = 'Método Vargas | Inicio' : '';
                                }}
                                to='/'>
                                <img src={img} alt="Logo Método Vargas" />
                            </NavLink>

                        </li>
                        <li className='estiloDecoracionheader'>
                            <NavLink
                                className={({ isActive }) => {
                                    isActive ? document.querySelector('.title').textContent = 'Método Vargas | Inicio' : '';
                                }}
                                to='/'>Inicio
                            </NavLink>
                        </li>
                        <li className='estiloDecoracionheader'>
                            <NavLink
                                className={({ isActive }) => {
                                    isActive ? document.querySelector('.title').textContent = 'Método Vargas | Nosotros' : '';
                                }}
                                to='/Nosotros'>Nosotros
                            </NavLink>
                        </li>
                        <li className='estiloDecoracionheader'>
                            <NavLink
                                className={({ isActive }) => {
                                    isActive ? document.querySelector('.title').textContent = 'Método Vargas | Modúlo' : '';
                                }}
                                to='/Modulo'>Módulo
                            </NavLink>
                        </li>
                        <li className='estiloDecoracionheader'>
                            <NavLink
                                className={({ isActive }) => {
                                    isActive ? document.querySelector('.title').textContent = 'Método Vargas | Faq' : '';
                                }}
                                to='/Faq'>FAQ
                            </NavLink>
                        </li>
                        <li className='estiloDecoracionheader'>
                            <NavLink
                                className={({ isActive }) => {
                                    isActive ? document.querySelector('.title').textContent = 'Método Vargas | Gastroenterología' : '';
                                }}
                                to='/Gastroenterologia'>Gastroenterología
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <NavLink
                        style={{
                            fontSize: '1em',
                        }}
                                className={({ isActive }) => {
                                    isActive ? document.querySelector('.title').textContent = 'Método Vargas | Gastroenterología' : '';
                                }}
                                to='/AplicacionesWebMetodoVargas'><FaSignInAlt />
                            </NavLink>
                            
                        </li>
                    </ul>
                </nav>
            </header >
            <div className={isExpanded1 ? "contenedor-1" : "contenedor-1 hidden"}>
            </div>


            <div className="navResponsiveContainer">
                <FaBars className='Icon' onClick={() => {
                    document.querySelector('.navResponsive').style.display = 'block'
                    document.querySelector('.Icon').style.display = 'none'
                    document.querySelector('.IconUno').style.display = 'block'
                }} />
                <FaTimes className='IconUno' style={{ display: 'none' }} onClick={() => {
                    document.querySelector('.navResponsive').style.display = 'none'
                    document.querySelector('.Icon').style.display = 'block'
                    document.querySelector('.IconUno').style.display = 'none'

                }} />

                <div className="navResponsive">
                    <nav>
                        <ul>
                            <li>
                                <NavLink
                                    className={({ isActive }) => {
                                        isActive ? document.querySelector('.title').textContent = 'Método Vargas | Inicio' : '';

                                    }} onClick={() => {
                                        document.querySelector('.navResponsive').style.display = 'none'
                                        document.querySelector('.Icon').style.display = 'block'
                                        document.querySelector('.IconUno').style.display = 'none'
                                    }}
                                    to='/'>
                                    <img src={img} alt="Logo Método Vargas" />
                                </NavLink>

                            </li>
                            <li className='estiloDecoracionheader'>
                                <NavLink
                                    className={({ isActive }) => {
                                        isActive ? document.querySelector('.title').textContent = 'Método Vargas | Inicio' : '';

                                    }}
                                    onClick={() => {
                                        document.querySelector('.navResponsive').style.display = 'none'
                                        document.querySelector('.Icon').style.display = 'block'
                                        document.querySelector('.IconUno').style.display = 'none'
                                    }}
                                    to='/'>Inicio
                                </NavLink>
                            </li>
                            <li className='estiloDecoracionheader'>
                                <NavLink
                                    className={({ isActive }) => {
                                        isActive ? document.querySelector('.title').textContent = 'Método Vargas | Nosotros' : '';

                                    }}
                                    onClick={() => {
                                        document.querySelector('.navResponsive').style.display = 'none'
                                        document.querySelector('.Icon').style.display = 'block'
                                        document.querySelector('.IconUno').style.display = 'none'
                                    }}
                                    to='/Nosotros'>Nosotros
                                </NavLink>
                            </li>
                            <li className='estiloDecoracionheader'>
                                <NavLink
                                    className={({ isActive }) => {
                                        isActive ? document.querySelector('.title').textContent = 'Método Vargas | Modúlo' : '';

                                    }}
                                    onClick={() => {
                                        document.querySelector('.navResponsive').style.display = 'none'
                                        document.querySelector('.Icon').style.display = 'block'
                                        document.querySelector('.IconUno').style.display = 'none'
                                    }}
                                    to='/Modulo'>Módulo
                                </NavLink>
                            </li>
                            <li className='estiloDecoracionheader'>
                                <NavLink
                                    className={({ isActive }) => {
                                        isActive ? document.querySelector('.title').textContent = 'Método Vargas | Faq' : '';

                                    }}
                                    onClick={() => {
                                        document.querySelector('.navResponsive').style.display = 'none'
                                        document.querySelector('.Icon').style.display = 'block'
                                        document.querySelector('.IconUno').style.display = 'none'
                                    }}
                                    to='/Faq'>FAQ
                                </NavLink>
                            </li>
                            <li className='estiloDecoracionheader'>
                                <NavLink
                                    className={({ isActive }) => {
                                        isActive ? document.querySelector('.title').textContent = 'Método Vargas | Gastroenterología' : '';

                                    }}
                                    onClick={() => {
                                        document.querySelector('.navResponsive').style.display = 'none'
                                        document.querySelector('.Icon').style.display = 'block'
                                        document.querySelector('.IconUno').style.display = 'none'
                                    }}
                                    to='/Gastroenterologia'>Gastroenterología
                                </NavLink>
                            </li>
                            <li>
                        <NavLink
                                className={({ isActive }) => {
                                    isActive ? document.querySelector('.title').textContent = 'Método Vargas | Gastroenterología' : '';
                                }}
                                onClick={() => {
                                    document.querySelector('.navResponsive').style.display = 'none'
                                    document.querySelector('.Icon').style.display = 'block'
                                    document.querySelector('.IconUno').style.display = 'none'
                                }}
                                to='/AplicacionesWebMetodoVargas'><FaSignInAlt  style={{
                                    fontSize: '4em',
                                    position: 'relative'
                                }} />
                            </NavLink>
                            
                        </li>
                        </ul>
                    </nav>

                </div>
            </div>
        </>
    )
}
