import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  bankAccountIdentificationTypeSchema,
  type BankAccountIdentificationType,
} from "./bank-account-identification-type.js";

export type BankAccountIdentificationTypeRequirement = {
  /** List of bank account identification types: eg.; [iban , numberAndBic] */
  bankAccountIdentificationTypes?: BankAccountIdentificationType[];
  /**
   * Specifies the bank account details for a particular route per required field in this object
   * depending on the country of the bank account and the currency of the transfer.
   */
  description?: string;
  /**
   * **bankAccountIdentificationTypeRequirement**
   *
   * @default "bankAccountIdentificationTypeRequirement"
   */
  type?: "bankAccountIdentificationTypeRequirement";
};

export const bankAccountIdentificationTypeRequirementSchema: Schema<BankAccountIdentificationTypeRequirement> =
  s.object<BankAccountIdentificationTypeRequirement>({
    bankAccountIdentificationTypes: s.optional(s.array(s.lazy(() => bankAccountIdentificationTypeSchema))),
    description: s.optional(s.string()),
    type: s.defaulted(
      s.literal("bankAccountIdentificationTypeRequirement"),
      "bankAccountIdentificationTypeRequirement",
    ),
  });
