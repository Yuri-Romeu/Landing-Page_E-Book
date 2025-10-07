import Header from './components/Header';
import Menu from './components/Menu';
import { Container, Title } from './styles';
import book from './assets/images/book.png';
import Card from './components/Card';
import { FaStar } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';

function App() {
     return (
          <Container>
               <Menu ItemsMenu={['Home', 'About', 'Features']} />

               <Header
                    image={book}
                    title="Download Our Free E-Book"
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, possimus
                                        consectetur deleniti accusantium. Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Debitis, possimus consectetur deleniti accusantium."
               />

               <Title>Features</Title>
               <Container flex>
                    <Card icon={<FaStar />} title="Easy to use">
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque at ad ipsam
                         voluptatibus minus saepe iusto sapiente ut!
                    </Card>

                    <Card icon={<FaRegLightbulb />} title="Smart Design">
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque at ad ipsam
                         voluptatibus minus saepe iusto sapiente ut!
                    </Card>

                    <Card icon={<FaRegCheckCircle />} title="Free Content">
                         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque at ad ipsam
                         voluptatibus minus saepe iusto sapiente ut!
                    </Card>
               </Container>
          </Container>
     );
}

export default App;
