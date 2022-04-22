import styled from 'styled-components'

export const Container = styled.button`
    background: ${(props) => (props.whiteSchema ? "#fff" : "#002200")};
    color: ${(props) => (props.whiteSchema ? "#002100" : "#fff")};
    height: 45px;
    border-radius: 8px;
    border: 2px solid var(--black);
    font-family: 'Roboto Mono', monospace;
    margin: 16px 0px;
    width: 100%;
    :hover{
        border: 2px solid var(--orange);
    }
`