import { defineField } from "sanity";

export const styleType = {
  name: "styleType",
  title: "Style Type",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
};
