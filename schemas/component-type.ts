import { defineField } from "sanity";

const componentType = {
  name: "componentType",
  title: "Component Type",
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

export default componentType;
