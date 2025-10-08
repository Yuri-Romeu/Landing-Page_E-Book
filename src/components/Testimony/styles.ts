import styled from 'styled-components';

export const Container = styled.div`
     margin-top: 40px;
     max-width: 400px;
     background-color: #fff;
     padding: 5px;
     border-radius: 5px;

     img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          object-fit: cover;
     }

     > p {
          font-size: 16px;
          font-weight: 300;
          width: 100%;
     }
`;

export const Header = styled.div`
     display: flex;
     align-items: center;
     gap: 20px;
     margin-bottom: 14px;

     h1 {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 5px;
     }

     p {
          font-size: 16px;
          font-weight: 300;
     }
`;

export const Assessment = styled.span`
     display: flex;
     gap: 3px;
     margin-bottom: 10px;
     color: #dfd119ff;
     font-size: 18px;
`;
