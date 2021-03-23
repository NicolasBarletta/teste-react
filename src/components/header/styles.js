import styled from "styled-components"
export const Container = styled.header `
width: 100vw;
background: #333;
height: 4rem;
&>h1:first-child {
    color: #fff;
    font-size: 1.5rem;
}

&>h1:last-child {
    color: #000;
    font-size: 1.5rem;
}
`