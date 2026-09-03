import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { balanceMutationSchema, type BalanceMutation } from "./balance-mutation.js";
import { category3Schema, type Category3 } from "./category3.js";
import { directDebitInformation1Schema, type DirectDebitInformation1 } from "./direct-debit-information1.js";
import { directionSchema, type Direction } from "./direction.js";
import { executionDate1Schema, type ExecutionDate1 } from "./execution-date1.js";
import { externalReason2Schema, type ExternalReason2 } from "./external-reason2.js";
import { networkReason2Schema, type NetworkReason2 } from "./network-reason2.js";
import { paymentInstrument3Schema, type PaymentInstrument3 } from "./payment-instrument3.js";
import { reason2Schema, type Reason2 } from "./reason2.js";
import { resourceReference1Schema, type ResourceReference1 } from "./resource-reference1.js";
import { resourceReference5Schema, type ResourceReference5 } from "./resource-reference5.js";
import { status51Schema, type Status51 } from "./status51.js";
import { transactionRulesResult2Schema, type TransactionRulesResult2 } from "./transaction-rules-result2.js";
import { transferEventSchema, type TransferEvent } from "./transfer-event.js";
import {
  transferNotificationCounterParty2Schema,
  type TransferNotificationCounterParty2,
} from "./transfer-notification-counter-party2.js";
import { transferReview1Schema, type TransferReview1 } from "./transfer-review1.js";
import { type83Schema, type Type83 } from "./type83.js";
import {
  ultimatePartyIdentification1Schema,
  type UltimatePartyIdentification1,
} from "./ultimate-party-identification1.js";
import { categoryDataSchema, type CategoryData } from "./unions/category-data.js";
import { tracingSchema, type Tracing } from "./unions/tracing.js";
import { trackingSchema, type Tracking } from "./unions/tracking.js";

export type TransferData = {
  accountHolder?: ResourceReference5;
  amount: Amount17;
  balanceAccount?: ResourceReference1;
  balancePlatform?: string;
  balances?: BalanceMutation[];
  category: Category3;
  categoryData?: CategoryData;
  counterparty?: TransferNotificationCounterParty2;
  createdAt?: Date;
  creationDate?: Date;
  description?: string;
  directDebitInformation?: DirectDebitInformation1;
  direction?: Direction;
  eventId?: string;
  events?: TransferEvent[];
  executionDate?: ExecutionDate1;
  externalReason?: ExternalReason2;
  id?: string;
  networkReason?: NetworkReason2;
  paymentInstrument?: PaymentInstrument3;
  reason?: Reason2;
  reference?: string;
  referenceForBeneficiary?: string;
  review?: TransferReview1;
  sequenceNumber?: number;
  status: Status51;
  tracing?: Tracing;
  tracking?: Tracking;
  transactionRulesResult?: TransactionRulesResult2;
  type?: Type83;
  ultimateParty?: UltimatePartyIdentification1;
  updatedAt?: Date;
};

export const transferDataSchema: Schema<TransferData> = s.object<TransferData>({
  accountHolder: s.optional(s.lazy(() => resourceReference5Schema)),
  amount: amount17Schema,
  balanceAccount: s.optional(s.lazy(() => resourceReference1Schema)),
  balancePlatform: s.optional(s.string()),
  balances: s.optional(s.array(s.lazy(() => balanceMutationSchema))),
  category: category3Schema,
  categoryData: s.optional(s.lazy(() => categoryDataSchema)),
  counterparty: s.optional(s.lazy(() => transferNotificationCounterParty2Schema)),
  createdAt: s.optional(s.dateTime()),
  creationDate: s.optional(s.dateTime()),
  description: s.optional(s.string()),
  directDebitInformation: s.optional(s.lazy(() => directDebitInformation1Schema)),
  direction: s.optional(s.lazy(() => directionSchema)),
  eventId: s.optional(s.string()),
  events: s.optional(s.array(s.lazy(() => transferEventSchema))),
  executionDate: s.optional(s.lazy(() => executionDate1Schema)),
  externalReason: s.optional(s.lazy(() => externalReason2Schema)),
  id: s.optional(s.string()),
  networkReason: s.optional(s.lazy(() => networkReason2Schema)),
  paymentInstrument: s.optional(s.lazy(() => paymentInstrument3Schema)),
  reason: s.optional(s.lazy(() => reason2Schema)),
  reference: s.optional(s.string()),
  referenceForBeneficiary: s.optional(s.string()),
  review: s.optional(s.lazy(() => transferReview1Schema)),
  sequenceNumber: s.optional(s.number()),
  status: status51Schema,
  tracing: s.optional(s.lazy(() => tracingSchema)),
  tracking: s.optional(s.lazy(() => trackingSchema)),
  transactionRulesResult: s.optional(s.lazy(() => transactionRulesResult2Schema)),
  type: s.optional(s.lazy(() => type83Schema)),
  ultimateParty: s.optional(s.lazy(() => ultimatePartyIdentification1Schema)),
  updatedAt: s.optional(s.dateTime()),
});
