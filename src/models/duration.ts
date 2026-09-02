import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type Duration = {
  unit?: Unit;
  value?: number;
};

export const durationSchema: Schema<Duration> = s.object<Duration>({
  unit: s.optional(s.lazy(() => unitSchema)),
  value: s.optional(s.number()),
});
