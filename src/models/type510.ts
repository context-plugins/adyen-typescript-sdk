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
export const Type510 = {
  AuBsbCode: "auBsbCode",
  CaRoutingNumber: "caRoutingNumber",
  GbSortCode: "gbSortCode",
  UsRoutingNumber: "usRoutingNumber",
} as const;
export type Type510 = (typeof Type510)[keyof typeof Type510] | (string & {});

export const type510Schema: EnumSchema<Type510> = s.enumOf<Type510>(Type510);
