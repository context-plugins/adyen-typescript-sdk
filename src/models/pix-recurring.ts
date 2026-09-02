import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount42Schema, type Amount42 } from "./amount42.js";
import { amount43Schema, type Amount43 } from "./amount43.js";
import { frequency2Schema, type Frequency2 } from "./frequency2.js";

export type PixRecurring = {
  billingDate?: string;
  businessDayOnly?: boolean;
  endsAt?: string;
  frequency?: Frequency2;
  minAmount?: Amount42;
  originalPspReference?: string;
  recurringAmount?: Amount43;
  recurringStatement?: string;
  retryPolicy?: boolean;
  startsAt?: string;
};

export const pixRecurringSchema: Schema<PixRecurring> = s.object<PixRecurring>({
  billingDate: s.optional(s.string()),
  businessDayOnly: s.optional(s.boolean()),
  endsAt: s.optional(s.string()),
  frequency: s.optional(s.lazy(() => frequency2Schema)),
  minAmount: s.optional(s.lazy(() => amount42Schema)),
  originalPspReference: s.optional(s.string()),
  recurringAmount: s.optional(s.lazy(() => amount43Schema)),
  recurringStatement: s.optional(s.string()),
  retryPolicy: s.optional(s.boolean()),
  startsAt: s.optional(s.string()),
});
