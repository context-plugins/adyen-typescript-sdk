import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { reason3Schema, type Reason3 } from "./reason3.js";

export type WebDataExemption1 = {
  reason?: Reason3;
};

export const webDataExemption1Schema: Schema<WebDataExemption1> = s.object<WebDataExemption1>({
  reason: s.optional(s.lazy(() => reason3Schema)),
});
