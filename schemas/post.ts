import { defineField } from "sanity";

export const post = {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "postType",
      title: "Post Type",
      type: "reference",
      to: [{ type: "postType" }],
      validation: (rule) => rule.required(),
    }),
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "codeBlocks",
      title: "Code Blocks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "styleType",
              title: "Style Type",
              type: "reference",
              to: [{ type: "styleType" }],
            },
            defineField({
              name: "code",
              title: "Code",
              type: "code",
              options: {
                language: "tsx",
                languageAlternatives: [{ title: "jsx", value: "jsx" }],
              },
              validation: (rule) => rule.required(),
            }),
          ],
        },
      ],
    },
  ],
};
