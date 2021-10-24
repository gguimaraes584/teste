import styled from "styled-components";
import '../../index.css';

export const Container = styled.div`
.container {
    display: flex;
    flex-direction: column;
    align-content: space-evenly;
}
    
    

    thead {
        background-color: #6CC3DF;
        padding: 0.5em 0em;
    }

    th {
        font: 1.4em "Bebas Neue";
        padding: 1em 2.0em;
    }

    td {
        flex-direction: row;
        padding: 1em 3.2em;
        font: 400 1.22em "Oswald";
    }

    .cor-alternada {
        background-color: #f9f9f9;
        align-items: center;
        align-content: center;
        justify-items: center;
    }

    input {
        display: flex;
        background-color: white;
        
        align-content: flex-end;
        align-items: center;

        margin-right: 0.7em;

        width: 20em;
        padding: 0.1em;
        border-radius: 1.5em;
        border: none;

        font: 1em "Bebas Neue";
    }

    input::-webkit-input-placeholder {
    text-align: right;
}

    .pesquisar, .pesquisar input{
        display: flex;
        align-items: center;
        margin-left: 0.5em;
    }

    .pesquisar img {
        position: relative;
        align-items: center;
    }
`