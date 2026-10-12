import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address5Schema, type Address5 } from "./address5.js";
import { tokenMandate2Schema, type TokenMandate2 } from "./token-mandate2.js";

export type StoredPaymentMethodResource = {
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
  /** The billing address associated with the stored payment method. */
  billingAddress?: Address5;
  /** The brand of the card. */
  brand?: string;
  /** The bank identification number (BIN) of the card. */
  cardBin?: string;
  /** The date when the recurring details were created. */
  createdAt?: Date;
  /** The month the card expires. */
  expiryMonth?: string;
  /** The last two digits of the year the card expires. For example, **22** for the year 2022. */
  expiryYear?: string;
  /**
   * The response code returned by an external system (for example after a provisioning operation).
   */
  externalResponseCode?: string;
  /**
   * The token reference of a linked token in an external system (for example a network token
   * reference).
   */
  externalTokenReference?: string;
  /** The PSP reference of the first payment that created this recurring detail. */
  firstPspReference?: string;
  /** The unique payment method code. */
  holderName?: string;
  /** The IBAN of the bank account. */
  iban?: string;
  /** A unique identifier of this stored payment method. */
  id?: string;
  /** The name of the issuer of token or card. */
  issuerName?: string;
  /** The last four digits of the PAN. */
  lastFour?: string;
  /** Mandate details for the stored payment method. */
  mandate?: TokenMandate2;
  /** The display name of the stored payment method. */
  name?: string;
  /**
   * Returned in the response if you are not tokenizing with Adyen and are using the
   * Merchant-initiated transactions (MIT) framework from Mastercard or Visa.
   *
   * This contains either the Mastercard Trace ID or the Visa Transaction ID.
   */
  networkTxReference?: string;
  /** The name of the bank account holder. */
  ownerName?: string;
  /** The shopper’s email address. */
  shopperEmail?: string;
  /**
   * Your reference to uniquely identify this shopper, for example user ID or account ID. The value
   * is case-sensitive and must be at least three characters. > Your reference must not include
   * personally identifiable information (PII) such as name or email address.
   */
  shopperReference?: string;
  /**
   * Defines a recurring payment type. Allowed values:
   * * `Subscription` – A transaction for a fixed or variable amount, which follows a fixed
   *   schedule.
   * * `CardOnFile` – With a card-on-file (CoF) transaction, card details are stored to enable
   *   one-click or omnichannel journeys, or simply to streamline the checkout process. Any
   *   subscription not following a fixed schedule is also considered a card-on-file transaction.
   * * `UnscheduledCardOnFile` – An unscheduled card-on-file (UCoF) transaction is a transaction
   *   that occurs on a non-fixed schedule and/or have variable amounts. For example, automatic
   *   top-ups when a cardholder's balance drops below a certain amount.
   */
  supportedRecurringProcessingModels?: string[];
  /** The type of payment method. */
  type?: string;
};

export const storedPaymentMethodResourceSchema: Schema<StoredPaymentMethodResource> =
  s.object<StoredPaymentMethodResource>({
    alias: s.optional(s.string()),
    aliasType: s.optional(s.string()),
    billingAddress: s.optional(s.lazy(() => address5Schema)),
    brand: s.optional(s.string()),
    cardBin: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    expiryMonth: s.optional(s.string()),
    expiryYear: s.optional(s.string()),
    externalResponseCode: s.optional(s.string()),
    externalTokenReference: s.optional(s.string()),
    firstPspReference: s.optional(s.string()),
    holderName: s.optional(s.string()),
    iban: s.optional(s.string()),
    id: s.optional(s.string()),
    issuerName: s.optional(s.string()),
    lastFour: s.optional(s.string()),
    mandate: s.optional(s.lazy(() => tokenMandate2Schema)),
    name: s.optional(s.string()),
    networkTxReference: s.optional(s.string()),
    ownerName: s.optional(s.string()),
    shopperEmail: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
    supportedRecurringProcessingModels: s.optional(s.array(s.string())),
    type: s.optional(s.string()),
  });
