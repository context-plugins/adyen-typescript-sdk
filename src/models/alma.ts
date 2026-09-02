import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { feeTypeSchema, type FeeType } from "./fee-type.js";
import { type3Schema, type Type3 } from "./type3.js";

export type Alma = {
  checkoutAttemptId?: string;
  feeType?: FeeType;
  sdkData?: string;
  type?: Type3;
};

export const almaSchema: Schema<Alma> = s.object<Alma>({
  checkoutAttemptId: s.optional(s.string()),
  feeType: s.optional(s.lazy(() => feeTypeSchema)),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type3Schema)),
});
