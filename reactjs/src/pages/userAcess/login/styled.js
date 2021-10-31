import styled from "styled-components";

const Container = styled.div`
    .conteudo-reg {
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;

    height: 80vh;
    font: 1.2em "Bebas Neue";
  }

  .box-reg {
    border: solid 1px black;
    box-shadow: 0px 2px 3px 0px #888;
    height: 24em;
    width: 17em;
    padding: 2em 3em;
  }

  .reg-titulo {
    text-align: center;

    font-size: 1.4em;
  }

  .reg-campos {
    padding: 1.8em 0em;
  }

  .reg-a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1em 0em;
  }

  .a a{
      color: black;
      text-decoration: none;
  }

  .a a:hover{
    opacity: 0.6;
    transition: 0.4s;
    text-decoration: underline;
  }
  
  .reg-conta {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 1em;
  }
`
export {Container}