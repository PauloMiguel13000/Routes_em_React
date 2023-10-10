
import {Link} from 'react-router-dom';
function Home() {
    return (
      <div >
        <h1>Home</h1>
        <span>Sujeito programador'</span>< br></br><br/>
        <Link to="/sobre">Sobre</Link><br/>
        <Link to="/contato">Contato</Link><br/>
        <Link to="/produto/12345">meu produto é 12345</Link>
      </div>
    );
  }
  
  export default Home;
  