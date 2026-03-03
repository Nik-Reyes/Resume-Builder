import DefaultInputGroup from "./DefaultInputGroup.jsx";
import SkillInputGroup from "./SkillInputGroup.jsx";

function FormEntries({
  currentFormData,
  staticSharedProps,
  titleDataMap,
  customRender,
  currentFormSection,
}) {
  return currentFormData.map((groupStateObj) => {
    const titleData = titleDataMap[currentFormSection]?.(groupStateObj);
    return customRender ? (
      <SkillInputGroup
        {...staticSharedProps}
        groupStateObj={groupStateObj}
        groupKey={groupStateObj.id}
        key={groupStateObj.id}
      />
    ) : (
      <DefaultInputGroup
        {...staticSharedProps}
        formIsReplicable={staticSharedProps.formIsReplicable}
        groupStateObj={groupStateObj}
        groupKey={groupStateObj.id}
        titleData={titleData}
        key={groupStateObj.id}
      />
    );
  });
}

export default FormEntries;
