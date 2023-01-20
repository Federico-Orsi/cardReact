import React from 'react';
import Swal from 'sweetalert2';
import { useState } from 'react';
import Select from 'react-select';
import {useForm} from 'react-hook-form'

const Confirmacion = () => {
    
    const {reset} = useForm();


    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [celular, setCelular] = useState("");
    const [edad, setEdad] = useState("Edad");
    const [menu, setMenu] = useState("Tipo de Menú");
    const [asistencia, setAsistencia] = useState("Asistencia");
    const [mjeNovios, setMjeNovios] = useState("");


    const formulario = (e) =>{

    e.preventDefault(); 
    
    if ((edad != "Edad") && (menu != "Tipo de Menú") && (asistencia != "Asistencia")){

        fetch("https://formsubmit.co/ajax/federicoantonio.orsi@gmail.com",
         {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Nombre: nombre,
                Apellido: apellido,
                Email: email,
                Celular: celular,
                Edad: edad,
                Menu: menu,
                Asistencia: asistencia,
                mensajeParaNovios: mjeNovios,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
           
          
            Swal.fire({
              icon: 'success',
              title: 'Gracias ' + nombre + ', tus datos se enviaron correctamente a los Novios!!',
              // text: 'Ahora podes elegir tu Forma de Pago más Conveniente.',
              
            })
         
            setNombre("");
            setApellido("");
            setCelular("");
            setEmail("");
            setEdad("");
            
            
            setAsistencia("");
            setMenu("");
            console.log(edad);
            console.log(menu);
            reset();
          }
          else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor debes elegir una Opción en todos los Campos Seleccionables. Gracias!!',
                
              })
              
          }
      
 }   


 const edadOptions = [
    {label:"Adulto/a", value:"Adulto/a"},
    {label:"Niño/a", value:"Niño/a"},
    {label:"Menor", value:"Menor"},
 ]

   const handlerEdad = ({value}) =>{

    setEdad(value);
    
   }
    
   const menuOptions = [
    {label:"Sin Preferencias", value:"Sin Preferencias"},
    {label:"Vegetariano", value:"Vegetariano"},
    {label:"Vegano", value:"Vegano"},
    {label:"Celíaco", value:"Celíaco"},
    {label:"Intolerancia a la Lactosa", value:"Intolerancia a la Lactosa"},
 ]

   const handlerMenu = ({value}) =>{

    setMenu(value);
    
   }  
    
   const asistenciaOptions = [
    {label:"Asistiré", value:"Asistiré"},
    {label:"No Asistiré", value:"No Asistiré"},
    
 ]

   const handlerAsistencia = ({value}) =>{

    setAsistencia(value);
    
   }  
    
   
   return (
        <>

        
            <article className="posRelative-FO">
  <div id="divConfirmacion" className="text-center">
  <h5 id="h5Confirmacion">Confirmación</h5>
  <p>¡Tenemos muchas ganas de compartir este momento con vos! Te pedimos que completes este formulario cuanto antes para confirmar tu asistencia. La fecha límite es el 15 de octubre del 2022.</p>
  
  
  <form action="https://formsubmit.co/federicoantonio.orsi@gmail.com" onSubmit={formulario} method="POST">
  <input type="text" placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} required className="text-center input input-bordered input-sm w-full max-w-xs mt-10" />
  <input type="text" placeholder="Apellido" value={apellido} onChange={e => setApellido(e.target.value)} className="text-center input input-bordered input-sm w-full max-w-xs mt-2" required />
  <input type="email" placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)} required className="text-center input input-bordered input-sm w-full max-w-xs mt-2" />
  <input type="number" placeholder="Celular" value={celular} onChange={e => setCelular(e.target.value)} required className="text-center input input-bordered input-sm w-full max-w-xs mt-2" />
  <Select options={edadOptions} defaultValue={{label:"Edad", value:"Edad"}} onChange={handlerEdad} className="m-auto w-full max-w-xs mt-2"/>
  <Select options={menuOptions} defaultValue={{label:"Tipo de Menú", value:"Tipo de Menú"}} onChange={handlerMenu} className="m-auto w-full max-w-xs mt-2"/>
  <Select options={asistenciaOptions}  defaultValue={{label:"Asistencia", value:"Asistencia"}} onChange={handlerAsistencia} className="m-auto w-full max-w-xs mt-2"/>
  
  

<textarea value={mjeNovios} onChange={e => setMjeNovios(e.target.value)} className="textarea hover:bg-black hover:text-white border-[1px] border-solid border-slate-700 textarea-ghost mt-8 ml-28" placeholder="Dale un mensaje a los Novios..."></textarea>
<button id="botonSubmit" className='ml-28 mt-5 text-lg' type="submit">Confirmar</button>
</form> 
  </div>

  

<img id="imgFlorConfirmacion" width="800" height="930" src="https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-881x1024.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-881x1024.png 881w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-258x300.png 258w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-768x892.png 768w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-1322x1536.png 1322w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-1762x2048.png 1762w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03.png 1808w" sizes="(max-width: 800px) 100vw, 800px"/>

</article>

        </>
    );
};

export default Confirmacion;