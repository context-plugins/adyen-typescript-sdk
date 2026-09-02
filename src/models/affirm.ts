import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type1Schema, type Type1 } from "./type1.js";

export type Affirm = {
  checkoutAttemptId?: string;
  sdkData?: string;
  type?: Type1;
};

export const affirmSchema: Schema<Affirm> = s.object<Affirm>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.optional(s.lazy(() => type1Schema)),
});
