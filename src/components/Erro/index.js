import {Link} from 'react-router-dom';

function Erro(){
return(
    <div>
        <h2>Ops, parece que de erro ao acessar a pagina!</h2>
        <br/>
        <span>Achamos outras paginas em comum</span><br/>
        <Link to="/">Home</Link><br/>
        <Link to="/sobre">Sobre</Link><br/>
        <Link to="/contato">Contato</Link>
    </div>
    );
}

export default Erro;