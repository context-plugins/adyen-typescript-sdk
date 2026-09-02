import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type PlatformPaymentConfiguration = {
  salesDayClosingTime?: Date;
  settlementDelayDays?: number;
};

export const platformPaymentConfigurationSchema: Schema<PlatformPaymentConfiguration> =
  s.object<PlatformPaymentConfiguration>({
    salesDayClosingTime: s.optional(s.dateTime()),
    settlementDelayDays: s.optional(s.number()),
  });
