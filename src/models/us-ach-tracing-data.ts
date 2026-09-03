import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsAchTracingData = {
  traceNumber: string;
  type: "usAch";
};

export const usAchTracingDataSchema: Schema<UsAchTracingData> = s.object<UsAchTracingData>({
  traceNumber: s.string(),
  type: s.literal("usAch"),
});
