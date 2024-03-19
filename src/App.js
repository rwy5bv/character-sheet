import CharacterSheet5e from './CharacterSheet5e';
import Home from './Home';
import NoPage from './NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/createSheet" element={<CharacterSheet5e />}></Route>
        <Route exact path="/noPage" element={<NoPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;