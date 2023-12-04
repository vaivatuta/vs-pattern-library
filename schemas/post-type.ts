import { defineField } from "sanity";

export const postType = {
  name: "postType",
  title: "Post Type",
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
