import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { loadTypeSchema, type LoadType } from "./load-type.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";

export type StoredValueLoadRequest = {
  /** The amount information for the transaction. */
  amount: Amount;
  /** The type of load you are trying to do, when absent we default to 'load' */
  loadType?: LoadType;
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /**
   * The collection that contains the type of the payment method and its specific information if
   * available
   */
  paymentMethod: Record<string, string>;
  recurringDetailReference?: string;
  /**
   * The reference to uniquely identify a payment. This reference is used in all communication with
   * you about the payment status. We recommend using a unique value per payment; however, it is not
   * a requirement. If you need to provide multiple references for a transaction, separate them with
   * hyphens ("-"). Maximum length: 80 characters.
   */
  reference: string;
  /**
   * Specifies the sales channel, through which the shopper gives their card details, and whether
   * the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper
   * interaction by default.
   *
   * This field has the following possible values:
   * * `Ecommerce` - Online transactions where the cardholder is present (online). For better
   *   authorisation rates, we recommend sending the card security code (CSC) along with the
   *   request.
   * * `ContAuth` - Card on file and/or subscription transactions, where the cardholder is known to
   *   the merchant (returning customer). If the shopper is present (online), you can supply also
   *   the CSC to improve authorisation (one-click payment).
   * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the
   *   merchant via email or telephone.
   * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment
   *   using a secure payment terminal.
   */
  shopperInteraction?: ShopperInteraction;
  shopperReference?: string;
  /** The physical store, for which this payment is processed. */
  store?: string;
};

export const storedValueLoadRequestSchema: Schema<StoredValueLoadRequest> = s.object<StoredValueLoadRequest>({
  amount: amountSchema,
  loadType: s.optional(s.lazy(() => loadTypeSchema)),
  merchantAccount: s.string(),
  paymentMethod: s.record(s.string(), s.string()),
  recurringDetailReference: s.optional(s.string()),
  reference: s.string(),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperReference: s.optional(s.string()),
  store: s.optional(s.string()),
});
