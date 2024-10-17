import React from "react";
import Company from "./Components/company"; // Importamos el componente CompanyForm
import './app.css';

const App = () => {
  return (
    <div className="container text-center">
      <div className="row mt-5">
        <Company />
      </div>
    </div>
  );
};

export default App;
