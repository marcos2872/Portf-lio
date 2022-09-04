import { color } from "@mui/system";
import styled, { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`

    *{
        
        margin: 0;
        padding: 0;
        background-color: ${ props => props.darck ? '#161917' : '#c6cca5' };
        
    }

`

export const Button = styled.button`

 background-color: ${ props => props.darck ? '#c6cca5' : '#161917' };
 color: ${ props => props.darck ? 'black' : 'white' };

`