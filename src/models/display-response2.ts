import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputResultSchema, type OutputResult } from "./output-result.js";

/** Content of the Display Response message. */
export type DisplayResponse2 = {
  /**
   * Information related to the result the output (display, print, input). One per DisplayOutput
   * item of the request, and in the same order.
   */
  outputResult: OutputResult[];
};

export const displayResponse2Schema: Schema<DisplayResponse2> = s.object<DisplayResponse2>({
  outputResult: s.array(s.lazy(() => outputResultSchema)),
  _keysMap: {
    outputResult: "OutputResult",
  },
});
