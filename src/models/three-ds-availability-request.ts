import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ThreeDsAvailabilityRequest = {
  additionalData?: Record<string, string>;
  brands?: string[];
  cardNumber?: string;
  merchantAccount: string;
  recurringDetailReference?: string;
  shopperReference?: string;
};

export const threeDsAvailabilityRequestSchema: Schema<ThreeDsAvailabilityRequest> =
  s.object<ThreeDsAvailabilityRequest>({
    additionalData: s.optional(s.record(s.string(), s.string())),
    brands: s.optional(s.array(s.string())),
    cardNumber: s.optional(s.string()),
    merchantAccount: s.string(),
    recurringDetailReference: s.optional(s.string()),
    shopperReference: s.optional(s.string()),
  });
