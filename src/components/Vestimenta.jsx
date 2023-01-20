import React from 'react';
import { useState } from 'react';
import womanImg from '../img/elegante-sport-woman.jpg';
import womenImg from '../img/elegante-sport-women.jpg';
import manImg from '../img/elegante-sportHombre.jpg';
import menImg from '../img/elegante-sportHombres.jpg';

const Vestimenta = () => {
    
    
    const [div1FotoPilcha, setDiv1FotoPilcha] = useState("");
    const [div2FotoPilcha, setDiv2FotoPilcha] = useState("");
    
    
    
    const mostrarVestimentaMujeres = () => {
        
        
        setDiv1FotoPilcha(womanImg);
        setDiv2FotoPilcha(womenImg);
        
        }
    
    const mostrarVestimentaHombres = () => {
   
        setDiv1FotoPilcha(manImg); 
        setDiv2FotoPilcha(menImg); 
    }
    
   
    const ocultarVestimenta = () => {
   
        setDiv1FotoPilcha(""); 
        setDiv2FotoPilcha(""); 
    }
    
    
    
    
    return (
        <>
            <section>
   <div id="divVestimenta" className="flex text-center justify-center">
   <p className="text-2xl">CÓDIGO DE VESTIMENTA</p>
    <p id="pEleganteSport" className='mt-4 mb-3' >ELEGANTE-SPORT</p>
    {/* The button to open modal */}
    <label id="ejemploVestimenta" htmlFor="my-modal-3" className="btn">VER EJEMPLO</label>
   </div>

{/* Put this part before </body> tag */}
<input type="checkbox" id="my-modal-3" className="modal-toggle" />
<div className="modal">
  <div className="modal-box relative">
    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2" onClick={ocultarVestimenta}>✕</label>
    <h3 className="mb-2 text-lg font-bold text-center border-b-[0.25px] border-solid border-gray-700">Elegante Sport</h3>
    
    <p className="py-4 text-center">Esta denominación hace alusión a un <strong>estilo arreglado y cómodo a la vez.</strong></p>
    <p className='text-center'>Aquí te mostramos algunos ejemplos. Ponele onda a tu Look y juntos tengamos una <strong>Gran Fiesta!!!</strong></p>
  
       <div className="flex justify-center gap-10 fs-Smaller-FO mt-10">
        <p id="hombres" className="after"><strong onClick={mostrarVestimentaHombres}>HOMBRES</strong></p>
        <p id="mujeres"><strong className="borderBottom-FO" onClick={mostrarVestimentaMujeres} >MUJERES</strong></p>
    </div>
    <div className='mt-7'><img className='m-auto' src={div1FotoPilcha} alt="" /></div>
    <div><img src={div2FotoPilcha} alt="" /></div>
  </div>
 
</div>


</section> 
        </>
    );
};

export default Vestimenta;