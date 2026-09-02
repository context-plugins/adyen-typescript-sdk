import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type GrantLimit1 = {
  amount?: Amount17;
};

export const grantLimit1Schema: Schema<GrantLimit1> = s.object<GrantLimit1>({
  amount: s.optional(s.lazy(() => amount17Schema)),
});
