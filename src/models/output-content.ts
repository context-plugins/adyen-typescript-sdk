import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputBarcode1Schema, type OutputBarcode1 } from "./output-barcode1.js";
import { outputFormat1Schema, type OutputFormat1 } from "./output-format1.js";
import { outputTextSchema, type OutputText } from "./output-text.js";
import { predefinedContent1Schema, type PredefinedContent1 } from "./predefined-content1.js";

/** Content to display or print. This is a sequence of elements if they have different formats. */
export type OutputContent = {
  /**
   * Format of the content to display or print. Possible values:
   * * **BarCode**
   * * **MessageRef**
   * * **Text**
   * * **XHTML**
   */
  outputFormat: OutputFormat1;
  /**
   * Reference of a predefined message to display or print. Mandatory, if `OutputFormat` is
   * MessageRef, not allowed otherwise.
   */
  predefinedContent?: PredefinedContent1;
  /**
   * Content of text message to display or print. Mandatory, if `OutputFormat` is Text, not allowed
   * otherwise. One instance of `OutputText` per shared format.
   */
  outputText?: OutputText[];
  /**
   * XHTML document body containing the message to display or print. Mandatory if `OutputFormat` is
   * XHTML, not allowed otherwise.
   */
  outputXhtml?: string;
  /**
   * Barcode content to display or print. Mandatory if `OutputFormat` is Barcode, not allowed
   * otherwise.
   */
  outputBarcode?: OutputBarcode1;
};

export const outputContentSchema: Schema<OutputContent> = s.object<OutputContent>({
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
