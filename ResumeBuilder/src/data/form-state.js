import { forms } from "./form-config.js";

export const formState = Object.fromEntries(
  Object.values(forms).map(({ section, inputFields }) => [
    section,
    [
      {
        id: 0,
        ...Object.fromEntries(inputFields.map(({ name }) => [name, ""])),
      },
    ],
  ])
);
