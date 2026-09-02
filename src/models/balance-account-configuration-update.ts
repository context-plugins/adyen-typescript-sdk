import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { frequency1Schema, type Frequency1 } from "./frequency1.js";

export type BalanceAccountConfigurationUpdate = {
  description?: string | null;
  enabled?: boolean | null;
  frequency?: Frequency1;
  frequencyValue?: number | null;
  maxPayoutAmount?: number | null;
  minPayoutAmount?: number | null;
  reference?: string | null;
  referenceForBeneficiary?: string | null;
  retainedAmount?: number | null;
  salesDayClosingTime?: string;
  transferInstrumentId?: string;
};

export const balanceAccountConfigurationUpdateSchema: Schema<BalanceAccountConfigurationUpdate> =
  s.object<BalanceAccountConfigurationUpdate>({
    description: s.optionalNullable(s.string()),
    enabled: s.optionalNullable(s.boolean()),
    frequency: s.optional(s.lazy(() => frequency1Schema)),
    frequencyValue: s.optionalNullable(s.number()),
    maxPayoutAmount: s.optionalNullable(s.number()),
    minPayoutAmount: s.optionalNullable(s.number()),
    reference: s.optionalNullable(s.string()),
    referenceForBeneficiary: s.optionalNullable(s.string()),
    retainedAmount: s.optionalNullable(s.number()),
    salesDayClosingTime: s.optional(s.string()),
    transferInstrumentId: s.optional(s.string()),
  });
