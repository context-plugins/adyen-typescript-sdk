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
  /** The account holder associated with the balance account involved in the transfer. */
  accountHolder?: ResourceReference5;
  /** The amount of the transfer. */
  amount: Amount17;
  /** Contains information about the balance account involved in the transfer. */
  balanceAccount?: ResourceReference1;
  /**
   * The category of the transfer.
   *
   * Possible values:
   *
   *  - **bank**: A transfer involving a [transfer
   *    instrument](https://docs.adyen.com/api-explorer/legalentity/latest/post/transferInstruments#responses-200-id)
   *    or a bank account.
   *
   * - **card**: A transfer involving a third-party card.
   *
   * - **internal**: A transfer between [balance
   *   accounts](https://docs.adyen.com/api-explorer/balanceplatform/latest/post/balanceAccounts#responses-200-id)
   *   within your platform.
   *
   * - **issuedCard**: A transfer initiated by an Adyen-issued card.
   *
   * - **platformPayment**: Funds movements related to payments that are acquired for your users.
   *
   * - **topUp**: An incoming transfer initiated by your user to top up their balance account.
   */
  category: Category3;
  /** The relevant data according to the transfer category. */
  categoryData?: CategoryData;
  /** The other party in the transfer. */
  counterparty: CounterpartyV31;
  /**
   * The date and time when the transfer was created, in ISO 8601 extended format. For example,
   * **2020-12-18T10:15:30+01:00**.
   */
  createdAt?: Date;
  /**
   * The date and time when the event was triggered, in ISO 8601 extended format. For example,
   * **2020-12-18T10:15:30+01:00**.
   *
   * @deprecated
   */
  creationDate?: Date;
  /**
   * Your description for the transfer. It is used by most banks as the transfer description. We
   * recommend sending a maximum of 140 characters, otherwise the description may be truncated.
   *
   * Supported characters: **[a-z] [A-Z] [0-9] / - ?** **: ( ) . , ' + Space**
   *
   * Supported characters for **regular** and **fast** transfers to a US counterparty: **[a-z] [A-Z]
   * [0-9] & $ % # \@** **~ = + - _ ' " ! ?**
   */
  description?: string;
  /** The details of the direct debit. */
  directDebitInformation?: DirectDebitInformation1;
  /**
   * The direction of the transfer.
   *
   * Possible values: **incoming**, **outgoing**.
   */
  direction?: Direction;
  /**
   * Contains information about the date when the transfer will be processed. The execution date
   * must be within 30 days of the current date.
   *
   * Until the execution date:
   * - The `status` of the transfer remains as **received**.
   * - The `reason` of the transfer remains as **pending**.
   */
  executionDate?: ExecutionDate1;
  /** The ID of the resource. */
  id?: string;
  /** Contains information about the payment instrument used in the transfer. */
  paymentInstrument?: PaymentInstrument3;
  /** Additional information about the status of the transfer. */
  reason?: Reason2;
  /**
   * Your reference for the transfer, used internally within your platform. If you don't provide
   * this in the request, Adyen generates a unique reference.
   */
  reference?: string;
  /**
   * A reference that is sent to the recipient. This reference is also sent in all webhooks related
   * to the transfer, so you can use it to track statuses for both the source and recipient of
   * funds.
   *
   * Supported characters: **a-z**, **A-Z**, **0-9**.The maximum length depends on the `category`.
   *
   *  - **internal**: 80 characters
   *
   * - **bank**: 35 characters when transferring to an IBAN, 15 characters for others.
   */
  referenceForBeneficiary?: string;
  /** Contains status updates related to additional reviews. */
  review?: TransferReview1;
  /**
   * The result of the transfer.
   *
   * For example:
   *
   * - **received**: an outgoing transfer request is created.
   * - **refused**: the transfer request is rejected by Adyen for one of the following reasons:
   *   - Transfer limit exceeded.
   *   - Transaction rule requirements violated.
   * - **authorised**: the transfer request is authorized and the funds are reserved.
   * - **booked**: the funds are deducted from your user's balance account.
   *  - **failed**: the transfer is rejected by the counterparty's bank.
   * - **returned**: the transfer is returned by the counterparty's bank.
   */
  status: Status51;
  /**
   * The type of transfer or transaction. For example, **refund**, **payment**,
   * **internalTransfer**, **bankTransfer**.
   */
  type?: Type83;
  /** The ultimate sender of the funds of the transfer (ultimate debtor). */
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
