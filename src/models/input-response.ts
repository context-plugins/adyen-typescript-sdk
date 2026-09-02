import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputResult2Schema, type InputResult2 } from "./input-result2.js";
import { outputResult1Schema, type OutputResult1 } from "./output-result1.js";

export type InputResponse = {
  outputResult?: OutputResult1;
  inputResult: InputResult2;
};

export const inputResponseSchema: Schema<InputResponse> = s.object<InputResponse>({
  outputResult: s.optional(s.lazy(() => outputResult1Schema)),
  inputResult: inputResult2Schema,
  _keysMap: {
    outputResult: "OutputResult",
    inputResult: "InputResult",
  },
});
