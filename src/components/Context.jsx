import React from 'react';
import { createContext } from 'react';
import { useState } from 'react';



export const ContextApp = createContext();



const Context = (props) => {
    
    
    
    

    
    return (
        <>
            <ContextApp.Provider value={{}}>
            {props.children}

            </ContextApp.Provider>

     </>
    );
};

export default Context;