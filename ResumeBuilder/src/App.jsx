import "./App.css";
import Form from "./components/form/Form.jsx";
import InputField from "./components/input/Input.jsx";
import { forms } from "./components/form/form-types.js";

function App() {
  const formNumber = 0;

  return (
    <div className="page-wrapper">
      <div className="page-content">
        <Form formTitle={"Personal Details"}>
          {forms[formNumber].map((inputMetadata) => (
            <InputField
              key={inputMetadata.title}
              title={inputMetadata.title}
              inputType={inputMetadata.type}
            />
          ))}
        </Form>
      </div>
    </div>
  );
}

export default App;
