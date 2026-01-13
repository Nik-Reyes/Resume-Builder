import InputField from "../../input/Input.jsx";

function PersonalDetailsForm() {
  return (
    <form className="personal-details-form">
      <div className="form-title">
        <h1>Personal Details</h1>
      </div>
      <InputField title="First Name" />
      <InputField title="Last Name" />
      <InputField title="Phone Number" />
      <InputField title="Email" />
      <InputField title="LinkedIn URL" />
      <InputField title="GitHub URL" />
      <InputField title="City, State" />
    </form>
  );
}

export default PersonalDetailsForm;
