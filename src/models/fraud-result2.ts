import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fraudCheckResultWrapperSchema, type FraudCheckResultWrapper } from "./fraud-check-result-wrapper.js";

export type FraudResult2 = {
  accountScore: number;
  results?: FraudCheckResultWrapper[];
};

export const fraudResult2Schema: Schema<FraudResult2> = s.object<FraudResult2>({
  accountScore: s.number(),
  results: s.optional(s.array(s.lazy(() => fraudCheckResultWrapperSchema))),
});
