import Header from './components/Header';
import Menu from './components/Menu';
import { Container, Title } from './styles';
import book from './assets/images/book.png';
import Card from './components/Card';
import { FaStar } from 'react-icons/fa';
import { FaRegLightbulb } from 'react-icons/fa';
import { FaRegCheckCircle } from 'react-icons/fa';
import Testimony from './components/Testimony';
import pessoa1 from './assets/images/pessoa1.jpg';
import pessoa2 from './assets/images/pessoa2.jpg';
import pessoa3 from './assets/images/pessoa3.jpg';
import pessoa4 from './assets/images/pessoa4.jpg';

function App() {
     const Testimonials = [
          {
               name: 'João Silva',
               text: '"Esse e-book mudou minha vida. Eu não tinha visto um livro tão bom antes."',
               image: pessoa1,
               job: 'Estudante',
               stars: 5,
          },
          {
               name: 'Maria Souza',
               text: '"Eu realmente gostei do conteúdo deste e-book. Recomendo para todos."',
               image: pessoa2,
               job: 'Desenvolvedora',
               stars: 4,
          },
          {
               name: 'Pedro Santos',
               text: '"Eu gostei muito do design deste e-book, design moderno e atualizado, recomendo demais."',
               image: pessoa3,
               job: 'Militar aposentado',
               stars: 5,
          },
          {
               name: 'Raquel Almeida',
               text: '"O livro é muito completo e informativo, com uma grande quantidade de informações e linguagem facil."',
               image: pessoa4,
               job: 'Fisioterapeuta',
               stars: 5,
          },
     ];

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

               <Title>Testimonials</Title>
               <Container flex>
                    {Testimonials.map(testimony => (
                         <Testimony
                              key={testimony.name}
                              name={testimony.name}
                              text={testimony.text}
                              image={testimony.image}
                              job={testimony.job}
                              stars={testimony.stars}
                         />
                    ))}
               </Container>
          </Container>
     );
}

export default App;
