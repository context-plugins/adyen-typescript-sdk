import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type TopUpAmount1 = {
  fixed?: Amount17;
  target?: Amount17;
};

export const topUpAmount1Schema: Schema<TopUpAmount1> = s.object<TopUpAmount1>({
  fixed: s.optional(s.lazy(() => amount17Schema)),
  target: s.optional(s.lazy(() => amount17Schema)),
});
