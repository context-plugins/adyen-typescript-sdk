import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { printOutput2Schema, type PrintOutput2 } from "./print-output2.js";

export type PrintRequest = {
  printOutput: PrintOutput2;
};

export const printRequestSchema: Schema<PrintRequest> = s.object<PrintRequest>({
  printOutput: printOutput2Schema,
  _keysMap: {
    printOutput: "PrintOutput",
  },
});
