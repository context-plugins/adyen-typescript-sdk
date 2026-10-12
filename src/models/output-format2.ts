import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **BarCode**
 * * **MessageRef**
 * * **Text**
 * * **XHTML**
 */
export const OutputFormat2 = {
  MessageRef: "MessageRef",
  Text: "Text",
  Xhtml: "XHTML",
  BarCode: "BarCode",
} as const;
export type OutputFormat2 = (typeof OutputFormat2)[keyof typeof OutputFormat2] | (string & {});

export const outputFormat2Schema: EnumSchema<OutputFormat2> = s.enumOf<OutputFormat2>(OutputFormat2);
