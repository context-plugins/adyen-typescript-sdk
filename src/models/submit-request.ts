import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountSchema, type Amount } from "./amount.js";
import { entityType2Schema, type EntityType2 } from "./entity-type2.js";
import { nameSchema, type Name } from "./name.js";
import { recurringSchema, type Recurring } from "./recurring.js";

export type SubmitRequest = {
  /** This field contains additional data, which may be required for a particular request. */
  additionalData?: Record<string, string>;
  /** A container object for the payable amount information of the transaction. */
  amount: Amount;
  /**
   * The date of birth. Format: ISO-8601; example: YYYY-MM-DD
   *
   * For Paysafecard it must be the same as used when registering the Paysafecard account.
   *
   * > This field is mandatory for natural persons. > This field is required to update the existing
   * `dateOfBirth` that is associated with this recurring contract.
   */
  dateOfBirth?: string;
  /**
   * The type of the entity the payout is processed for.
   *
   * Allowed values:
   * * NaturalPerson
   * * Company > This field is required to update the existing `entityType` that is associated with
   *   this recurring contract.
   */
  entityType?: EntityType2;
  /**
   * An integer value that is added to the normal fraud score. The value can be either positive or
   * negative.
   */
  fraudOffset?: number;
  /** The merchant account identifier you want to process the transaction request with. */
  merchantAccount: string;
  /**
   * The shopper's nationality.
   *
   * A valid value is an ISO 2-character country code (e.g. 'NL').
   *
   * > This field is required to update the existing nationality that is associated with this
   * recurring contract.
   */
  nationality?: string;
  /**
   * A container for the type of recurring contract to be retrieved.
   *
   * The `recurring.contract` must be set to "PAYOUT".
   */
  recurring: Recurring;
  /**
   * The merchant reference for this payout. This reference will be used in all communication to the
   * merchant about the status of the payout. Although it is a good idea to make sure it is unique,
   * this is not a requirement.
   */
  reference: string;
  /**
   * This is the `recurringDetailReference` you want to use for this payout.
   *
   * You can use the value LATEST to select the most recently used recurring detail.
   */
  selectedRecurringDetailReference: string;
  /** The shopper's email address. */
  shopperEmail: string;
  /**
   * The shopper's name.
   *
   * In case the `entityType` is `Company`, the `shopperName.lastName` must contain the company
   * name.
   *
   * > This field is required to update the existing `shopperName` associated with a recurring
   * contract.
   */
  shopperName?: Name;
  /** The shopper's reference for the payout transaction. */
  shopperReference: string;
  /**
   * The description of this payout. This description is shown on the bank statement of the shopper
   * (if this is supported by the chosen payment method).
   */
  shopperStatement?: string;
  /** The shopper's social security number. */
  socialSecurityNumber?: string;
};

export const submitRequestSchema: Schema<SubmitRequest> = s.object<SubmitRequest>({
  additionalData: s.optional(s.record(s.string(), s.string())),
  amount: amountSchema,
  dateOfBirth: s.optional(s.dateOnly()),
  entityType: s.optional(s.lazy(() => entityType2Schema)),
  fraudOffset: s.optional(s.int()),
  merchantAccount: s.string(),
  nationality: s.optional(s.string()),
  recurring: recurringSchema,
  reference: s.string(),
  selectedRecurringDetailReference: s.string(),
  shopperEmail: s.string(),
  shopperName: s.optional(s.lazy(() => nameSchema)),
  shopperReference: s.string(),
  shopperStatement: s.optional(s.string()),
  socialSecurityNumber: s.optional(s.string()),
});
