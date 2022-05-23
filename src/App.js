import { Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import CalculatorZakat from "./pages/CalculatorZakat";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Landing />}/>
      <Route exact path="/calculator-zakat" element={<CalculatorZakat />}/>
    </Routes>
  );
}

export default App;
