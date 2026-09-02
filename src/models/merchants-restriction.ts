import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantAcquirerPairSchema, type MerchantAcquirerPair } from "./merchant-acquirer-pair.js";

export type MerchantsRestriction = {
  operation: string;
  value?: MerchantAcquirerPair[];
};

export const merchantsRestrictionSchema: Schema<MerchantsRestriction> = s.object<MerchantsRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => merchantAcquirerPairSchema))),
});
