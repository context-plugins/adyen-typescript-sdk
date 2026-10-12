import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { mandateBankAccount2Schema, type MandateBankAccount2 } from "./mandate-bank-account2.js";
import { mandateStatus2Schema, type MandateStatus2 } from "./mandate-status2.js";
import { mandateType2Schema, type MandateType2 } from "./mandate-type2.js";

export type Mandate1 = {
  /** The unique identifier of the balance account linked to the payment instrument. */
  balanceAccountId?: string;
  /** Contains information to identify the counterparty. */
  counterparty?: MandateBankAccount2;
  /** The date when the mandate was created. */
  createdAt?: Date;
  /** The unique identifier of the mandate. */
  id?: string;
  /** The unique identifier of the payment instrument linked to the mandate. */
  paymentInstrumentId?: string;
  /**
   * The status of the mandate.
   *
   * Possible values: **pending**, **approved**, **cancelled**.
   */
  status?: MandateStatus2;
  /** The type of mandate. Possible value: **bacs**. */
  type?: MandateType2;
  /** The date when the mandate was updated. */
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
