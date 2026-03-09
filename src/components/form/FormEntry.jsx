import DefaultInputGroup from "./DefaultInputGroup.jsx";
import SkillInputGroup from "./SkillInputGroup.jsx";

function FormEntries({
  currentFormData,
  sharedEntryProps,
  titleDataMap,
  customRender,
  currentFormSection,
}) {
  return currentFormData.map((groupStateObj) => {
    const titleData = titleDataMap[currentFormSection]?.(groupStateObj);
    return customRender ? (
      <SkillInputGroup
        {...sharedEntryProps}
        groupStateObj={groupStateObj}
        groupKey={groupStateObj.id}
        key={groupStateObj.id}
      />
    ) : (
      <DefaultInputGroup
        {...sharedEntryProps}
        formIsReplicable={sharedEntryProps.formIsReplicable}
        groupStateObj={groupStateObj}
        groupKey={groupStateObj.id}
        titleData={titleData}
        key={groupStateObj.id}
      />
    );
  });
}

export default FormEntries;
