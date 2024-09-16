import React from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes
} from "react-router-dom";
import FootPhone from "./foot-ph.png";
import FootLarge from "./footer-screen.png";
import HomePage from "./Hohepage";
import Logo from "./logo.svg";


function App() {
  return (
    <div className="">
      <div className="border-b-2 border-gray-500">
      <img className="h-12 ml-12 mt-4 mb-6" src={Logo} alt="logo" />

      </div>
<Router>
     <Routes>
      <Route exact path="/" element={<HomePage />} />
    
    </Routes>
    </Router>
    <div>
      <div className="">
        <img className="w-full block md:hidden" src={FootPhone} alt="logo" />
      </div>
      <div className="bg-gray-100">
        <img className=" mx-auto hidden md:block" src={FootLarge} alt="logo" />
      </div>
    </div>
    </div>
  );
}

export default App;
