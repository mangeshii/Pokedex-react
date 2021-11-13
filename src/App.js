import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Pokedex from "./Components/Pokedex";
import Pokemon from "./Components/Pokemon";
import { useState } from "react";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div className={darkMode ? "App app-dark" : "App"}>
            <div className="main-container">
            <div className="header">
                <div className="form-check form-switch">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault"
                        onChange={() => setDarkMode(!darkMode)}
                    />
                </div>
            </div>
                <Router>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Pokedex darkMode={darkMode} />}
                        />
                        <Route
                            exact
                            path="/pokemon/:id"
                            element={<Pokemon darkMode={darkMode} />}
                        />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
