import { Box, Container } from './styles';

type Props = {
     children: React.ReactNode;
     title: string;
     icon: React.ReactNode;
};

const Card = ({ children, title, icon }: Props) => {
     return (
          <Container>
               <Box>
                    <span>{icon}</span>
                    <h1>{title}</h1>
               </Box>

               <p>{children}</p>
          </Container>
     );
};

export default Card;
