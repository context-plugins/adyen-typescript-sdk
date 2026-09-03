import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { status6Schema, type Status6 } from "./status6.js";
import { topUpAmount1Schema, type TopUpAmount1 } from "./top-up-amount1.js";
import { topUpCounterparty1Schema, type TopUpCounterparty1 } from "./top-up-counterparty1.js";
import { trigger1Schema, type Trigger1 } from "./trigger1.js";

export type RecurringTopUp = {
  counterparty: TopUpCounterparty1;
  description: string;
  id: string;
  referenceForBeneficiary?: string;
  status?: Status6;
  topUpAmount: TopUpAmount1;
  trigger: Trigger1;
};

export const recurringTopUpSchema: Schema<RecurringTopUp> = s.object<RecurringTopUp>({
  counterparty: topUpCounterparty1Schema,
  description: s.string(),
  id: s.string(),
  referenceForBeneficiary: s.optional(s.string()),
  status: s.optional(s.lazy(() => status6Schema)),
  topUpAmount: topUpAmount1Schema,
  trigger: trigger1Schema,
});
