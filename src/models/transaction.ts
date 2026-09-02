import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { paymentInstrument21Schema, type PaymentInstrument21 } from "./payment-instrument21.js";
import { resourceReference3Schema, type ResourceReference3 } from "./resource-reference3.js";
import { resourceReference4Schema, type ResourceReference4 } from "./resource-reference4.js";
import { status72Schema, type Status72 } from "./status72.js";
import { transferView2Schema, type TransferView2 } from "./transfer-view2.js";

export type Transaction = {
  accountHolder: ResourceReference3;
  amount: Amount17;
  balanceAccount: ResourceReference4;
  balancePlatform: string;
  bookingDate: Date;
  creationDate?: Date;
  description?: string;
  id: string;
  paymentInstrument?: PaymentInstrument21;
  referenceForBeneficiary?: string;
  status: Status72;
  transfer?: TransferView2;
  valueDate: Date;
};

export const transactionSchema: Schema<Transaction> = s.object<Transaction>({
  accountHolder: resourceReference3Schema,
  amount: amount17Schema,
  balanceAccount: resourceReference4Schema,
  balancePlatform: s.string(),
  bookingDate: s.dateTime(),
  creationDate: s.optional(s.dateTime()),
  description: s.optional(s.string()),
  id: s.string(),
  paymentInstrument: s.optional(s.lazy(() => paymentInstrument21Schema)),
  referenceForBeneficiary: s.optional(s.string()),
  status: status72Schema,
  transfer: s.optional(s.lazy(() => transferView2Schema)),
  valueDate: s.dateTime(),
});
