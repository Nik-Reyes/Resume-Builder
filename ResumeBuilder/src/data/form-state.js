import { forms } from "./form-config.js";

const CUSTOM_STATES = {
  skills: [
    {
      id: crypto.randomUUID(),
      category: "",
      skills: [{ id: crypto.randomUUID(), skill: "" }],
    },
  ],
};
const formState = {
  ...Object.fromEntries(
    Object.values(forms).map(({ section, inputFields, customRender }) => {
      return customRender
        ? [section, CUSTOM_STATES[section]]
        : [
            section,
            [
              {
                id: crypto.randomUUID(),
                ...Object.fromEntries(
                  inputFields.map(({ name }) => [name, ""])
                ),
              },
            ],
          ];
    })
  ),
};

export { formState };
