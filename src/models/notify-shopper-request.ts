import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";

export type NotifyShopperRequest = {
  /** The amount of the upcoming payment. */
  amount: Amount;
  /**
   * Date on which the subscription amount will be debited from the shopper. In YYYY-MM-DD format
   */
  billingDate?: string;
  /** Sequence of the debit. Depends on Frequency and Billing Attempts Rule. */
  billingSequenceNumber?: string;
  /**
   * Reference of Pre-debit notification that is displayed to the shopper. Optional field. Maps to
   * reference if missing
   */
  displayedReference?: string;
  /** The merchant account identifier with which you want to process the transaction. */
  merchantAccount: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  recurringDetailReference?: string;
  /** Pre-debit notification reference sent by the merchant. This is a mandatory field */
  reference: string;
  /**
   * The ID that uniquely identifies the shopper.
   *
   * This `shopperReference` must be the same as the `shopperReference` used in the initial payment.
   */
  shopperReference: string;
  /** This is the `recurringDetailReference` returned in the response when you created the token. */
  storedPaymentMethodId?: string;
};

export const notifyShopperRequestSchema: Schema<NotifyShopperRequest> = s.object<NotifyShopperRequest>({
  amount: amountSchema,
  billingDate: s.optional(s.string()),
  billingSequenceNumber: s.optional(s.string()),
  displayedReference: s.optional(s.string()),
  merchantAccount: s.string(),
  recurringDetailReference: s.optional(s.string()),
  reference: s.string(),
  shopperReference: s.string(),
  storedPaymentMethodId: s.optional(s.string()),
});
