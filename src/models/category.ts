import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of event notification sent when you select the notification button. */
export const Category = {
  SaleWakeUp: "SaleWakeUp",
  KeyPressed: "KeyPressed",
} as const;
export type Category = (typeof Category)[keyof typeof Category] | (string & {});

export const categorySchema: EnumSchema<Category> = s.enumOf<Category>(Category);
