import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
