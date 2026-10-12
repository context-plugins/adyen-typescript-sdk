import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { inputResult2Schema, type InputResult2 } from "./input-result2.js";
import { outputResult1Schema, type OutputResult1 } from "./output-result1.js";

/**
 * It conveys the result of the input or the result of the outputs, parallel to the message request,
 * except if response not required and absent. Content of the Input Response message.
 */
export type InputResponse = {
  /**
   * Information related to the result the output (display, print, input). If DisplayOutput present
   * in the request.
   */
  outputResult?: OutputResult1;
  /** Contains the result and the content of the input. */
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
