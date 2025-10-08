import Header from './components/Header';
import Menu from './components/Menu';
import { Container, Title } from './styles';
import book from './assets/images/book.png';
import { motion, AnimatePresence } from 'framer-motion';
import Card from './components/Card';
import {
     FaArrowLeft,
     FaArrowRight,
     FaRegCheckCircle,
     FaRegLightbulb,
     FaStar,
} from 'react-icons/fa';
import Testimony from './components/Testimony';
import pessoa1 from './assets/images/pessoa1.jpg';
import pessoa2 from './assets/images/pessoa2.jpg';
import pessoa3 from './assets/images/pessoa3.jpg';
import pessoa4 from './assets/images/pessoa4.jpg';
import pessoa5 from './assets/images/pessoa5.jpg';
import pessoa6 from './assets/images/pessoa6.jpg';
import pessoa7 from './assets/images/pessoa7.jpg';
import { useState } from 'react';

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
               text: '"O livro é muito completo e informativo, com uma grande quantidade de informações."',
               image: pessoa4,
               job: 'Fisioterapeuta',
               stars: 4,
          },
          {
               name: 'Maria Eduarda',
               text: '"Não imaginava que um livro tão acessivel fosse tão bom, comprem não vão se arrepender."',
               image: pessoa5,
               job: 'Professora',
               stars: 5,
          },
          {
               name: 'Cauã junior',
               text: '"Melhor investimento nos ultimos anos, recomendo demais."',
               image: pessoa6,
               job: 'Cirugião',
               stars: 5,
          },
          {
               name: 'Breno lima',
               text: '"Esse livro me ajudou a entender muito mais sobre o assunto, leitura leve e pratica."',
               image: pessoa7,
               job: 'Fotografo',
               stars: 4,
          },
     ];

     const [startIndex, setStartIndex] = useState(0);

     const visibleTestimonials = Testimonials.slice(startIndex, startIndex + 3);

     const handleNext = () => {
          if (startIndex + 3 < Testimonials.length) {
               setStartIndex(startIndex + 3);
          }
     };

     const handlePrev = () => {
          if (startIndex - 3 >= 0) {
               setStartIndex(startIndex - 3);
          }
     };

     return (
          <Container>
               <Menu ItemsMenu={['Home', 'About', 'Features']} />

               <Header
                    id="Home"
                    image={book}
                    title="Download Our Free E-Book"
                    description=" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis, possimus
                                        consectetur deleniti accusantium. Lorem ipsum dolor sit amet consectetur,
                                        adipisicing elit. Debitis, possimus consectetur deleniti accusantium."
               />

               <Title id="Features">Features</Title>
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

               <Title id="Testimonials">Testimonials</Title>
               <div
                    style={{
                         display: 'flex',
                         alignItems: 'center',
                         gap: '20px',
                         justifyContent: 'center',
                    }}
               >
                    <button
                         onClick={handlePrev}
                         disabled={startIndex === 0}
                         style={{
                              background: 'none',
                              border: 'none',
                              cursor: startIndex === 0 ? 'not-allowed' : 'pointer',
                              fontSize: '24px',
                              color: '#333',
                         }}
                    >
                         <FaArrowLeft />
                    </button>

                    <Container flex>
                         <AnimatePresence mode="wait">
                              <motion.div
                                   key={startIndex}
                                   initial={{ opacity: 0, x: 100 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   exit={{ opacity: 0, x: -100 }}
                                   transition={{ duration: 0.5 }}
                                   style={{ display: 'flex', gap: '30px' }}
                              >
                                   {visibleTestimonials.map(testimony => (
                                        <Testimony
                                             key={testimony.name}
                                             name={testimony.name}
                                             text={testimony.text}
                                             image={testimony.image}
                                             job={testimony.job}
                                             stars={testimony.stars}
                                        />
                                   ))}
                              </motion.div>
                         </AnimatePresence>
                    </Container>

                    <button
                         onClick={handleNext}
                         disabled={startIndex + 3 >= Testimonials.length}
                         style={{
                              background: 'none',
                              border: 'none',
                              cursor:
                                   startIndex + 3 >= Testimonials.length
                                        ? 'not-allowed'
                                        : 'pointer',
                              fontSize: '24px',
                              color: '#333',
                         }}
                    >
                         <FaArrowRight />
                    </button>
               </div>
          </Container>
     );
}

export default App;
