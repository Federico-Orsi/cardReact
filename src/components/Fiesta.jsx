import React from 'react';

const Fiesta = () => {
    return (
        <>
         <section id="seccionFiesta">
     <div id="divFiestaWhite"></div>
     <div id="divFiestaGray" className="text-center">
      <p id="pFiesta">Fiesta</p>
      <p id="pOrganizador"><strong>YATCH CLUB Buenos Aires</strong></p>
      <p id="pHorario" className='mb-4'>23:59 Hs</p>
      <a className="info" href="https://www.google.com.ar/maps/place/Yacht+Club+Puerto+Madero/@-34.6014694,-58.3775686,14.27z/data=!4m5!3m4!1s0x95a3352e8dc2bad5:0xfcd1559738b82a8a!8m2!3d-34.6020198!4d-58.3649219?hl=es-419" target="_blank">VER MAPA</a>
     </div>
     <img id="yatchClubPic" src="https://static.wixstatic.com/media/eb4c45_8433b9e9d941450d8283252f18854523~mv2.jpg/v1/fill/w_640,h_748,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/eb4c45_8433b9e9d941450d8283252f18854523~mv2.jpg" alt="YatchClub"/>

    </section> 


        </>
    );
};

export default Fiesta;