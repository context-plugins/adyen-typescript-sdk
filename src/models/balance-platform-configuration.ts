import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { localTime2Schema, type LocalTime2 } from "./local-time2.js";

export type BalancePlatformConfiguration = {
  automaticApplication?: boolean;
  balancePlatformId: string;
  countryCode?: string;
  createdAt: Date;
  currency?: string;
  defaultDescription?: string;
  defaultFrequency?: string;
  defaultFrequencyValue?: number;
  defaultReference?: string;
  defaultReferenceForBeneficiary?: string;
  enabled?: boolean;
  id?: string;
  maxPayoutAmount?: number;
  minPayoutAmount?: number;
  payoutScheduleDescription: string;
  retainedAmount?: number;
  updatedAt?: Date;
  userSettlementDelay: number;
  userSettlementTime: LocalTime2;
  userSettlementTimeZone: string;
};

export const balancePlatformConfigurationSchema: Schema<BalancePlatformConfiguration> =
  s.object<BalancePlatformConfiguration>({
    automaticApplication: s.optional(s.boolean()),
    balancePlatformId: s.string(),
    countryCode: s.optional(s.string()),
    createdAt: s.dateTime(),
    currency: s.optional(s.string()),
    defaultDescription: s.optional(s.string()),
    defaultFrequency: s.optional(s.string()),
    defaultFrequencyValue: s.optional(s.number()),
    defaultReference: s.optional(s.string()),
    defaultReferenceForBeneficiary: s.optional(s.string()),
    enabled: s.optional(s.boolean()),
    id: s.optional(s.string()),
    maxPayoutAmount: s.optional(s.number()),
    minPayoutAmount: s.optional(s.number()),
    payoutScheduleDescription: s.string(),
    retainedAmount: s.optional(s.number()),
    updatedAt: s.optional(s.dateTime()),
    userSettlementDelay: s.number(),
    userSettlementTime: localTime2Schema,
    userSettlementTimeZone: s.string(),
  });
