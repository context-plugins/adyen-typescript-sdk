import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mandateBankAccount2Schema, type MandateBankAccount2 } from "./mandate-bank-account2.js";
import { mandateStatus2Schema, type MandateStatus2 } from "./mandate-status2.js";
import { mandateType2Schema, type MandateType2 } from "./mandate-type2.js";

export type Mandate1 = {
  balanceAccountId?: string;
  counterparty?: MandateBankAccount2;
  createdAt?: Date;
  id?: string;
  paymentInstrumentId?: string;
  status?: MandateStatus2;
  type?: MandateType2;
  updatedAt?: Date;
};

export const mandate1Schema: Schema<Mandate1> = s.object<Mandate1>({
  balanceAccountId: s.optional(s.string()),
  counterparty: s.optional(s.lazy(() => mandateBankAccount2Schema)),
  createdAt: s.optional(s.dateTime()),
  id: s.optional(s.string()),
  paymentInstrumentId: s.optional(s.string()),
  status: s.optional(s.lazy(() => mandateStatus2Schema)),
  type: s.optional(s.lazy(() => mandateType2Schema)),
  updatedAt: s.optional(s.dateTime()),
});
