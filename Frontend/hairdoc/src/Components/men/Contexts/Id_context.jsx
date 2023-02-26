import React, { createContext, useState } from "react";

const IdContext = createContext();

 function  IdProvider({ children }) {
    const [id, setId] = useState({
        hairId : '',
        beardId : '',
        colorId : '',
        spaId : ''
    });
    
    return (
        <IdContext.Provider value={{ id, setId }}>
            {children}
        </IdContext.Provider>
    );
}
export { IdContext, IdProvider };