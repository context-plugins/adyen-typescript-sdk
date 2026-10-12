import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

/**
 * The currency and value to be added to the balance account, specified in minor units. This can be
 * a fixed amount or a target amount.
 */
export type TopUpAmount1 = {
  /** The fixed amount with which you want to top up the balance account. */
  fixed?: Amount17;
  /** The target balance for the balance account that the top-up must achieve. */
  target?: Amount17;
};

export const topUpAmount1Schema: Schema<TopUpAmount1> = s.object<TopUpAmount1>({
  fixed: s.optional(s.lazy(() => amount17Schema)),
  target: s.optional(s.lazy(() => amount17Schema)),
});
