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
    const key = `${currentFormSection}-${groupStateObj.id}`;
    const titleData = titleDataMap[currentFormSection]?.(groupStateObj);
    return customRender ? (
      <SkillInputGroup
        {...staticSharedProps}
        groupStateObj={groupStateObj}
        groupKey={key}
        key={key}
      />
    ) : (
      <DefaultInputGroup
        {...staticSharedProps}
        formIsReplicable={staticSharedProps.formIsReplicable}
        groupStateObj={groupStateObj}
        groupKey={key}
        titleData={titleData}
        key={key}
      />
    );
  });
}

export default FormEntries;
