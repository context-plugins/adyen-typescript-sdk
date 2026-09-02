import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutput2Schema, type DisplayOutput2 } from "./display-output2.js";
import { inputData2Schema, type InputData2 } from "./input-data2.js";

export type InputRequest = {
  displayOutput?: DisplayOutput2;
  inputData: InputData2;
};

export const inputRequestSchema: Schema<InputRequest> = s.object<InputRequest>({
  displayOutput: s.optional(s.lazy(() => displayOutput2Schema)),
  inputData: inputData2Schema,
  _keysMap: {
    displayOutput: "DisplayOutput",
    inputData: "InputData",
  },
});
