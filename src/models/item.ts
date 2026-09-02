import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Item = {
  id?: string;
  name?: string;
};

export const itemSchema: Schema<Item> = s.object<Item>({
  id: s.optional(s.string()),
  name: s.optional(s.string()),
});
