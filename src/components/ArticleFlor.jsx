import React from 'react';
import {useState} from 'react';


const ArticleFlor = () => {
    
const [cbu, setCbu] = useState("");

const [spanDesplegable, setSpanDesplegable] = useState("+");



const mostrarOcultarCbu = () => {

  if (spanDesplegable == "+"){ 

    setCbu("CBU 0720037388000012330672")
    setSpanDesplegable("-")
  } else {
    setCbu("")
    setSpanDesplegable("+")
 
  }
}


         

    
    
    
    return (
        <>
            <article id="articleFlor">
      <div id="divMuralFotos" className="text-center flex justify-center">
      <p>DURANTE NUESTRA BODA UTILIZA EL HASHTAG</p>
      <p id="pCamiYFede" className='mt-4 mb- mb-5'><strong>#CAMIyFEDE</strong></p>
      <a className="aMuralFotos" href="https://www.instagram.com/s/aGlnaGxpZ2h0OjE3OTU0NzU1MTU5OTcwMDMx?story_media_id=1732691349964850834_1465774300&igshid=YmMyMTA2M2Y=" target="_blank">VER MURAL FOTOS</a>
      </div>
    

     {/* Seccion Mesa de Regalos */}

     <div id="divMesaDeRegalos" className="text-center text-white">
      <h5 id="h5MesaRegalos">Mesa de Regalos</h5>
      <p className="fw-lighter">Como ya vivimos juntos, no necesitamos nada para nuestra casa. Si querés hacernos un regalo, que sea para la luna de miel. ¡Gracias!</p>
      <div id="divDatosBancarios" onClick={mostrarOcultarCbu} className="flex">
        <span id="spanDatosBancarios" className="bg-white text-black">DATOS BANCARIOS</span>
        <span id="spanDesplegable" className="bg-white text-black"><strong>{spanDesplegable}</strong></span>
        
       </div> 
       <p id="cbu" className='text-white'>{cbu}</p>
     </div>
     
     <img id="imgFlor" width="443" height="690" src="https://siacepto.ar/wp-content/uploads/2022/03/planta-2.png" className="attachment-large size-large" alt="" loading="lazy" srcSet="https://siacepto.ar/wp-content/uploads/2022/03/planta-2.png 443w, https://siacepto.ar/wp-content/uploads/2022/03/planta-2-193x300.png 193w" sizes="(max-width: 443px) 100vw, 443px"/>
   </article>








        </>
    );
};

export default ArticleFlor;