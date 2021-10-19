import logo from './hojas.png';
import fondo from './suculentas.jpg';
import './App.css';
import NavBar from './componentes/navbar/NavBar';

function App() {
  return (
    <div className="App container mt-8">
      <div className="row mx-0 px-0 mt-4">
        <div className="col-md-3"><h6 className="Fuente-Logo">Entre Verde</h6></div>
         <div className="col-md-9 text-right"><NavBar/></div>
      </div>  
      <div className="row mx-0 px-0 mt-4">
        <div className="col-md-12"><img src={fondo} alt="Entre Verdes"  /></div>
      </div>
    </div>
  );
}

export default App;
