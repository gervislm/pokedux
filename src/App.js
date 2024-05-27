import "./App.css";
import { Col } from "antd";
import { Searcher } from "./components/Searcher";
import { PokemonList } from "./components/PokemonList";
import logo from "./statics/logo.svg";

function App() {
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux-logo" />
      </Col>
      <Col span={8} offset={8}>
        <Searcher />
      </Col>
      <PokemonList />
    </div>
  );
}

export default App;
