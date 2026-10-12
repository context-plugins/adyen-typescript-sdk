import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { amountSchema, type Amount } from "./amount.js";
import { cardSchema, type Card } from "./card.js";
import { fundSource11Schema, type FundSource11 } from "./fund-source11.js";
import { nameSchema, type Name } from "./name.js";
import { recurringSchema, type Recurring } from "./recurring.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";

export type PayoutRequest = {
  /**
   * The amount information for the transaction (in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes)). For [BIN or card
   * verification](https://docs.adyen.com/payment-methods/cards/bin-data-and-card-verification)
   * requests, set amount to 0 (zero).
   */
  amount: Amount;
  /**
   * The address where to send the invoice. > The `billingAddress` object is required in the
   * following scenarios. Include all of the fields within this object. >* For 3D Secure 2
   * transactions in all browser-based and mobile implementations. >* For cross-border payouts to
   * and from Canada.
   */
  billingAddress?: Address;
  /**
   * A container for card data. > Either `bankAccount` or `card` field must be provided in a payment
   * request.
   */
  card?: Card;
  /**
   * An integer value that is added to the normal fraud score. The value can be either positive or
   * negative.
   */
  fraudOffset?: number;
  /** The person or entity funding the money. */
  fundSource?: FundSource11;
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /**
   * The recurring settings for the payment. Use this property when you want to enable [recurring
   * payments](https://docs.adyen.com/classic-integration/recurring-payments).
   */
  recurring?: Recurring;
  /**
   * The reference to uniquely identify a payment. This reference is used in all communication with
   * you about the payment status. We recommend using a unique value per payment; however, it is not
   * a requirement. If you need to provide multiple references for a transaction, separate them with
   * hyphens ("-"). Maximum length: 80 characters.
   */
  reference: string;
  /**
   * The `recurringDetailReference` you want to use for this payment. The value `LATEST` can be used
   * to select the most recently stored recurring detail.
   */
  selectedRecurringDetailReference?: string;
  /**
   * The shopper's email address. We recommend that you provide this data, as it is used in velocity
   * fraud checks. > Required for Visa and JCB transactions that require 3D Secure 2 authentication
   * if you did not include the `telephoneNumber`.
   */
  shopperEmail?: string;
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
  /** The shopper's full name. */
  shopperName?: Name;
  /**
   * Required for recurring payments. Your reference to uniquely identify this shopper, for example
   * user ID or account ID. The value is case-sensitive and must be at least three characters. >
   * Your reference must not include personally identifiable information (PII) such as name or email
   * address.
   */
  shopperReference?: string;
  /**
   * The shopper's telephone number. The phone number must include a plus sign (+) and a country
   * code (1-3 digits), followed by the number (4-15 digits). If the value you provide does not
   * follow the guidelines, we do not submit it for authentication. > Required for Visa and JCB
   * transactions that require 3D Secure 2 authentication, if you did not include the
   * `shopperEmail`.
   */
  telephoneNumber?: string;
};

export const payoutRequestSchema: Schema<PayoutRequest> = s.object<PayoutRequest>({
  amount: amountSchema,
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => cardSchema)),
  fraudOffset: s.optional(s.int()),
  fundSource: s.optional(s.lazy(() => fundSource11Schema)),
  merchantAccount: s.string(),
  recurring: s.optional(s.lazy(() => recurringSchema)),
  reference: s.string(),
  selectedRecurringDetailReference: s.optional(s.string()),
  shopperEmail: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  shopperReference: s.optional(s.string()),
  telephoneNumber: s.optional(s.string()),
});
