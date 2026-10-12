import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type TopUpAmount = {
  /** The fixed amount with which you want to top up the balance account. */
  fixed?: Amount17;
  /** The target balance for the balance account that the top-up must achieve. */
  target?: Amount17;
};

export const topUpAmountSchema: Schema<TopUpAmount> = s.object<TopUpAmount>({
  fixed: s.optional(s.lazy(() => amount17Schema)),
  target: s.optional(s.lazy(() => amount17Schema)),
});
