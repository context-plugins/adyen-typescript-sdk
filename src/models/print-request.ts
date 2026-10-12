import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { printOutput2Schema, type PrintOutput2 } from "./print-output2.js";

/**
 * Content of the Print Request message. It conveys the complete data to print and how to process
 * the print.
 */
export type PrintRequest = {
  /** Information to print and how to process it. */
  printOutput: PrintOutput2;
};

export const printRequestSchema: Schema<PrintRequest> = s.object<PrintRequest>({
  printOutput: printOutput2Schema,
  _keysMap: {
    printOutput: "PrintOutput",
  },
});
