import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantAcquirerPairSchema, type MerchantAcquirerPair } from "./merchant-acquirer-pair.js";

export type MerchantsRestriction = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** List of merchant ID and acquirer ID pairs. */
  value?: MerchantAcquirerPair[];
};

export const merchantsRestrictionSchema: Schema<MerchantsRestriction> = s.object<MerchantsRestriction>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => merchantAcquirerPairSchema))),
});
