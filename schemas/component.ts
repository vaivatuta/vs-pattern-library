import { defineField, defineType } from "sanity";

const component = {
  name: "component",
  title: "Component",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "type",
      title: "Type",
      type: "reference",
      to: [{ type: "componentType" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "language",
      title: "Language",
      type: "reference",
      to: [{ type: "language" }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 200,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "code",
      title: "Code Block",
      type: "code",
      options: {
        language: "tsx",
        languageAlternatives: [{ title: "jsx", value: "jsx" }],
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
};

export default component;
