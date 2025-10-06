import { Button, Container, NavItem, NavItems, Title } from './styles';

type Props = {
     ItemsMenu: string[];
};

const Menu = ({ ItemsMenu }: Props) => {
     return (
          <Container>
               <Title>E-Book</Title>

               <div>
                    <NavItems>
                         {ItemsMenu.map(item => (
                              <NavItem key={item}>{item}</NavItem>
                         ))}
                    </NavItems>

                    <Button>Download</Button>
               </div>
          </Container>
     );
};

export default Menu;
