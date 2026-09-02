import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PrinterStatus = {
  Ok: "OK",
  PaperLow: "PaperLow",
  NoPaper: "NoPaper",
  PaperJam: "PaperJam",
  OutOfOrder: "OutOfOrder",
} as const;
export type PrinterStatus = (typeof PrinterStatus)[keyof typeof PrinterStatus] | (string & {});

export const printerStatusSchema: EnumSchema<PrinterStatus> = s.enumOf<PrinterStatus>(PrinterStatus);
