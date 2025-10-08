import { Button, Container, Input, Paragraph, Title, Image } from './styles';

type Props = {
     id: string;
     image: string;
     title: string;
     description: string;
};

const Header = ({ image, id, title, description }: Props) => {
     return (
          <Container>
               <div>
                    <Title id={id}>{title}</Title>

                    <Paragraph>{description}</Paragraph>

                    <Input type="email" placeholder="Enter your email" />

                    <Button>Get it now</Button>
               </div>

               <div>
                    <Image src={image} alt="" />
               </div>
          </Container>
     );
};

export default Header;
