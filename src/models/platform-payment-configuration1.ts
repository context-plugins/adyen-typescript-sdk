import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformPaymentConfiguration1 = {
  salesDayClosingTime?: Date;
  settlementDelayDays?: number;
};

export const platformPaymentConfiguration1Schema: Schema<PlatformPaymentConfiguration1> =
  s.object<PlatformPaymentConfiguration1>({
    salesDayClosingTime: s.optional(s.dateTime()),
    settlementDelayDays: s.optional(s.number()),
  });
