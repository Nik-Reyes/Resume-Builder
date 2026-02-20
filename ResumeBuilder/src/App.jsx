import "./App.css";
import { useState } from "react";
import { forms } from "./data/form-config.js";
import Mobile from "./Views/Mobile.jsx";
import Footer from "./components/footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  const [formNumber, setFormNumber] = useState(0);
  const [view, setView] = useState({ form: true, resume: false });
  const currentFormConfig = forms[formNumber];
  const totalForms = Object.keys(forms).length - 1;

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Header view={view} setView={setView} />
        <Mobile view={view} currentFormConfig={currentFormConfig} />
        {view.form && (
          <Footer
            formNumber={formNumber}
            totalForms={totalForms}
            setFormNumber={setFormNumber}
          />
        )}
      </div>
    </div>
  );
}

export default App;
