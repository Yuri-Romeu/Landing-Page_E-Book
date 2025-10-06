import Menu from './components/Menu';
import { Container } from './styles';

function App() {
     return (
          <Container>
               <Menu ItemsMenu={['Home', 'About', 'Features']} />
          </Container>
     );
}

export default App;
