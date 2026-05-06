import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

export function App() {
  return (
    <BrowserRouter>
       <Routes>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/" element={<Dashboard/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
