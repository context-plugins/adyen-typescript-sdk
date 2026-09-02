import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type FraudCheckResult = {
  accountScore: number;
  checkId: number;
  name: string;
};

export const fraudCheckResultSchema: Schema<FraudCheckResult> = s.object<FraudCheckResult>({
  accountScore: s.number(),
  checkId: s.number(),
  name: s.string(),
});
