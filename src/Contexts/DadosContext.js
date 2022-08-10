
import React, { createContext, useState } from 'react';
import { useEffect } from 'react';
export const GlobalContext = createContext();

export function DadosContext({children}){
  const [id, setId] = useState(0);
  let notas = [];
  
  function adicionarNota(name, mensagem, urlImagem){
    localStorage.setItem(id, {'name':name, 'mensagem':mensagem, 'urlImagem':urlImagem})
    setId(id + 1);
}
  
  function apagarNota(indice){
    localStorage.removeItem(indice);
  } 

    return(
        <GlobalContext.Provider value={{notas, adicionarNota, apagarNota}} >
            {children}
        </GlobalContext.Provider>
    )
}