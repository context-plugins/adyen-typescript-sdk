import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UltimateParentCompanyBusinessDetails2 = {
  legalBusinessName?: string;
  registrationNumber?: string;
  stockExchange?: string;
  stockNumber?: string;
  stockTicker?: string;
};

export const ultimateParentCompanyBusinessDetails2Schema: Schema<UltimateParentCompanyBusinessDetails2> =
  s.object<UltimateParentCompanyBusinessDetails2>({
    legalBusinessName: s.optional(s.string()),
    registrationNumber: s.optional(s.string()),
    stockExchange: s.optional(s.string()),
    stockNumber: s.optional(s.string()),
    stockTicker: s.optional(s.string()),
  });
