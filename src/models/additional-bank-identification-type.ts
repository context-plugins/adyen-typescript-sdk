import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
export const AdditionalBankIdentificationType = {
  AuBsbCode: "auBsbCode",
  CaRoutingNumber: "caRoutingNumber",
  GbSortCode: "gbSortCode",
  UsRoutingNumber: "usRoutingNumber",
} as const;
export type AdditionalBankIdentificationType =
  | (typeof AdditionalBankIdentificationType)[keyof typeof AdditionalBankIdentificationType]
  | (string & {});

export const additionalBankIdentificationTypeSchema: EnumSchema<AdditionalBankIdentificationType> =
  s.enumOf<AdditionalBankIdentificationType>(AdditionalBankIdentificationType);
