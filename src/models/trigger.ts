import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { amount17Schema, type Amount17 } from "./amount17.js";
import { schedule21Schema, type Schedule21 } from "./schedule21.js";

export type Trigger = {
  schedule?: Schedule21;
  threshold: Amount17;
};

export const triggerSchema: Schema<Trigger> = s.object<Trigger>({
  schedule: s.optional(s.lazy(() => schedule21Schema)),
  threshold: amount17Schema,
});
