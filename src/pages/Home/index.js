
import {Link} from 'react-router-dom';
function Home() {
    return (
      <div >
        <h1>Home</h1>
        <span>Sujeito programador'</span>< br></br><br/>
        <Link to="/sobre">Sobre</Link><br/><br/>
        <Link to="/contato">Contato</Link>
      </div>
    );
  }
  
  export default Home;
  