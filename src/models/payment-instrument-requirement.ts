import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { paymentInstrumentTypeSchema, type PaymentInstrumentType } from "./payment-instrument-type.js";

export type PaymentInstrumentRequirement = {
  description?: string;
  issuingCountryCode?: string;
  issuingCountryCodes?: string[];
  onlyForCrossBalancePlatform?: boolean;
  paymentInstrumentType?: PaymentInstrumentType;
  type: "paymentInstrumentRequirement";
};

export const paymentInstrumentRequirementSchema: Schema<PaymentInstrumentRequirement> =
  s.object<PaymentInstrumentRequirement>({
    description: s.optional(s.string()),
    issuingCountryCode: s.optional(s.string()),
    issuingCountryCodes: s.optional(s.array(s.string())),
    onlyForCrossBalancePlatform: s.optional(s.boolean()),
    paymentInstrumentType: s.optional(s.lazy(() => paymentInstrumentTypeSchema)),
    type: s.literal("paymentInstrumentRequirement"),
  });
