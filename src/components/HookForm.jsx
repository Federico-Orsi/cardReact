import React from 'react';
import {useForm} from 'react-hook-form'
import Swal from 'sweetalert2';





const HookForm = () => {
    
    const {register, handleSubmit, reset} = useForm({

        defaultValues:{
            Edad: "Edad",
            Asistencia: "Asistencia",
            Menú: "Tipo de Menú",
        }
    });
    
    
    
    const enviar = (data) =>{
      
        console.log(data);
         
        if ((data.Edad != "Edad") && (data.Menú != "Tipo de Menú") && (data.Asistencia != "Asistencia")){
   

        fetch("https://formsubmit.co/ajax/federicoantonio.orsi@gmail.com",
         {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                Nombre: data.Nombre,
                Apellido: data.Apellido,
                email: data.email,
                Celular: data.Celular,
                Edad: data.Edad,
                Menu: data.Menú,
                Asistencia: data.Asistencia,
                mensajeParaNovios: data.mjeParaNovios,
            })
        })
            .then(response => response.json())
            .then(data => console.log(data))
           
          
            Swal.fire({
              icon: 'success',
              title: 'Gracias ' + data.Nombre + ', tus datos se enviaron correctamente a los Novios!!',
              // text: 'Ahora podes elegir tu Forma de Pago más Conveniente.',
              
            })
         
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

      


    
    return (
        <>
            <article className="posRelative-FO">
  <div id="divConfirmacion" className="text-center">
  <h5 id="h5Confirmacion">Confirmación</h5>
  <p>¡Tenemos muchas ganas de compartir este momento con vos! Te pedimos que completes este formulario cuanto antes para confirmar tu asistencia. La fecha límite es el 15 de octubre del 2022.</p>
  
  
  <form action="https://formsubmit.co/federicoantonio.orsi@gmail.com" onSubmit={handleSubmit(enviar)} method="POST">
  <input type="text" placeholder="Nombre" {...register("Nombre")} required className="text-center input input-bordered input-sm w-full max-w-xs mt-10" />
  <input type="text" placeholder="Apellido" {...register("Apellido")} className="text-center input input-bordered input-sm w-full max-w-xs mt-2" required />
  <input type="email" placeholder="e-mail" {...register("email")} required className="text-center input input-bordered input-sm w-full max-w-xs mt-2" />
  <input type="number" placeholder="Celular" {...register("Celular")} required className="text-center input input-bordered input-sm w-full max-w-xs mt-2" />
  <select   {...register("Edad")}  className="select-sm text-center select-bordered rounded-md m-auto w-full max-w-xs mt-2">
  <option disabled selected>Edad</option>
    <option>Adulto/a</option>
    <option>Niño/a</option>
    <option>Menor</option>
  </select>  
    
  <select  {...register("Menú")}  className="select-sm text-center select-bordered rounded-md m-auto w-full max-w-xs mt-2">
    <option disabled selected>Tipo de Menú</option>
    <option>Sin Preferencias</option>
    <option>Celíaco</option>
    <option>Vegetariano</option>
    <option>Vegano</option>
    <option>Intolerancia a la Lactosa</option>
  </select>
  
  <select {...register("Asistencia")} className="select-sm text-center select-bordered rounded-md m-auto w-full max-w-xs mt-2">
    
    <option disabled selected>Asistencia</option>
    <option>Asistiré</option>
    <option>No Asistiré</option>
  </select>
  

 <textarea {...register("mjeParaNovios")}  className="textarea hover:bg-black hover:text-white border-[1px] border-solid border-slate-700 textarea-ghost mt-8 ml-28" placeholder="Dale un mensaje a los Novios..."></textarea>
 <button id="botonSubmit" className='ml-28 mt-5 text-lg' type='submit'>Confirmar</button>
 </form> 
  </div>

  

<img id="imgFlorConfirmacion" width="800" height="930" src="https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-881x1024.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-881x1024.png 881w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-258x300.png 258w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-768x892.png 768w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-1322x1536.png 1322w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03-1762x2048.png 1762w, https://siacepto.ar/wp-content/uploads/2022/03/PLANTILLA-02-03.png 1808w" sizes="(max-width: 800px) 100vw, 800px"/>

</article>





        </>
    );
};

export default HookForm;