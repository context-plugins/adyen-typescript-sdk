import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amountAdjustmentTypeSchema, type AmountAdjustmentType } from "./amount-adjustment-type.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type AmountAdjustment = {
  /** The adjustment amount. */
  amount?: Amount17;
  /**
   * The type of markup that is applied to an authorised payment.
   *
   * Possible values: **exchange**, **forexMarkup**, **authHoldReserve**, **atmMarkup**.
   */
  amountAdjustmentType?: AmountAdjustmentType;
  /** The basepoints associated with the applied markup. */
  basepoints?: number;
};

export const amountAdjustmentSchema: Schema<AmountAdjustment> = s.object<AmountAdjustment>({
  amount: s.optional(s.lazy(() => amount17Schema)),
  amountAdjustmentType: s.optional(s.lazy(() => amountAdjustmentTypeSchema)),
  basepoints: s.optional(s.int()),
});
