import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalBankIdentificationTypeSchema,
  type AdditionalBankIdentificationType,
} from "./additional-bank-identification-type.js";

export type AdditionalBankIdentification2 = {
  /** The value of the additional bank identification. */
  code?: string;
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
  type?: AdditionalBankIdentificationType;
};

export const additionalBankIdentification2Schema: Schema<AdditionalBankIdentification2> =
  s.object<AdditionalBankIdentification2>({
    code: s.optional(s.string()),
    type: s.optional(s.lazy(() => additionalBankIdentificationTypeSchema)),
  });
