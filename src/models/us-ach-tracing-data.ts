import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UsAchTracingData = {
  /**
   * The ACH trace number. This is a unique 15-digit identifier assigned to transfers processed by
   * [ACH](https://fiscal.treasury.gov/payments-from-government/automated-clearing-house-ach).
   */
  traceNumber: string;
  /** **usAch** @default "usAch" */
  type?: "usAch";
};

export const usAchTracingDataSchema: Schema<UsAchTracingData> = s.object<UsAchTracingData>({
  traceNumber: s.string(),
  type: s.defaulted(s.literal("usAch"), "usAch"),
});
