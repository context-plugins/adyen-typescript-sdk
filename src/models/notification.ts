import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";

export type Notification = {
  category?: Category;
  details?: string;
  enabled?: boolean;
  showButton?: boolean;
  title?: string;
};

export const notificationSchema: Schema<Notification> = s.object<Notification>({
  category: s.optional(s.lazy(() => categorySchema)),
  details: s.optional(s.string()),
  enabled: s.optional(s.boolean()),
  showButton: s.optional(s.boolean()),
  title: s.optional(s.string()),
});
