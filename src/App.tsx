import Header from './components/Header';
import Menu from './components/Menu';
import { Container } from './styles';
import book from './assets/images/book.png';

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
          </Container>
     );
}

export default App;
