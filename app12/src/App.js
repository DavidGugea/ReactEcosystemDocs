import { useState } from "react";
import "./App.css";
import useLocalStorage from "./useLocalStorage";

function App() {
    const [name, setName] = useLocalStorage('name', () => '');

    return (
        <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
        />
    );
}

export default App;
