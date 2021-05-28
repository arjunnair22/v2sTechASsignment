import './App.css';
import AppNavBar from "./NavBar/NavBar";
import {Container} from "react-bootstrap";

function App() {
  return (
    <div className="App">
        <Container className={'app-container'}>
            <AppNavBar/>
        </Container>
    </div>
  );
}

export default App;
