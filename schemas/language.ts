import { defineField } from "sanity";

const language = {
  name: "language",
  title: "Language",
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

export default language;
