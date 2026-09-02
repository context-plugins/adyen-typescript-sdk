import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type461Schema, type Type461 } from "./type461.js";

export type Target3 = {
  id: string;
  type: Type461;
};

export const target3Schema: Schema<Target3> = s.object<Target3>({
  id: s.string(),
  type: type461Schema,
});
