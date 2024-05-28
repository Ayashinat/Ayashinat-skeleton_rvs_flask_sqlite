import Home from "../pages/home";
import Contact from "../pages/contact";
import About from '../pages/about';

import UtilisateursPage from '../pages/UtilisateursPage'; // Assurez-vous que le chemin d'importation est correct

import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
    return (
      <>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/utilisateursPage" element={<UtilisateursPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
      </>
    );
  };

    



export default AppRouter;