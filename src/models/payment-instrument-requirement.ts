import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentInstrumentTypeSchema, type PaymentInstrumentType } from "./payment-instrument-type.js";

export type PaymentInstrumentRequirement = {
  /**
   * Specifies the requirements for the payment instrument that need to be included in the request
   * for a particular route.
   */
  description?: string;
  /**
   * The two-character [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2)
   * country code where the payment instrument is issued. For example, **NL** or **US**.
   */
  issuingCountryCode?: string;
  /** The two-character ISO-3166-1 alpha-2 country code list for payment instruments. */
  issuingCountryCodes?: string[];
  /** Specifies if the requirement only applies to transfers to another balance platform. */
  onlyForCrossBalancePlatform?: boolean;
  /** The type of the payment instrument. For example, "BankAccount" or "Card". */
  paymentInstrumentType?: PaymentInstrumentType;
  /** **paymentInstrumentRequirement** @default "paymentInstrumentRequirement" */
  type?: "paymentInstrumentRequirement";
};

export const paymentInstrumentRequirementSchema: Schema<PaymentInstrumentRequirement> =
  s.object<PaymentInstrumentRequirement>({
    description: s.optional(s.string()),
    issuingCountryCode: s.optional(s.string()),
    issuingCountryCodes: s.optional(s.array(s.string())),
    onlyForCrossBalancePlatform: s.optional(s.boolean()),
    paymentInstrumentType: s.optional(s.lazy(() => paymentInstrumentTypeSchema)),
    type: s.defaulted(s.literal("paymentInstrumentRequirement"), "paymentInstrumentRequirement"),
  });
