import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { category3Schema, type Category3 } from "./category3.js";
import { counterpartyInfoV31Schema, type CounterpartyInfoV31 } from "./counterparty-info-v31.js";
import { executionDate3Schema, type ExecutionDate3 } from "./execution-date3.js";
import { priority1Schema, type Priority1 } from "./priority1.js";
import { transferRequestReview2Schema, type TransferRequestReview2 } from "./transfer-request-review2.js";
import { type113Schema, type Type113 } from "./type113.js";
import {
  ultimatePartyIdentification1Schema,
  type UltimatePartyIdentification1,
} from "./ultimate-party-identification1.js";

export type TransferInfo = {
  amount: Amount17;
  balanceAccountId?: string;
  category: Category3;
  counterparty: CounterpartyInfoV31;
  description?: string;
  executionDate?: ExecutionDate3;
  paymentInstrumentId?: string;
  priorities?: Priority1[];
  priority?: Priority1;
  reference?: string;
  referenceForBeneficiary?: string;
  review?: TransferRequestReview2;
  type?: Type113;
  ultimateParty?: UltimatePartyIdentification1;
};

export const transferInfoSchema: Schema<TransferInfo> = s.object<TransferInfo>({
  amount: amount17Schema,
  balanceAccountId: s.optional(s.string()),
  category: category3Schema,
  counterparty: counterpartyInfoV31Schema,
  description: s.optional(s.string()),
  executionDate: s.optional(s.lazy(() => executionDate3Schema)),
  paymentInstrumentId: s.optional(s.string()),
  priorities: s.optional(s.array(s.lazy(() => priority1Schema))),
  priority: s.optional(s.lazy(() => priority1Schema)),
  reference: s.optional(s.string()),
  referenceForBeneficiary: s.optional(s.string()),
  review: s.optional(s.lazy(() => transferRequestReview2Schema)),
  type: s.optional(s.lazy(() => type113Schema)),
  ultimateParty: s.optional(s.lazy(() => ultimatePartyIdentification1Schema)),
});
