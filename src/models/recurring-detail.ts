import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { cardSchema, type Card } from "./card.js";
import { nameSchema, type Name } from "./name.js";
import { tokenDetailsSchema, type TokenDetails } from "./token-details.js";

export type RecurringDetail = {
  /**
   * This field contains additional data, which may be returned in a particular response.
   *
   * The additionalData object consists of entries, each of which includes the key and value.
   */
  additionalData?: Record<string, string>;
  /**
   * The alias of the credit card number.
   *
   * Applies only to recurring contracts storing credit card details
   */
  alias?: string;
  /**
   * The alias type of the credit card number.
   *
   * Applies only to recurring contracts storing credit card details.
   */
  aliasType?: string;
  /** A container for bank account data. */
  bank?: BankAccount;
  /** The billing address. */
  billingAddress?: Address;
  /** A container for card data. */
  card?: Card;
  /** Types of recurring contracts. */
  contractTypes?: string[];
  /** The date when the recurring details were created. */
  creationDate?: Date;
  /** The `pspReference` of the first recurring payment that created the recurring detail. */
  firstPspReference?: string;
  /** An optional descriptive name for this recurring detail. */
  name?: string;
  /**
   * Returned in the response if you are not tokenizing with Adyen and are using the
   * Merchant-initiated transactions (MIT) framework from Mastercard or Visa.
   *
   * This contains either the Mastercard Trace ID or the Visa Transaction ID.
   */
  networkTxReference?: string;
  /**
   * The type or sub-brand of a payment method used, e.g. Visa Debit, Visa Corporate, etc. For more
   * information, refer to
   * [PaymentMethodVariant](https://docs.adyen.com/development-resources/paymentmethodvariant).
   */
  paymentMethodVariant?: string;
  /** The reference that uniquely identifies the recurring detail. */
  recurringDetailReference: string;
  /** The name of the shopper. */
  shopperName?: Name;
  /** A shopper's social security number (only in countries where it is legal to collect). */
  socialSecurityNumber?: string;
  tokenDetails?: TokenDetails;
  /** The unique identifier for the transaction link, used for Mastercard recurring transactions. */
  transactionLinkId?: string;
  /** The payment method, such as “mc", "visa", "ideal", "paypal". */
  variant: string;
};

export const recurringDetailSchema: Schema<RecurringDetail> = s.object<RecurringDetail>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  alias: s.optional(s.string()),
  aliasType: s.optional(s.string()),
  bank: s.optional(s.lazy(() => bankAccountSchema)),
  billingAddress: s.optional(s.lazy(() => addressSchema)),
  card: s.optional(s.lazy(() => cardSchema)),
  contractTypes: s.optional(s.array(s.string())),
  creationDate: s.optional(s.dateTime()),
  firstPspReference: s.optional(s.string()),
  name: s.optional(s.string()),
  networkTxReference: s.optional(s.string()),
  paymentMethodVariant: s.optional(s.string()),
  recurringDetailReference: s.string(),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  socialSecurityNumber: s.optional(s.string()),
  tokenDetails: s.optional(s.lazy(() => tokenDetailsSchema)),
  transactionLinkId: s.optional(s.string()),
  variant: s.string(),
});
