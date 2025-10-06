import styled from 'styled-components';

export const Container = styled.header`
     margin: 10px 0;
     display: flex;

     div:first-child {
          margin-top: 80px;
     }
`;

export const Title = styled.h1`
     font-size: 60px;
     font-weight: 500;
     margin-bottom: 20px;
`;

export const Paragraph = styled.p`
     font-size: 16px;
     font-weight: 400;
     margin-bottom: 20px;
     word-spacing: 3px;
`;

export const Input = styled.input`
     padding: 10px 20px;
     width: 100%;
     margin: 24px 0;
     border: 1px solid #e0e0e0ff;
     border-radius: 5px;
     font-size: 16px;
     display: block;

     &::placeholder {
          color: #e0e0e0ff;
     }
`;

export const Button = styled.button`
     padding: 12px 20px;
     border: none;
     border-radius: 10px;
     background-color: #348eff;
     color: #fff;
     font-size: 16px;
     font-weight: 600;
     letter-spacing: 1px;
     cursor: pointer;
     width: 100%;
     transition: background-color 0.3s ease-in-out;

     &:hover {
          background-color: #0077ff;
     }
`;

export const Image = styled.img`
     width: 540px;
     object-fit: cover;
`;
