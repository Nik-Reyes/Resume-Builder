import Form from "../components/form/Form.jsx";
import Resume from "../components/resume/Resume.jsx";
import Footer from "../components/footer/Footer.jsx";
import Button from "../components/button/Button.jsx";
import Message from "../components/message/Message.jsx";
import FormEntries from "../components/form/FormEntry.jsx";
import ProgressBar from "../components/footer/ProgressBar.jsx";
import ButtonWrapper from "../components/button/ButtonWrapper.jsx";

function Desktop({ currentFormConfig, viewProps, sharedEntryProps, view }) {
  return (
    <>
      {view.customize ? (
        <div className="resume-customization-wrapper">
          <Message className="coming-soon">
            <div className="message-headline">
              <h1>Coming Soon</h1>
            </div>
          </Message>
        </div>
      ) : (
        <div className="form-col">
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
                className={"progress-button sharp-white"}
                onClick={() => {
                  if (viewProps.isLastForm) return;
                  viewProps.incrementFormNumber();
                }}
                disabled={viewProps.isLastForm}
              >
                <span>Next</span>
              </Button>
            </ButtonWrapper>
          </Footer>
        </div>
      )}
      <div className="resume-col">
        <Resume formData={viewProps.formData} />
        <Footer className="resume-footer container">
          <ButtonWrapper className="button-wrapper container">
            <Button
              className="download-resume-button ocean"
              onClick={() => window.print()}
            >
              Download
            </Button>
          </ButtonWrapper>
        </Footer>
      </div>
    </>
  );
}

export default Desktop;
