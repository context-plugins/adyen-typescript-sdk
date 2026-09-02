import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { plan1Schema, type Plan1 } from "./plan1.js";

export type InstallmentOption = {
  maxValue?: number;
  plans?: Plan1[];
  preselectedValue?: number;
  values?: number[];
};

export const installmentOptionSchema: Schema<InstallmentOption> = s.object<InstallmentOption>({
  maxValue: s.optional(s.number()),
  plans: s.optional(s.array(s.lazy(() => plan1Schema))),
  preselectedValue: s.optional(s.number()),
  values: s.optional(s.array(s.number())),
});
