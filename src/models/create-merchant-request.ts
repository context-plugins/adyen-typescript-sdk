import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateMerchantRequest = {
  businessLineId?: string;
  companyId: string;
  description?: string;
  legalEntityId?: string;
  pricingPlan?: string;
  reference?: string;
  salesChannels?: string[];
};

export const createMerchantRequestSchema: Schema<CreateMerchantRequest> = s.object<CreateMerchantRequest>({
  businessLineId: s.optional(s.string()),
  companyId: s.string(),
  description: s.optional(s.string()),
  legalEntityId: s.optional(s.string()),
  pricingPlan: s.optional(s.string()),
  reference: s.optional(s.string()),
  salesChannels: s.optional(s.array(s.string())),
});
