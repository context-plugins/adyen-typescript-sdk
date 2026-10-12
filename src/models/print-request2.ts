import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { printOutput2Schema, type PrintOutput2 } from "./print-output2.js";

/** Content of the Print Request message. */
export type PrintRequest2 = {
  /** Information to print and how to process it. */
  printOutput: PrintOutput2;
};

export const printRequest2Schema: Schema<PrintRequest2> = s.object<PrintRequest2>({
  printOutput: printOutput2Schema,
  _keysMap: {
    printOutput: "PrintOutput",
  },
});
