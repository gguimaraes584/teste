import styled from 'styled-components';

export const Container = styled.div`

h1 {
    font: 2.5em "Bebas Neue";
}

.box-cadastro {
display: flex;
flex-direction: row;
}

.box-acoes {
    padding: 0em 5em;
    align-items: center;
    align-content: center;
}

input, select {
  width: 15em;
  height: 1.75em;
  border-radius: 5px;
  outline: 0;
  border: 1px solid black;
}

.cadastrar, .cancelar{
    padding: 1em;
}

.cadastrar button {
width: 9em;
background-color: #5EC5FF;
border: 0px;
border-radius: 4px;
font: 1em "Bebas Neue";
}

.cancelar button {
width: 9em;
background-color: #FF5E5E;
border: 0px;
border-radius: 4px;
font: 1em "Bebas Neue";
}

.identificacao, .dados, .opcoes, .opcoes2 {
    display: flex;
    flex-direction: row;
}

.id, .cd-interno, .nome, .preco, .sexo, .cores, .categoria, .link, .descricao {
display: flex;
flex-direction: column;
font: 1.5em "Bebas Neue";
padding: 0.5em 1em;
justify-content: center;
}

.link input {
    width: 33.5em;
}

textarea {
    width: 33.5em;
    height: 8em;
    resize: none;
}
`