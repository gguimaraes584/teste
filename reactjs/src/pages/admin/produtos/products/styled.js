import styled from 'styled-components';

export const Container = styled.div`

* {
    box-sizing: border-box;
    font: "Bebas Neue";
}

thead, .a {

        background-color: #6CC3DF;
}

th{
        text-align: center;
        padding: 0em 4em;
        height:  61px;
        align-content: center;
        justify-items: center;
        align-items: center;
        font: 1.3em "Bebas Neue";
}

td {
        text-align: center;
        height:  61px;
        align-content: center;
        justify-items: center;
        align-items: center;
        font: 1.2em "Bebas Neue";
}

.alternado {
    text-align: center;
    background-color: #f9f9f9;
}

.a {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5em;
  }

button, input {
    border-radius: 20px;
    background-color: white;
    font: 1.15em "Bebas Neue";
    padding: 0em 2em;
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;
}
`