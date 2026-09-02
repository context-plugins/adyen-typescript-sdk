import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { planSchema, type Plan } from "./plan.js";

export type Installments = {
  extra?: number;
  plan?: Plan;
  value: number;
};

export const installmentsSchema: Schema<Installments> = s.object<Installments>({
  extra: s.optional(s.number()),
  plan: s.optional(s.lazy(() => planSchema)),
  value: s.number(),
});
