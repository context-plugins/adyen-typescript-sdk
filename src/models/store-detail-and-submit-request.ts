import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { addressSchema, type Address } from "./address.js";
import { amountSchema, type Amount } from "./amount.js";
import { bankAccountSchema, type BankAccount } from "./bank-account.js";
import { cardSchema, type Card } from "./card.js";
import { entityType1Schema, type EntityType1 } from "./entity-type1.js";
import { nameSchema, type Name } from "./name.js";
import { recurringSchema, type Recurring } from "./recurring.js";

export type StoreDetailAndSubmitRequest = {
  /** This field contains additional data, which may be required for a particular request. */
  additionalData?: Record<string, string>;
  /** A container object for the payable amount information of the transaction. */
  amount: Amount;
  /** A container for bank account data. > This field is mandatory if `card` is not provided. */
  bank?: BankAccount;
  /**
   * The billing address.
   *
   * > The `billingAddress` object is required for cross-border payouts to and from Canada. Include
   * all of the fields within this object.
   */
  billingAddress?: Address;
  /** A container for card data. > This field is mandatory if `bank` is not provided. */
  card?: Card;
  /**
   * The date of birth. Format: [ISO-8601](https://www.w3.org/TR/NOTE-datetime); example: YYYY-MM-DD
   * For Paysafecard it must be the same as used when registering the Paysafecard account. > This
   * field is mandatory for natural persons.
   */
  dateOfBirth: string;
  /** The type of the entity the payout is processed for. */
  entityType: EntityType1;
  /**
   * An integer value that is added to the normal fraud score. The value can be either positive or
   * negative.
   */
  fraudOffset?: number;
  /** The merchant account identifier, with which you want to process the transaction. */
  merchantAccount: string;
  /**
   * The shopper's nationality.
   *
   * A valid value is an ISO 2-character country code (e.g. 'NL').
   */
  nationality: string;
  /**
   * A container for the type of recurring contract to be retrieved.
   *
   * The recurring.contract must be set to `PAYOUT`
   */
  recurring: Recurring;
  /**
   * The merchant reference for this payment. This reference will be used in all communication to
   * the merchant about the status of the payout. Although it is a good idea to make sure it is
   * unique, this is not a requirement.
   */
  reference: string;
  /**
   * The name of the brand to make a payout to.
   *
   * For Paysafecard it must be set to `paysafecard`.
   */
  selectedBrand?: string;
  /** The shopper's email address. */
  shopperEmail: string;
  /**
   * The shopper's name.
   *
   * When the `entityType` is `Company`, the `shopperName.lastName` must contain the company name.
   */
  shopperName?: Name;
  /** The shopper's reference for the payment transaction. */
  shopperReference: string;
  /**
   * The description of this payout. This description is shown on the bank statement of the shopper
   * (if this is supported by the chosen payment method).
   */
  shopperStatement?: string;
  /** The shopper's social security number. */
  socialSecurityNumber?: string;
  /** The shopper's phone number. */
  telephoneNumber?: string;
};

export const storeDetailAndSubmitRequestSchema: Schema<StoreDetailAndSubmitRequest> =
  s.object<StoreDetailAndSubmitRequest>({
    additionalData: s.optional(s.record(s.string(), s.string())),
    amount: amountSchema,
    bank: s.optional(s.lazy(() => bankAccountSchema)),
    billingAddress: s.optional(s.lazy(() => addressSchema)),
    card: s.optional(s.lazy(() => cardSchema)),
    dateOfBirth: s.dateOnly(),
    entityType: entityType1Schema,
    fraudOffset: s.optional(s.int()),
    merchantAccount: s.string(),
    nationality: s.string(),
    recurring: recurringSchema,
    reference: s.string(),
    selectedBrand: s.optional(s.string()),
    shopperEmail: s.string(),
    shopperName: s.optional(s.lazy(() => nameSchema)),
    shopperReference: s.string(),
    shopperStatement: s.optional(s.string()),
    socialSecurityNumber: s.optional(s.string()),
    telephoneNumber: s.optional(s.string()),
  });
