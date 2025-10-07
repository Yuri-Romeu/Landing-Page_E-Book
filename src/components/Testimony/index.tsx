import { FaStar } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { Assessment, Container, Header } from './styles';

type Props = {
     name: string;
     text: string;
     image: string;
     job: string;
     stars: number;
};

const Testimony = ({ name, text, image, job, stars }: Props) => {
     return (
          <Container>
               <Header>
                    <img src={image} alt="Foto da Testemunha" />
                    <div>
                         <h1>{name}</h1>
                         <p>{job}</p>
                    </div>
               </Header>

               <Assessment>
                    {Array.from({ length: stars }, (_, index) => (
                         <FaStar key={index} />
                    ))}
                    {Array.from({ length: 5 - stars }, (_, index) => (
                         <FaRegStar key={index} />
                    ))}
               </Assessment>

               <p>{text}</p>
          </Container>
     );
};

export default Testimony;
