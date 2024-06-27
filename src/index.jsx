import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Profile from "./Pages/Profile";
import Progresso from "./Pages/Progresso";
import Ranking from './Pages/Ranking';
import Feed from './Pages/Feed';
import MainPage from "./Pages/Mainpage";
import FirstPage from "./Pages/Firstpage";
import SmartChoices from "./Pages/SmartChoices";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/smart-diet" element={<MainPage />} />
      <Route path="/home" element={<FirstPage />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/progresso" element={<Progresso />} />
      <Route path="/ranking" element={<Ranking />} />
      <Route path="/feed" element={<Feed />} />
      <Route path="/smartchoices" element={<SmartChoices />} />
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// Se você quiser começar a medir o desempenho do seu aplicativo,
// passe uma função para registrar os resultados (por exemplo: reportWebVitals(console.log))
// ou envie para um ponto de extremidade de análise.
// Saiba mais: https://bit.ly/CRA-vitals
reportWebVitals();
