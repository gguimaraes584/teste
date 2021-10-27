
import { ContadorDiv } from "./styled";
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contador(){
 const [contador, setContador] = useState(0);
 


  function adicionar(){
    if (contador >= 10)
    return toast.warning("Número máximo de item atingido");
    setContador(contador + 1);
  }
  
  function remover(){
    if (contador === 0)
    return;
    setContador(contador - 1)
  }
  
  return (
    
       <ContadorDiv> {contador}  
       <ToastContainer> </ToastContainer>
       <button onClick={adicionar}> + </button>
       <button onClick={remover}> -  </button> 
       </ContadorDiv> 
    
  )
}