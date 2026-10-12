import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentMethodToStore1Schema, type PaymentMethodToStore1 } from "./payment-method-to-store1.js";
import {
  recurringProcessingModel1Schema,
  type RecurringProcessingModel1,
} from "./recurring-processing-model1.js";

export type StoredPaymentMethodRequest = {
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /** Contains the information required to store a payment method. */
  paymentMethod: PaymentMethodToStore1;
  /**
   * Defines a recurring payment type. Required when creating a token to store payment details.
   * Allowed values:
   * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed
   *   schedule.
   * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable
   *   one-click or omnichannel journeys, or simply to streamline the checkout process. Any
   *   subscription not following a fixed schedule is also considered a card-on-file transaction.
   * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction
   *   that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic
   *   top-ups when a cardholder's balance drops below a certain amount.
   */
  recurringProcessingModel: RecurringProcessingModel1;
  /**
   * The shopper's email address. We recommend that you provide this data, as it is used in velocity
   * fraud checks.
   */
  shopperEmail?: string;
  /** The IP address of a shopper. */
  shopperIp?: string;
  /** A unique identifier for the shopper (for example, user ID or account ID). */
  shopperReference: string;
};

export const storedPaymentMethodRequestSchema: Schema<StoredPaymentMethodRequest> =
  s.object<StoredPaymentMethodRequest>({
    merchantAccount: s.string(),
    paymentMethod: paymentMethodToStore1Schema,
    recurringProcessingModel: recurringProcessingModel1Schema,
    shopperEmail: s.optional(s.string()),
    shopperIp: s.optional(s.string()),
    shopperReference: s.string(),
    _keysMap: {
      shopperIp: "shopperIP",
    },
  });
