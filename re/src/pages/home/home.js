import './home.css'
import { Button, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";
import ControlledCarousel from './carousel';

const Home = () => {  
  return (
    <div className="home">
      <Stack direction="horizontal" gap={2}>
        <Button variant="outline-primary" size="lg" onClick={(e) => console.log(e)}>
          <FontAwesomeIcon icon={faHome}/>
        </Button>
      </Stack>
      <ControlledCarousel />
    </div>
  )
}

export default Home