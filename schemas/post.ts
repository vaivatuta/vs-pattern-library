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
      name: "componentType",
      title: "Component Type",
      type: "reference",
      to: [{ type: "componentType" }],
      validation: (rule) => rule.required(),
    }),
    defineField(
      defineField({
        name: "description",
        title: "Description",
        type: "text",
      })
    ),
    defineField({
      name: "codeBlocks",
      title: "Code Blocks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "styleType",
              title: "Style Type",
              type: "reference",
              to: [{ type: "styleType" }],
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "code",
              title: "Code",
              type: "code",
              options: {
                language: "tsx",
                languageAlternatives: [{ title: "jsx", value: "jsx" }],
              },
            }),
          ],
        },
      ],
    }),
  ],
};
