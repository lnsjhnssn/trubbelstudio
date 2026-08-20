import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  collections: {
    work: collection({
      label: "Work",
      slugField: "title",
      path: "src/content/work/*/",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        description: fields.text({ label: "Description", multiline: true }),
        pubDate: fields.date({ label: "Publish date" }),
        updatedDate: fields.date({ label: "Updated date" }),
        link: fields.url({ label: "External link" }),
        cover: fields.image({
          label: "Cover image",
        }),
        coverAlt: fields.text({ label: "Cover alt text" }),
        subtitle: fields.text({ label: "Subtitle" }),
        imageCopyright: fields.text({ label: "Image copyright" }),
        tags: fields.multiselect({
          label: "Tags",
          options: [
            { label: "Web", value: "web" },
            { label: "Sound", value: "sound" },
            { label: "Music", value: "music" },
            { label: "Theatre", value: "theatre" },
            { label: "Film", value: "film" },
            { label: "Documentary", value: "documentary" },
            { label: "Dance", value: "dance" },
            { label: "Mix", value: "mix" },
            { label: "Soundtrack", value: "soundtrack" },
            { label: "Application", value: "application" },
            { label: "Portfolio", value: "portfolio" },
            { label: "Discography", value: "discography" },
          ],
        }),
        published: fields.checkbox({
          label: "Published",
          defaultValue: false,
        }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
        }),
      },
    }),
  },
  singletons: {
    about: singleton({
      label: "About",
      path: "src/content/about/",
      format: { contentField: "content" },
      schema: {
        title: fields.text({ label: "Title" }),
        content: fields.markdoc({
          label: "Content",
          extension: "md",
        }),
      },
    }),
  },
});
