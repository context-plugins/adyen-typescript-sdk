import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Deducts the transaction fee due to Adyen under [blended
 * rates](https://www.adyen.com/knowledge-hub/guides/payments-training-guide/get-the-best-from-your-card-processing)
 * from the specified balance account.
 *
 * Possible values: **deductFromLiableAccount**, **deductFromOneBalanceAccount**.
 */
export const AdyenCommission = {
  DeductFromLiableAccount: "deductFromLiableAccount",
  DeductFromOneBalanceAccount: "deductFromOneBalanceAccount",
} as const;
export type AdyenCommission = (typeof AdyenCommission)[keyof typeof AdyenCommission] | (string & {});

export const adyenCommissionSchema: EnumSchema<AdyenCommission> = s.enumOf<AdyenCommission>(AdyenCommission);
