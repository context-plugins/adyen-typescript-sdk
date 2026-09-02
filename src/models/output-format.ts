import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OutputFormat = {
  MessageRef: "MessageRef",
  Text: "Text",
  Xhtml: "XHTML",
  BarCode: "BarCode",
} as const;
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat] | (string & {});

export const outputFormatSchema: EnumSchema<OutputFormat> = s.enumOf<OutputFormat>(OutputFormat);
