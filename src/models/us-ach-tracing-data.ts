import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type282Schema, type Type282 } from "./type282.js";

export type UsAchTracingData = {
  traceNumber: string;
  type: Type282;
};

export const usAchTracingDataSchema: Schema<UsAchTracingData> = s.object<UsAchTracingData>({
  traceNumber: s.string(),
  type: type282Schema,
});
