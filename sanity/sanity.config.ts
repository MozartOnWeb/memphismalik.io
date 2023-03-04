import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "../sanity/schemas";

export default defineConfig({
  name: "default",
  title: "next-sanity-boilerplate",

  projectId: "u4kb8g2o",
  dataset: "production",

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
