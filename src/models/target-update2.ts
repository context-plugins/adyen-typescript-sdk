import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type461Schema, type Type461 } from "./type461.js";

export type TargetUpdate2 = {
  id?: string;
  type?: Type461;
};

export const targetUpdate2Schema: Schema<TargetUpdate2> = s.object<TargetUpdate2>({
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => type461Schema)),
});
