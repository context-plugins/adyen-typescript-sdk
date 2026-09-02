import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputBarcode1Schema, type OutputBarcode1 } from "./output-barcode1.js";
import { outputFormat1Schema, type OutputFormat1 } from "./output-format1.js";
import { outputTextSchema, type OutputText } from "./output-text.js";
import { predefinedContent1Schema, type PredefinedContent1 } from "./predefined-content1.js";

export type OutputContent3 = {
  outputFormat: OutputFormat1;
  predefinedContent?: PredefinedContent1;
  outputText?: OutputText[];
  outputXhtml?: string;
  outputBarcode?: OutputBarcode1;
};

export const outputContent3Schema: Schema<OutputContent3> = s.object<OutputContent3>({
  outputFormat: outputFormat1Schema,
  predefinedContent: s.optional(s.lazy(() => predefinedContent1Schema)),
  outputText: s.optional(s.array(s.lazy(() => outputTextSchema))),
  outputXhtml: s.optional(s.string()),
  outputBarcode: s.optional(s.lazy(() => outputBarcode1Schema)),
  _keysMap: {
    outputFormat: "OutputFormat",
    predefinedContent: "PredefinedContent",
    outputText: "OutputText",
    outputXhtml: "OutputXHTML",
    outputBarcode: "OutputBarcode",
  },
});
