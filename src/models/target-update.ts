import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type461Schema, type Type461 } from "./type461.js";

export type TargetUpdate = {
  id?: string;
  type?: Type461;
};

export const targetUpdateSchema: Schema<TargetUpdate> = s.object<TargetUpdate>({
  id: s.optional(s.string()),
  type: s.optional(s.lazy(() => type461Schema)),
});
