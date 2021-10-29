import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-direction: column;

    thead {
        background-color: #6CC3DF;
    }

    th {
        padding: 0em 2em;
        font: 600 3em;
    }

    td {
        text-align: center;
        padding: 0em 4em;
        height:  61px;
        font-weight: 600;
        font: 600 1em;
    }
`

export {Container}