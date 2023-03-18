import { useCallback, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Usestate from "./components/useState";
import Useeffect from "./components/useEffect";
import Usecallback from "./components/useCallback";
import Usememo from "./components/useMemo";
import Useref from "./components/useRef";
import Home from "./components/home";
import "./App.css";

function App() {

  return (
    <div className="App" > 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="usestate" element={<Usestate />} />
            <Route path="useeffect" element={<Useeffect />} />
            <Route path="useref" element={<Useref />} />
            <Route path="usecallback" element={<Usecallback />} />
            <Route path="usememo" element={<Usememo />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;