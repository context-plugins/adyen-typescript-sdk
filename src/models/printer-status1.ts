import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Possible values:
 * * **NoPaper**
 * * **OK**
 * * **OutOfOrder**
 * * **PaperJam**
 * * **PaperLow**
 */
export const PrinterStatus1 = {
  Ok: "OK",
  PaperLow: "PaperLow",
  NoPaper: "NoPaper",
  PaperJam: "PaperJam",
  OutOfOrder: "OutOfOrder",
} as const;
export type PrinterStatus1 = (typeof PrinterStatus1)[keyof typeof PrinterStatus1] | (string & {});

export const printerStatus1Schema: EnumSchema<PrinterStatus1> = s.enumOf<PrinterStatus1>(PrinterStatus1);
