import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Settings for EMV [offline payment](https://docs.adyen.com/point-of-sale/offline-payments)
 * features.
 */
export type OfflineProcessing1 = {
  /**
   * The maximum offline transaction amount for chip cards, in the processing currency and specified
   * in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   */
  chipFloorLimit?: number;
};

export const offlineProcessing1Schema: Schema<OfflineProcessing1> = s.object<OfflineProcessing1>({
  chipFloorLimit: s.optional(s.int()),
});
