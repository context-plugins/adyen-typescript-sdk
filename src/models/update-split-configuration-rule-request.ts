import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateSplitConfigurationRuleRequest = {
  currency: string;
  fundingSource: string;
  paymentMethod: string;
  shopperInteraction: string;
};

export const updateSplitConfigurationRuleRequestSchema: Schema<UpdateSplitConfigurationRuleRequest> =
  s.object<UpdateSplitConfigurationRuleRequest>({
    currency: s.string(),
    fundingSource: s.string(),
    paymentMethod: s.string(),
    shopperInteraction: s.string(),
  });
