import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { paymentInstrument21Schema, type PaymentInstrument21 } from "./payment-instrument21.js";
import { resourceReference3Schema, type ResourceReference3 } from "./resource-reference3.js";
import { resourceReference4Schema, type ResourceReference4 } from "./resource-reference4.js";
import { status72Schema, type Status72 } from "./status72.js";
import { transferView2Schema, type TransferView2 } from "./transfer-view2.js";

export type Transaction = {
  /** Contains information about the account holder associated with the `balanceAccount`. */
  accountHolder: ResourceReference3;
  /** Contains information about the amount of the transaction. */
  amount: Amount17;
  /** Contains information about the balance account involved in the transaction. */
  balanceAccount: ResourceReference4;
  /** The unique identifier of the balance platform. */
  balancePlatform: string;
  /** The date the transaction was booked into the balance account. */
  bookingDate: Date;
  /**
   * The date and time when the event was triggered, in ISO 8601 extended format. For example,
   * **2025-03-19T10:15:30+01:00**.
   */
  creationDate?: Date;
  /** The `description` from the `/transfers` request. */
  description?: string;
  /** The unique identifier of the transaction. */
  id: string;
  /** Contains information about the payment instrument that was used for the transaction. */
  paymentInstrument?: PaymentInstrument21;
  /**
   * The reference sent to or received from the counterparty.
   *
   * * For outgoing funds, this is the
   *   [`referenceForBeneficiary`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__resParam_referenceForBeneficiary)
   *   from the
   *   [`/transfers`](https://docs.adyen.com/api-explorer/#/transfers/latest/post/transfers__reqParam_referenceForBeneficiary)
   *   request.
   *
   *  * For incoming funds, this is the reference from the sender.
   */
  referenceForBeneficiary?: string;
  /**
   * The status of the transaction.
   *
   * Possible values:
   *
   * * **pending**: The transaction is still pending.
   *
   * * **booked**: The transaction has been booked to the balance account.
   */
  status: Status72;
  /** Contains information about the transfer related to the transaction. */
  transfer?: TransferView2;
  /** The date the transfer amount becomes available in the balance account. */
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
