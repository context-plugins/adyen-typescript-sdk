import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputResultSchema, type OutputResult } from "./output-result.js";

/**
 * It conveys the result of the display, parallel to the message request, except if response not
 * required and absent. Content of the Display Response message.
 */
export type DisplayResponse = {
  /**
   * Information related to the result the output (display, print, input). One per DisplayOutput
   * item of the request, and in the same order.
   */
  outputResult: OutputResult[];
};

export const displayResponseSchema: Schema<DisplayResponse> = s.object<DisplayResponse>({
  outputResult: s.array(s.lazy(() => outputResultSchema)),
  _keysMap: {
    outputResult: "OutputResult",
  },
});
