import Form from "../components/form/Form.jsx";
import Resume from "../components/resume/Resume.jsx";
import FormEntries from "../components/form/FormEntry.jsx";
import Footer from "../components/footer/Footer.jsx";
import ProgressBar from "../components/footer/ProgressBar.jsx";
import ButtonWrapper from "../components/button/ButtonWrapper.jsx";
import Button from "../components/button/Button.jsx";

function Mobile({
  view,
  manageView,
  currentFormConfig,
  viewProps,
  sharedEntryProps,
}) {
  return view.form ? (
    <>
      <Form
        formName={currentFormConfig.formName}
        formIsReplicable={viewProps.formIsReplicable}
        formButtonName={currentFormConfig.formButtonName}
        onClick={viewProps.handleAddGroup}
      >
        <FormEntries
          currentFormData={viewProps.currentFormData}
          sharedEntryProps={sharedEntryProps}
          titleDataMap={viewProps.titleDataMap}
          customRender={viewProps.currentFormConfig.customRender}
          currentFormSection={viewProps.currentFormSection}
        />
      </Form>
      <Footer className="progress-footer container">
        <ProgressBar progPercent={viewProps.prog} />
        <ButtonWrapper className="progress-button-wrapper">
          <Button
            className="progress-button sharp-white"
            onClick={() => {
              if (viewProps.formNumber <= 0) return;
              viewProps.decrementFormNumber();
            }}
            disabled={viewProps.formNumber <= 0}
          >
            <span>Previous</span>
          </Button>
          <Button
            className={
              viewProps.isLastForm
                ? "progress-button ocean"
                : "progress-button sharp-white"
            }
            onClick={() => {
              if (viewProps.isLastForm) {
                manageView("resume");
              }
              viewProps.incrementFormNumber();
            }}
          >
            <span>{viewProps.isLastForm ? "Finish" : "Next"}</span>
          </Button>
        </ButtonWrapper>
      </Footer>
    </>
  ) : (
    <>
      <Resume formData={viewProps.formData} />
      <Footer className="resume-footer container">
        <ButtonWrapper className="button-wrapper container">
          <Button
            className="download-resume-button frost"
            onClick={() => window.print()}
          >
            Download
          </Button>
        </ButtonWrapper>
      </Footer>
    </>
  );
}

export default Mobile;
