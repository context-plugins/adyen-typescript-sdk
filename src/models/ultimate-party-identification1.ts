import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { address12Schema, type Address12 } from "./address12.js";
import { fundingInstrument2Schema, type FundingInstrument2 } from "./funding-instrument2.js";
import { Type112, type112Schema } from "./type112.js";

/** The ultimate sender of the funds of the transfer (ultimate debtor). */
export type UltimatePartyIdentification1 = {
  /** The address of the bank account or card owner. */
  address?: Address12;
  /**
   * The date of birth of the individual in [ISO-8601](https://www.w3.org/TR/NOTE-datetime) format.
   * For example, **YYYY-MM-DD**.
   *
   * Allowed only when `type` is **individual**.
   */
  dateOfBirth?: string;
  /** The email address of the organization or individual. Maximum length: 254 characters. */
  email?: string;
  /**
   * The first name of the individual.
   *
   * Supported characters: [a-z] [A-Z] - . / — and space.
   *
   * This parameter is:
   * - Allowed only when `type` is **individual**.
   * - Required when `category` is **card**.
   */
  firstName?: string;
  /**
   * The full name of the entity that owns the bank account or card.
   *
   * Supported characters: [a-z] [A-Z] [0-9] , . ; : - — / \ + & ! ? \@ ( ) " ' and space.
   *
   * Required when `category` is **bank**.
   */
  fullName?: string;
  /** Details of the card or token used to fund the pay-in transaction. */
  fundingInstrument?: FundingInstrument2;
  /**
   * The last name of the individual.
   *
   * Supported characters: [a-z] [A-Z] - . / — and space.
   *
   * This parameter is:
   * - Allowed only when `type` is **individual**.
   * - Required when `category` is **card**.
   */
  lastName?: string;
  /**
   * A unique reference to identify the party or counterparty involved in the transfer. For example,
   * your client's unique wallet or payee ID.
   *
   * Required when you include `cardIdentification.storedPaymentMethodId`.
   */
  reference?: string;
  /**
   * The type of entity that owns the bank account or card.
   *
   * Possible values: **individual**, **organization**, or **unknown**.
   *
   * Required when `category` is **card**. In this case, the value must be **individual**.
   *
   * @default Type112.Unknown
   */
  type?: Type112;
  /** The URL of the organization or individual. Maximum length: 255 characters. */
  url?: string;
};

export const ultimatePartyIdentification1Schema: Schema<UltimatePartyIdentification1> =
  s.object<UltimatePartyIdentification1>({
    address: s.optional(s.lazy(() => address12Schema)),
    dateOfBirth: s.optional(s.dateOnly()),
    email: s.optional(s.string()),
    firstName: s.optional(s.string()),
    fullName: s.optional(s.string()),
    fundingInstrument: s.optional(s.lazy(() => fundingInstrument2Schema)),
    lastName: s.optional(s.string()),
    reference: s.optional(s.string()),
    type: s.defaulted(type112Schema, Type112.Unknown),
    url: s.optional(s.string()),
  });
