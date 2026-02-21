import { forms } from "../data/form-config.js";
import Form from "../components/form/Form.jsx";
import Resume from "../components/resume/Resume.jsx";
import FormEntries from "../components/form/FormEntry.jsx";
import Footer from "../components/footer/Footer.jsx";

function Mobile({ view, currentFormConfig, mobileProps }) {
  const totalForms = Object.keys(forms).length - 1;
  const staticSharedProps = {
    currentFormInputFields: mobileProps.currentFormInputFields,
    handleToggleGroup: mobileProps.handleToggleGroup,
    isGroupHidden: mobileProps.isGroupHidden,
    updateFormGroup: mobileProps.updateFormGroup,
    handleDeleteFromActiveGroups: mobileProps.handleDeleteFromActiveGroups,
    handleDeleteGroup: mobileProps.handleDeleteGroup,
    formIsReplicable: mobileProps.formIsReplicable,
    handleAddGroup: mobileProps.handleAddGroup,
  };
  return (
    <div className="content">
      <div className="main">
        {view.form ? (
          <Form
            formName={currentFormConfig.formName}
            formIsReplicable={mobileProps.formIsReplicable}
            formButtonName={currentFormConfig.formButtonName}
            onClick={mobileProps.handleAddGroup}
          >
            <FormEntries
              currentFormData={mobileProps.currentFormData}
              staticSharedProps={staticSharedProps}
              titleDataMap={mobileProps.titleDataMap}
              customRender={mobileProps.currentFormConfig.customRender}
              currentFormSection={mobileProps.currentFormSection}
            />
          </Form>
        ) : (
          <Resume formData={mobileProps.formData} />
        )}
      </div>
      <Footer
        formNumber={mobileProps.formNumber}
        totalForms={totalForms}
        setFormNumber={mobileProps.setFormNumber}
      />
    </div>
  );
}

export default Mobile;
