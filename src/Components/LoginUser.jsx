// import React, { useState } from "react";
// import '../Components/Css/login.css'

// export default function LoginUser() {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [message, setMessage] = useState("");

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const options = {
//             mode: "cors",
//             credentials: 'include',
//             headers: {
//                 'Content-Type': 'application/json',
//                 device: "unique_device",
//             },
//             method: 'POST',
//             body: JSON.stringify({
//                 "AUTENTIFICADOR": email,
//                 "CONTRASENA": password
//             })
//         };

//         try {
//             const response = await fetch("https://api.metodovargas.app/patients/v1/login/", options);
//             const result = await response.json();

//             if (result.message == undefined) {
//                 setMessage("Bienvenido");
//                 GetData(result)
//                 window.localStorage.setItem('Correo', email);
//                 window.localStorage.setItem('Clave', password);
//             } else {
//                 setMessage(result.message);
//             }
//         } catch (error) {
//             console.error(error);
//             setMessage("Ha ocurrido un error, inténtelo más tarde");

//             setTimeout(() => {
//                 window.location.reload();
//             }, 2000);
//         }


//         async function GetData(token) {

//             const headers = {
//                 'Content-Type': 'application/json',
//                 device: "unique_device",
//                 access: token
//             };

//             const requestOptions = {
//                 mode: "cors",
//                 credentials: 'include',
//                 headers: headers,
//                 redirect: 'follow'
//             };
//             const optionsGeneral = {
//                 ...requestOptions,
//                 method: 'GET'
//             };


//             let arrayInfoBasica1 = []

//             const fetchData = async (url, options, array) => {
//                 try {
//                     const response = await fetch(url, options);
//                     const data = await response.json();
//                     console.log(data);
//                     array.push(data);
//                 } catch (err) {
//                     console.log(err);
//                 }
//             };

//             try {
//                 await fetchData('https://api.metodovargas.app/patients/v1/patient/', optionsGeneral, arrayInfoBasica1);
//             } catch (err) {
//                 console.log(err);
//             }
//             console.log(arrayInfoBasica1)
//         }
//     };




//     return (
        
//     );
// }


