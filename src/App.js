import logo from './logo.svg';
import './App.css';
import Cards from "./components/Cards/Cards";
import FormElements from "./components/formElements/FormElements";
import FormTypeTwo from "./components/formElements/FormTypeTwo";
import InputGroup from "./components/formElements/InputGroup";
import NavBar from "./components/NavBar/NavBar";
import CardExample from "./components/Cards/CardExample";
function App() {
  return (
    <div className="App">
        <NavBar/>
        {/*<Cards/>*/}
        {/*<FormElements/>*/}
        {/*<FormTypeTwo/>*/}
        {/*<InputGroup/>*/}
        <CardExample/>
    </div>
  );
}

export default App;
