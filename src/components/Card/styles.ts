import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
     margin: 20px 0;
     transition: transform 0.3s ease-in-out;

     p {
          max-width: 400px;
          word-spacing: 3px;
     }

     &:hover {
          transform: scale(1.05);
     }
`;

export const Box = styled.div`
     display: flex;
     align-items: center;
     gap: 10px;
     margin-bottom: 10px;

     span {
          font-size: 28px;
          color: ${colors.primary};
     }

     h1 {
          font-size: 26px;
          font-weight: 600;
     }
`;
