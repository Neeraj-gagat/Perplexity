import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";

export function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/auth" element={""}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
