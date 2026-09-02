import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardRegionSchema, type CardRegion } from "./card-region.js";
import { fundingSource1Schema, type FundingSource1 } from "./funding-source1.js";
import { shopperInteraction11Schema, type ShopperInteraction11 } from "./shopper-interaction11.js";
import {
  splitConfigurationLogic2Schema,
  type SplitConfigurationLogic2,
} from "./split-configuration-logic2.js";

export type SplitConfigurationRule = {
  cardRegion?: CardRegion;
  currency: string;
  fundingSource: FundingSource1;
  paymentMethod: string;
  ruleId?: string;
  shopperInteraction: ShopperInteraction11;
  splitLogic: SplitConfigurationLogic2;
};

export const splitConfigurationRuleSchema: Schema<SplitConfigurationRule> = s.object<SplitConfigurationRule>({
  cardRegion: s.optional(s.lazy(() => cardRegionSchema)),
  currency: s.string(),
  fundingSource: fundingSource1Schema,
  paymentMethod: s.string(),
  ruleId: s.optional(s.string()),
  shopperInteraction: shopperInteraction11Schema,
  splitLogic: splitConfigurationLogic2Schema,
});
