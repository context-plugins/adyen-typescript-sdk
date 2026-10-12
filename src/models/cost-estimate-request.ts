import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import {
  costEstimateAssumptions1Schema,
  type CostEstimateAssumptions1,
} from "./cost-estimate-assumptions1.js";
import { merchantDetails2Schema, type MerchantDetails2 } from "./merchant-details2.js";
import { recurringSchema, type Recurring } from "./recurring.js";
import { shopperInteractionSchema, type ShopperInteraction } from "./shopper-interaction.js";

export type CostEstimateRequest = {
  /** The transaction amount used as a base for the cost estimation. */
  amount: Amount;
  /**
   * Assumptions made for the expected characteristics of the transaction, for which the charges are
   * being estimated.
   */
  assumptions?: CostEstimateAssumptions1;
  /**
   * The card number (4-19 characters) for PCI compliant use cases. Do not use any separators.
   *
   * > Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.
   */
  cardNumber?: string;
  /**
   * Encrypted data that stores card information for non PCI-compliant use cases. The encrypted data
   * must be created with the Checkout Card Component or Secured Fields Component, and must contain
   * the `encryptedCardNumber` field.
   *
   * > Either the `cardNumber` or `encryptedCardNumber` field must be provided in a payment request.
   */
  encryptedCardNumber?: string;
  /** The merchant account identifier you want to process the (transaction) request with. */
  merchantAccount: string;
  /** Additional data for merchants who don't use Adyen as the payment authorisation gateway. */
  merchantDetails?: MerchantDetails2;
  /**
   * The recurring settings for the payment. Use this property when you want to enable [recurring
   * payments](https://docs.adyen.com/online-payments/tokenization).
   */
  recurring?: Recurring;
  /**
   * The `recurringDetailReference` you want to use for this cost estimate. The value `LATEST` can
   * be used to select the most recently stored recurring detail.
   */
  selectedRecurringDetailReference?: string;
  /**
   * Specifies the sales channel, through which the shopper gives their card details, and whether
   * the shopper is a returning customer. For the web service API, Adyen assumes Ecommerce shopper
   * interaction by default.
   *
   * This field has the following possible values:
   * * `Ecommerce` - Online transactions where the cardholder is present (online). For better
   *   authorisation rates, we recommend sending the card security code (CSC) along with the
   *   request.
   * * `ContAuth` - Card on file and/or subscription transactions, where the card holder is known to
   *   the merchant (returning customer). If the shopper is present (online), you can supply also
   *   the CSC to improve authorisation (one-click payment).
   * * `Moto` - Mail-order and telephone-order transactions where the shopper is in contact with the
   *   merchant via email or telephone.
   * * `POS` - Point-of-sale transactions where the shopper is physically present to make a payment
   *   using a secure payment terminal.
   */
  shopperInteraction?: ShopperInteraction;
  /**
   * Required for recurring payments. Your reference to uniquely identify this shopper, for example
   * user ID or account ID. The value is case-sensitive and must be at least three characters. >
   * Your reference must not include personally identifiable information (PII) such as name or email
   * address.
   */
  shopperReference?: string;
};

export const costEstimateRequestSchema: Schema<CostEstimateRequest> = s.object<CostEstimateRequest>({
  amount: amountSchema,
  assumptions: s.optional(s.lazy(() => costEstimateAssumptions1Schema)),
  cardNumber: s.optional(s.string()),
  encryptedCardNumber: s.optional(s.string()),
  merchantAccount: s.string(),
  merchantDetails: s.optional(s.lazy(() => merchantDetails2Schema)),
  recurring: s.optional(s.lazy(() => recurringSchema)),
  selectedRecurringDetailReference: s.optional(s.string()),
  shopperInteraction: s.optional(s.lazy(() => shopperInteractionSchema)),
  shopperReference: s.optional(s.string()),
});
