import styled from 'styled-components';
import { colors } from '../../styles';

export const Container = styled.div`
     display: flex;
     padding: 24px 0;
     align-items: center;
     justify-content: space-between;

     > div {
          display: flex;
          align-items: center;
          gap: 20px;
     }
`;

export const Title = styled.h1`
     font-size: 28px;
     font-weight: 600;
`;

export const NavItems = styled.ul`
     display: flex;
     gap: 40px;
     list-style: none;
     margin-right: 60px;
`;

export const NavItem = styled.li`
     cursor: pointer;
     transition: color 0.2s ease-in-out;

     a {
          text-decoration: none;
          color: #000;
     }

     &:hover {
          color: ${colors.primary};
     }
`;

export const Button = styled.button`
     padding: 10px 28px;
     background-color: ${colors.primary};
     border: none;
     font-size: 14px;
     color: #fff;
     border-radius: 14px;
     cursor: pointer;
     transition: transform 0.2s ease-in-out;

     &:hover {
          transform: scale(1.1);
     }
`;
