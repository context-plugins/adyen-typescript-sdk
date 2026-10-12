import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type OfflineProcessing = {
  /**
   * The maximum offline transaction amount for chip cards, in the processing currency and specified
   * in [minor units](https://docs.adyen.com/development-resources/currency-codes).
   */
  chipFloorLimit?: number;
};

export const offlineProcessingSchema: Schema<OfflineProcessing> = s.object<OfflineProcessing>({
  chipFloorLimit: s.optional(s.int()),
});
