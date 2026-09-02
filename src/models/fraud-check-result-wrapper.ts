import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fraudCheckResultSchema, type FraudCheckResult } from "./fraud-check-result.js";

export type FraudCheckResultWrapper = {
  fraudCheckResult?: FraudCheckResult;
};

export const fraudCheckResultWrapperSchema: Schema<FraudCheckResultWrapper> =
  s.object<FraudCheckResultWrapper>({
    fraudCheckResult: s.optional(s.lazy(() => fraudCheckResultSchema)),
    _keysMap: {
      fraudCheckResult: "FraudCheckResult",
    },
  });
