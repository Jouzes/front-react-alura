import styled from "styled-components";

//color: #f39f2d;
const Titulo = styled.h2`
    margin: 0 0 28px;
    color: ${props => props.cor || "#f39f2d"};
    font-size: ${props => props.tamanho || "28px"};
    text-align: ${props => props.alinhamento || "center"};
    font-weight: 800;
`

export default Titulo;