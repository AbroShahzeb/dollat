import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/dollat/"}>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<h1>About</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
