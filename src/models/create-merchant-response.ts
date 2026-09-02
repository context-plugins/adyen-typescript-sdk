import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateMerchantResponse = {
  businessLineId?: string;
  companyId?: string;
  description?: string;
  id?: string;
  legalEntityId?: string;
  pricingPlan?: string;
  reference?: string;
};

export const createMerchantResponseSchema: Schema<CreateMerchantResponse> = s.object<CreateMerchantResponse>({
  businessLineId: s.optional(s.string()),
  companyId: s.optional(s.string()),
  description: s.optional(s.string()),
  id: s.optional(s.string()),
  legalEntityId: s.optional(s.string()),
  pricingPlan: s.optional(s.string()),
  reference: s.optional(s.string()),
});
