import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OutputBarcode1 = {
  barcodeValue: string;
};

export const outputBarcode1Schema: Schema<OutputBarcode1> = s.object<OutputBarcode1>({
  barcodeValue: s.string(),
  _keysMap: {
    barcodeValue: "BarcodeValue",
  },
});
