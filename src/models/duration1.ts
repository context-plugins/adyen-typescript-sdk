import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { unitSchema, type Unit } from "./unit.js";

export type Duration1 = {
  unit?: Unit;
  value?: number;
};

export const duration1Schema: Schema<Duration1> = s.object<Duration1>({
  unit: s.optional(s.lazy(() => unitSchema)),
  value: s.optional(s.number()),
});
