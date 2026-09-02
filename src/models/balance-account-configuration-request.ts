import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frequency1Schema, type Frequency1 } from "./frequency1.js";

export type BalanceAccountConfigurationRequest = {
  balancePlatformPayoutScheduleId: string;
  currency?: string;
  description?: string;
  enabled?: boolean;
  frequency: Frequency1;
  frequencyValue?: number;
  maxPayoutAmount?: number;
  minPayoutAmount?: number;
  reference?: string;
  referenceForBeneficiary?: string;
  retainedAmount?: number;
  salesDayClosingTime?: string;
  transferInstrumentId: string;
};

export const balanceAccountConfigurationRequestSchema: Schema<BalanceAccountConfigurationRequest> =
  s.object<BalanceAccountConfigurationRequest>({
    balancePlatformPayoutScheduleId: s.string(),
    currency: s.optional(s.string()),
    description: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    frequency: frequency1Schema,
    frequencyValue: s.optional(s.number()),
    maxPayoutAmount: s.optional(s.number()),
    minPayoutAmount: s.optional(s.number()),
    reference: s.optional(s.string()),
    referenceForBeneficiary: s.optional(s.string()),
    retainedAmount: s.optional(s.number()),
    salesDayClosingTime: s.optional(s.string()),
    transferInstrumentId: s.string(),
  });
