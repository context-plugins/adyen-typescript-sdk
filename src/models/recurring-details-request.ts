import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { recurringSchema, type Recurring } from "./recurring.js";

export type RecurringDetailsRequest = {
  merchantAccount: string;
  recurring?: Recurring;
  shopperReference: string;
};

export const recurringDetailsRequestSchema: Schema<RecurringDetailsRequest> =
  s.object<RecurringDetailsRequest>({
    merchantAccount: s.string(),
    recurring: s.optional(s.lazy(() => recurringSchema)),
    shopperReference: s.string(),
  });
