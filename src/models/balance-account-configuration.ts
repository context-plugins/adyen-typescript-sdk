import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BalanceAccountConfiguration = {
  balanceAccountId: string;
  balancePlatformPayoutScheduleId: string;
  createdAt: Date;
  currency?: string;
  description?: string;
  enabled?: boolean;
  frequency?: string;
  frequencyValue?: number;
  id?: string;
  maxPayoutAmount?: number;
  minPayoutAmount?: number;
  reference?: string;
  referenceForBeneficiary?: string;
  retainedAmount?: number;
  salesDayClosingTime?: string;
  transferInstrumentId: string;
  updatedAt?: Date;
};

export const balanceAccountConfigurationSchema: Schema<BalanceAccountConfiguration> =
  s.object<BalanceAccountConfiguration>({
    balanceAccountId: s.string(),
    balancePlatformPayoutScheduleId: s.string(),
    createdAt: s.dateTime(),
    currency: s.optional(s.string()),
    description: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    frequency: s.optional(s.string()),
    frequencyValue: s.optional(s.number()),
    id: s.optional(s.string()),
    maxPayoutAmount: s.optional(s.number()),
    minPayoutAmount: s.optional(s.number()),
    reference: s.optional(s.string()),
    referenceForBeneficiary: s.optional(s.string()),
    retainedAmount: s.optional(s.number()),
    salesDayClosingTime: s.optional(s.string()),
    transferInstrumentId: s.string(),
    updatedAt: s.optional(s.dateTime()),
  });
