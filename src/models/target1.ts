import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type461Schema, type Type461 } from "./type461.js";

export type Target1 = {
  id: string;
  type: Type461;
};

export const target1Schema: Schema<Target1> = s.object<Target1>({
  id: s.string(),
  type: type461Schema,
});
