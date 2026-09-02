import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { menuEntryTag1Schema, type MenuEntryTag1 } from "./menu-entry-tag1.js";
import { outputFormat2Schema, type OutputFormat2 } from "./output-format2.js";
import { outputTextSchema, type OutputText } from "./output-text.js";
import { predefinedContentSchema, type PredefinedContent } from "./predefined-content.js";

export type MenuEntry = {
  menuEntryTag?: MenuEntryTag1;
  defaultSelectedFlag?: boolean;
  outputFormat: OutputFormat2;
  predefinedContent?: PredefinedContent;
  outputText?: OutputText[];
  outputXhtml?: string;
};

export const menuEntrySchema: Schema<MenuEntry> = s.object<MenuEntry>({
  menuEntryTag: s.optional(s.lazy(() => menuEntryTag1Schema)),
  defaultSelectedFlag: s.optional(s.boolean()),
  outputFormat: outputFormat2Schema,
  predefinedContent: s.optional(s.lazy(() => predefinedContentSchema)),
  outputText: s.optional(s.array(s.lazy(() => outputTextSchema))),
  outputXhtml: s.optional(s.string()),
  _keysMap: {
    menuEntryTag: "MenuEntryTag",
    defaultSelectedFlag: "DefaultSelectedFlag",
    outputFormat: "OutputFormat",
    predefinedContent: "PredefinedContent",
    outputText: "OutputText",
    outputXhtml: "OutputXHTML",
  },
});
