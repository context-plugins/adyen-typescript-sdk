import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MerchantAcquirerPair = {
  /** The acquirer ID. */
  acquirerId?: string;
  /** The merchant identification number (MID). */
  merchantId?: string;
};

export const merchantAcquirerPairSchema: Schema<MerchantAcquirerPair> = s.object<MerchantAcquirerPair>({
  acquirerId: s.optional(s.string()),
  merchantId: s.optional(s.string()),
});
