import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

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
