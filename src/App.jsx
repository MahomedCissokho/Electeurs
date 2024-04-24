import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Accueil from "./Pages/Accueil";
import Connexion from "./Pages/Connexion";
import Accueil from "./Pages/Accueil";
// import Home from "./Pages/Home"
// import Candidat from "./Pages/Candidat"
// import Monitoring from "./Pages/Monitoring"
// import Authentification from "./Pages/Authentification"
// import NouveauCandidat from "./Pages/NouveauCandidat"
// import FormCandidat1 from "./Pages/FormCandidat1"
// import InfosSup2 from "./Pages/InfosSup2"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Connexion/>} />
          <Route path="/connexion2" element={<Accueil/>} />
          {/* <Route path="/accueil" element={<Home />} />
          <Route path="/candidat" element={<Candidat />} />
          <Route path="/candidat/nouveau" element={<NouveauCandidat />} />

          <Route path="/monitoring" element={<Monitoring />} />
          <Route path="/auth" element={<Authentification />} />
          <Route path="/candidat/infos-sup" element={<FormCandidat1 />} />
          <Route path="/candidat/infos-sup2" element={<InfosSup2 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
