import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";

export type GrantLimit = {
  /** The amount available on the grant account. */
  amount?: Amount17;
};

export const grantLimitSchema: Schema<GrantLimit> = s.object<GrantLimit>({
  amount: s.optional(s.lazy(() => amount17Schema)),
});
