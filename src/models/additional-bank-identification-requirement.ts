import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentificationTypeSchema,
  type AdditionalBankIdentificationType,
} from "./additional-bank-identification-type.js";

export type AdditionalBankIdentificationRequirement = {
  /**
   * The type of additional bank identification, depending on the country.
   *
   * Possible values:
   *
   *  * **auBsbCode**: The 6-digit [Australian Bank State Branch (BSB)
   *    code](https://en.wikipedia.org/wiki/Bank_state_branch), without separators or spaces.
   *  * **caRoutingNumber**: The 9-digit [Canadian routing
   *    number](https://en.wikipedia.org/wiki/Routing_number_(Canada)), in EFT format, without
   *    separators or spaces.
   *  * **gbSortCode**: The 6-digit [UK sort code](https://en.wikipedia.org/wiki/Sort_code), without
   *    separators or spaces
   *  * **usRoutingNumber**: The 9-digit [routing
   *    number](https://en.wikipedia.org/wiki/ABA_routing_transit_number), without separators or
   *    spaces.
   */
  additionalBankIdentificationType?: AdditionalBankIdentificationType;
  /** The description of the additional bank identification requirement. */
  description?: string;
  /**
   * **additionalBankIdentificationRequirement**
   *
   * @default "additionalBankIdentificationRequirement"
   */
  type?: "additionalBankIdentificationRequirement";
};

export const additionalBankIdentificationRequirementSchema: Schema<AdditionalBankIdentificationRequirement> =
  s.object<AdditionalBankIdentificationRequirement>({
    additionalBankIdentificationType: s.optional(s.lazy(() => additionalBankIdentificationTypeSchema)),
    description: s.optional(s.string()),
    type: s.defaulted(
      s.literal("additionalBankIdentificationRequirement"),
      "additionalBankIdentificationRequirement",
    ),
  });
