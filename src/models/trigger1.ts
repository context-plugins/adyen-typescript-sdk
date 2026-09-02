import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { schedule21Schema, type Schedule21 } from "./schedule21.js";

export type Trigger1 = {
  schedule?: Schedule21;
  threshold: Amount17;
};

export const trigger1Schema: Schema<Trigger1> = s.object<Trigger1>({
  schedule: s.optional(s.lazy(() => schedule21Schema)),
  threshold: amount17Schema,
});
