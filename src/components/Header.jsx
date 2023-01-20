import React from 'react';
import FyCPlaya from '../img/FyC playa.jpg';


const Header = () => {
    return (
        <>
        <header>
        <div id="containerTituloNombres">
        <p className="tituloNombres pb-3">FyC</p>
        </div>
        <div className="div1"></div>
        <img id="fotoPlaya" src={FyCPlaya} alt="playa"/>
        
        
        <div id="div2">
            <a id="pFecha" target="_blank" href="https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NjM0dWt0bWEwZmdqb2gzbGE4NHZpY2xvbzMgZmVkZXJpY29hbnRvbmlvLm9yc2lAbQ&tmsrc=federicoantonio.orsi%40gmail.com"><strong>31.12.2022</strong></a>
            
        </div>
        
        <div className="elementor-element elementor-element-14827e1 elementor-absolute elementor-view-default elementor-widget elementor-widget-icon" data-id="14827e1" data-element_type="widget" data-settings="{&quot;_position&quot;:&quot;absolute&quot;}" data-widget_type="icon.default"/>
                        <div className="elementor-widget-container">
                            <div className="elementor-icon-wrapper">
                    <div className="elementor-icon">
                    
                </div>
                        </div>
                        </div>        

      
   </header>
     </>
    );
};

export default Header;