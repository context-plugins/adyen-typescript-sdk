import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UltimateParentCompanyBusinessDetails = {
  legalBusinessName?: string;
  registrationNumber?: string;
  stockExchange?: string;
  stockNumber?: string;
  stockTicker?: string;
};

export const ultimateParentCompanyBusinessDetailsSchema: Schema<UltimateParentCompanyBusinessDetails> =
  s.object<UltimateParentCompanyBusinessDetails>({
    legalBusinessName: s.optional(s.string()),
    registrationNumber: s.optional(s.string()),
    stockExchange: s.optional(s.string()),
    stockNumber: s.optional(s.string()),
    stockTicker: s.optional(s.string()),
  });
