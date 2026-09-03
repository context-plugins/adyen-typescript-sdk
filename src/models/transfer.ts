import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { category3Schema, type Category3 } from "./category3.js";
import { counterpartyV31Schema, type CounterpartyV31 } from "./counterparty-v31.js";
import { directDebitInformation1Schema, type DirectDebitInformation1 } from "./direct-debit-information1.js";
import { directionSchema, type Direction } from "./direction.js";
import { executionDate1Schema, type ExecutionDate1 } from "./execution-date1.js";
import { paymentInstrument3Schema, type PaymentInstrument3 } from "./payment-instrument3.js";
import { reason2Schema, type Reason2 } from "./reason2.js";
import { resourceReference1Schema, type ResourceReference1 } from "./resource-reference1.js";
import { resourceReference5Schema, type ResourceReference5 } from "./resource-reference5.js";
import { status51Schema, type Status51 } from "./status51.js";
import { transferReview1Schema, type TransferReview1 } from "./transfer-review1.js";
import { type83Schema, type Type83 } from "./type83.js";
import {
  ultimatePartyIdentification1Schema,
  type UltimatePartyIdentification1,
} from "./ultimate-party-identification1.js";
import { categoryDataSchema, type CategoryData } from "./unions/category-data.js";

export type Transfer = {
  accountHolder?: ResourceReference5;
  amount: Amount17;
  balanceAccount?: ResourceReference1;
  category: Category3;
  categoryData?: CategoryData;
  counterparty: CounterpartyV31;
  createdAt?: Date;
  creationDate?: Date;
  description?: string;
  directDebitInformation?: DirectDebitInformation1;
  direction?: Direction;
  executionDate?: ExecutionDate1;
  id?: string;
  paymentInstrument?: PaymentInstrument3;
  reason?: Reason2;
  reference?: string;
  referenceForBeneficiary?: string;
  review?: TransferReview1;
  status: Status51;
  type?: Type83;
  ultimateParty?: UltimatePartyIdentification1;
};

export const transferSchema: Schema<Transfer> = s.object<Transfer>({
  accountHolder: s.optional(s.lazy(() => resourceReference5Schema)),
  amount: amount17Schema,
  balanceAccount: s.optional(s.lazy(() => resourceReference1Schema)),
  category: category3Schema,
  categoryData: s.optional(s.lazy(() => categoryDataSchema)),
  counterparty: counterpartyV31Schema,
  createdAt: s.optional(s.dateTime()),
  creationDate: s.optional(s.dateTime()),
  description: s.optional(s.string()),
  directDebitInformation: s.optional(s.lazy(() => directDebitInformation1Schema)),
  direction: s.optional(s.lazy(() => directionSchema)),
  executionDate: s.optional(s.lazy(() => executionDate1Schema)),
  id: s.optional(s.string()),
  paymentInstrument: s.optional(s.lazy(() => paymentInstrument3Schema)),
  reason: s.optional(s.lazy(() => reason2Schema)),
  reference: s.optional(s.string()),
  referenceForBeneficiary: s.optional(s.string()),
  review: s.optional(s.lazy(() => transferReview1Schema)),
  status: status51Schema,
  type: s.optional(s.lazy(() => type83Schema)),
  ultimateParty: s.optional(s.lazy(() => ultimatePartyIdentification1Schema)),
});
