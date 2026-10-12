import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Barcode content to display or print. Mandatory if `OutputFormat` is Barcode, not allowed
 * otherwise.
 */
export type OutputBarcode1 = {
  /** Value with a Barcode coding. The barcode value to display or print. */
  barcodeValue: string;
};

export const outputBarcode1Schema: Schema<OutputBarcode1> = s.object<OutputBarcode1>({
  barcodeValue: s.string(),
  _keysMap: {
    barcodeValue: "BarcodeValue",
  },
});
