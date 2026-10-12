import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { Type1, type1Schema } from "./type1.js";

export type Affirm = {
  /** The checkout attempt identifier. */
  checkoutAttemptId?: string;
  /** Base64-encoded JSON object containing SDK related parameters required by the SDK */
  sdkData?: string;
  /** **affirm** @default Type1.Affirm */
  type?: Type1;
};

export const affirmSchema: Schema<Affirm> = s.object<Affirm>({
  checkoutAttemptId: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  type: s.defaulted(type1Schema, Type1.Affirm),
});
