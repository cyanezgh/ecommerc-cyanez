
//import './App.css';
import NavBar from './components/NavBar/NavBar';
import Badge from 'react-bootstrap/Badge';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Tienda Productos <Badge bg="secondary">E-Commerce</Badge></h1>

    </div>
  );
}

export default App;
