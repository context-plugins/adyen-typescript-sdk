import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { tokenRequestedType1Schema, type TokenRequestedType1 } from "./token-requested-type1.js";

/**
 * Surrogate of the PAN (Primary Account Number) of the payment card to identify the payment mean of
 * the customer. It allows, for a merchant, to identify the customer. Restriction of product payable
 * by a card.
 */
export type PaymentToken1 = {
  /**
   * Type of token replacing the PAN of a payment card to identify the payment mean of the customer.
   * It allows, for a merchant, to use a token for a transaction only or for a longer period.
   * Possible values:
   * * **Customer**
   * * **Transaction**
   */
  tokenRequestedType: TokenRequestedType1;
  /**
   * Payment token replacing the PAN of the payment card to identify the payment mean of the
   * customer.
   */
  tokenValue: string;
  /** Expiry date and time. Limits the validity of a payment token. */
  expiryDateTime?: Date;
};

export const paymentToken1Schema: Schema<PaymentToken1> = s.object<PaymentToken1>({
  tokenRequestedType: tokenRequestedType1Schema,
  tokenValue: s.string(),
  expiryDateTime: s.optional(s.dateTime()),
  _keysMap: {
    tokenRequestedType: "TokenRequestedType",
    tokenValue: "TokenValue",
    expiryDateTime: "ExpiryDateTime",
  },
});
