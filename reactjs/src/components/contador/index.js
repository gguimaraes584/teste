
import { ContadorDiv } from "./styled";
import { useState } from 'react';

export default function Contador(){
 const [contador, setContador] = useState(0);
 


  function adicionar(){
    if (contador >= 10)
    return;
    setContador(contador + 1);
  }
  
  function remover(){
    if (contador === 0)
    return;
    setContador(contador - 1)
  }
  
  return (
    
       <ContadorDiv> {contador}  
       <button onClick={adicionar}> + </button>
       <button onClick={remover}> -  </button> 
       </ContadorDiv> 
    
  )
}