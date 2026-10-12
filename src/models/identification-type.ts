import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The type of the identification.
 *
 * Possible values: **iban**, **routingNumber**, **sortCode**, **bic**.
 */
export const IdentificationType = {
  Bic: "bic",
  Iban: "iban",
  RoutingNumber: "routingNumber",
  SortCode: "sortCode",
} as const;
export type IdentificationType = (typeof IdentificationType)[keyof typeof IdentificationType] | (string & {});

export const identificationTypeSchema: EnumSchema<IdentificationType> =
  s.enumOf<IdentificationType>(IdentificationType);
