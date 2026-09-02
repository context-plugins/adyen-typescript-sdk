import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type Notification2 = {
  category?: Category;
  details?: string;
  enabled?: boolean;
  showButton?: boolean;
  title?: string;
};

export const notification2Schema: Schema<Notification2> = s.object<Notification2>({
  category: s.optional(s.lazy(() => categorySchema)),
  details: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  showButton: s.optional(s.boolean()),
  title: s.optional(s.string()),
});
