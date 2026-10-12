import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * Required if `type` is **business**, **assetSale**, **gamblingWinnings** or **inheritance**.
 *
 * For `type` **business**, provide the annual turn over of the business. For `type` **assetSale**,
 * **gamblingWinnings** or **inheritance**, provide the amount of the funds., The amount of the
 * funds the financier provided., The maximum amount a card holder can withdraw per day.
 */
export type PatchableAmountDto = {
  /**
   * The three-character [ISO currency
   * code](https://docs.adyen.com/development-resources/currency-codes).
   */
  currency?: string;
  /**
   * The amount of the transaction, in [minor
   * units](https://docs.adyen.com/development-resources/currency-codes).
   */
  value?: number;
};

export const patchableAmountDtoSchema: Schema<PatchableAmountDto> = s.object<PatchableAmountDto>({
  currency: s.optional(s.string()),
  value: s.optional(s.int()),
});
