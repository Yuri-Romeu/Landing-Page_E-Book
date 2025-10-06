import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const colors = {
     primary: '#348EFF',
};

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter', sans-serif;
        background-color: #FBFBFB;
    }
`;

export const Container = styled.div`
     max-width: 1000px;
     margin: 0 auto;
     padding: 0 20px;
`;
