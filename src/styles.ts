import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

type Props = {
     flex?: boolean;
};

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

export const Container = styled.div<Props>`
     max-width: 1000px;
     margin: 0 auto;
     padding: 0 20px;
     display: ${props => (props.flex ? 'flex' : 'block')};
     gap: ${props => (props.flex ? '40px' : '0')};
`;

export const Title = styled.h1`
     font-size: 32px;
     font-weight: 600;
     letter-spacing: 1px;
`;
