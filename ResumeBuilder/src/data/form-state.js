import { forms } from "./form-config.js";

export const formState = {
  ...Object.fromEntries(
    Object.values(forms)
      .filter(({ customRender }) => !customRender)
      .map(({ section, inputFields }) => [
        section,
        [
          {
            id: 0,
            ...Object.fromEntries(inputFields.map(({ name }) => [name, ""])),
          },
        ],
      ])
  ),
  skills: [
    {
      id: 0,
      category: "Category",
      skillItems: [{ id: 0, skill: "" }],
    },
  ],
};
