import logo from './logo.svg';
import './App.css';
import Menu from "./composants/menu/Menu";
import Compteur from "./composants/body/Compteur";
import Like from "./composants/commun/Like" ;

function App() {
  return <div className="App">
      <Menu />
      <Compteur />
      <hr />
      <Like />
    </div>
  ;
}

export default App;
