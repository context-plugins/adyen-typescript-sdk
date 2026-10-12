import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OutputBarcode = {
  /** Value with a Barcode coding. The barcode value to display or print. */
  barcodeValue: string;
};

export const outputBarcodeSchema: Schema<OutputBarcode> = s.object<OutputBarcode>({
  barcodeValue: s.string(),
  _keysMap: {
    barcodeValue: "BarcodeValue",
  },
});
