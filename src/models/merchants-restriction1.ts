import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantAcquirerPairSchema, type MerchantAcquirerPair } from "./merchant-acquirer-pair.js";

export type MerchantsRestriction1 = {
  operation: string;
  value?: MerchantAcquirerPair[];
};

export const merchantsRestriction1Schema: Schema<MerchantsRestriction1> = s.object<MerchantsRestriction1>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => merchantAcquirerPairSchema))),
});
