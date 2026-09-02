import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayOutput2Schema, type DisplayOutput2 } from "./display-output2.js";
import { inputData2Schema, type InputData2 } from "./input-data2.js";

export type InputRequest2 = {
  displayOutput?: DisplayOutput2;
  inputData: InputData2;
};

export const inputRequest2Schema: Schema<InputRequest2> = s.object<InputRequest2>({
  displayOutput: s.optional(s.lazy(() => displayOutput2Schema)),
  inputData: inputData2Schema,
  _keysMap: {
    displayOutput: "DisplayOutput",
    inputData: "InputData",
  },
});
