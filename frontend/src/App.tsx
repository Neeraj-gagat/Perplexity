import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Auth from "./components/Auth";

export function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/auth" element={<Auth/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
