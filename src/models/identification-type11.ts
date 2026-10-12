import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Type of account identification. In a request message, it informs the POI System the type of the
 * account or card identification, when provided by the Sale Terminal. (e.g. because the card
 * information is a barcode read by the Cashier on a scanner device). In a response message, it
 * informs the Sale System the type of the account or card identification. Possible values:
 * * **AccountNumber**
 * * **BarCode**
 * * **ISOTrack2**
 * * **PAN**
 * * **PhoneNumber**
 */
export const IdentificationType11 = {
  Pan: "PAN",
  IsoTrack2: "ISOTrack2",
  BarCode: "BarCode",
  AccountNumber: "AccountNumber",
  PhoneNumber: "PhoneNumber",
} as const;
export type IdentificationType11 =
  | (typeof IdentificationType11)[keyof typeof IdentificationType11]
  | (string & {});

export const identificationType11Schema: EnumSchema<IdentificationType11> =
  s.enumOf<IdentificationType11>(IdentificationType11);
