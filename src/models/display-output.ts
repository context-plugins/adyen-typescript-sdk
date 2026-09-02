import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device11Schema, type Device11 } from "./device11.js";
import { infoQualify1Schema, type InfoQualify1 } from "./info-qualify1.js";
import { menuEntrySchema, type MenuEntry } from "./menu-entry.js";
import { outputContent1Schema, type OutputContent1 } from "./output-content1.js";

export type DisplayOutput = {
  responseRequiredFlag?: boolean;
  minimumDisplayTime?: number;
  device: Device11;
  infoQualify: InfoQualify1;
  outputContent: OutputContent1;
  menuEntry?: MenuEntry[];
  outputSignature?: string;
};

export const displayOutputSchema: Schema<DisplayOutput> = s.object<DisplayOutput>({
  responseRequiredFlag: s.optional(s.boolean()),
  minimumDisplayTime: s.optional(s.number()),
  device: device11Schema,
  infoQualify: infoQualify1Schema,
  outputContent: outputContent1Schema,
  menuEntry: s.optional(s.array(s.lazy(() => menuEntrySchema))),
  outputSignature: s.optional(s.string()),
  _keysMap: {
    responseRequiredFlag: "ResponseRequiredFlag",
    minimumDisplayTime: "MinimumDisplayTime",
    device: "Device",
    infoQualify: "InfoQualify",
    outputContent: "OutputContent",
    menuEntry: "MenuEntry",
    outputSignature: "OutputSignature",
  },
});
