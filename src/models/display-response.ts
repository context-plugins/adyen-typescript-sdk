import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { outputResultSchema, type OutputResult } from "./output-result.js";

export type DisplayResponse = {
  outputResult: OutputResult[];
};

export const displayResponseSchema: Schema<DisplayResponse> = s.object<DisplayResponse>({
  outputResult: s.array(s.lazy(() => outputResultSchema)),
  _keysMap: {
    outputResult: "OutputResult",
  },
});
