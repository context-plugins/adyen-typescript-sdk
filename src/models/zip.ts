import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type58Schema, type Type58 } from "./type58.js";

export type Zip = {
  checkoutAttemptId?: string;
  clickAndCollect?: string;
  recurringDetailReference?: string;
  sdkData?: string;
  storedPaymentMethodId?: string;
  type?: Type58;
};

export const zipSchema: Schema<Zip> = s.object<Zip>({
  checkoutAttemptId: s.optional(s.string()),
  clickAndCollect: s.optional(s.string()),
  recurringDetailReference: s.optional(s.string()),
  sdkData: s.optional(s.string()),
  storedPaymentMethodId: s.optional(s.string()),
  type: s.optional(s.lazy(() => type58Schema)),
});
