import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const OutputFormat1 = {
  MessageRef: "MessageRef",
  Text: "Text",
  Xhtml: "XHTML",
  BarCode: "BarCode",
} as const;
export type OutputFormat1 = (typeof OutputFormat1)[keyof typeof OutputFormat1] | (string & {});

export const outputFormat1Schema: EnumSchema<OutputFormat1> = s.enumOf<OutputFormat1>(OutputFormat1);
