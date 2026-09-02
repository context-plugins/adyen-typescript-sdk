import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type461Schema, type Type461 } from "./type461.js";

export type Target = {
  id: string;
  type: Type461;
};

export const targetSchema: Schema<Target> = s.object<Target>({
  id: s.string(),
  type: type461Schema,
});
