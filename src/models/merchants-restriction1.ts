import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { merchantAcquirerPairSchema, type MerchantAcquirerPair } from "./merchant-acquirer-pair.js";

/**
 * List of merchant ID and acquirer ID pairs, and the operation.
 *
 * Supported operations: **anyMatch**, **noneMatch**.
 */
export type MerchantsRestriction1 = {
  /** Defines how the condition must be evaluated. */
  operation: string;
  /** List of merchant ID and acquirer ID pairs. */
  value?: MerchantAcquirerPair[];
};

export const merchantsRestriction1Schema: Schema<MerchantsRestriction1> = s.object<MerchantsRestriction1>({
  operation: s.string(),
  value: s.optional(s.array(s.lazy(() => merchantAcquirerPairSchema))),
});
