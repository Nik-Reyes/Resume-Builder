import Form from "../components/form/Form.jsx";
import Resume from "../components/resume/Resume.jsx";
import FormEntries from "../components/form/FormEntry.jsx";
import Footer from "../components/footer/Footer.jsx";
import ProgressBar from "../components/footer/ProgressBar.jsx";
import ButtonWrapper from "../components/button/ButtonWrapper.jsx";
import Button from "../components/button/button.jsx";

function Mobile({ view, manageView, currentFormConfig, mobileProps }) {
  const staticSharedProps = {
    currentFormInputFields: mobileProps.currentFormInputFields,
    toggleAccordion: mobileProps.toggleAccordion,
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
          <>
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
            <Footer className="progress-footer container">
              <ProgressBar progPercent={mobileProps.prog} />
              <ButtonWrapper className="progress-button-wrapper">
                <Button
                  className="progress-button sharp-white"
                  onClick={mobileProps.decrementFormNumber}
                  disabled={mobileProps.formNumber <= 0}
                >
                  <span>Previous</span>
                </Button>
                <Button
                  className={
                    mobileProps.isLastForm
                      ? "progress-button disabled"
                      : "progress-button sharp-white"
                  }
                  onClick={() => {
                    if (mobileProps.isLastForm) {
                      manageView("resume");
                    }
                    mobileProps.incrementFormNumber();
                  }}
                >
                  <span>{mobileProps.isLastForm ? "Finish" : "Next"}</span>
                </Button>
              </ButtonWrapper>
            </Footer>
          </>
        ) : (
          <>
            <Resume formData={mobileProps.formData} />
            <Footer className="resume-footer container">
              <ButtonWrapper className="button-wrapper container">
                <Button
                  className="download-resume-button"
                  onClick={() => window.print()}
                >
                  Download
                </Button>
              </ButtonWrapper>
            </Footer>
          </>
        )}
      </div>
    </div>
  );
}

export default Mobile;
