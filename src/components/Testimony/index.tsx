import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import pessoa1 from '../../assets/images/pessoa1.jpg';
import { Assessment, Container, Header } from './styles';
const Testimony = () => {
     return (
          <Container>
               <Header>
                    <img src={pessoa1} alt="Foto da Testemunha" />
                    <div>
                         <h1>João Silva</h1>
                         <p>Estudante</p>
                    </div>
               </Header>

               <Assessment>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaRegStar />
               </Assessment>

               <p>
                    "Eu gostei muito do design deste e-book, design moderno e atualizado, recomendo
                    demais."
               </p>
          </Container>
     );
};

export default Testimony;
