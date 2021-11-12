import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./Components/Pokedex";
import Pokemon from "./Components/Pokemon";


function App() {
    return (
        <div className="App">
            <div className="main-container">
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Pokedex />} />
                        <Route exact path="/pokemon/:id" element={<Pokemon />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
