
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
       
        <ContadorDiv>
          <ToastContainer/>
          
          <div className="menos" onClick={remover}>
            -
          </div>
    
          <div className="quantidade">
            {contador}
          </div>
    
          <div className="mais" onClick={adicionar}>
            +
          </div>
          
        </ContadorDiv>
       
  )
}