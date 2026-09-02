import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Priority = {
  First: "first",
  Normal: "normal",
  Urgent: "urgent",
} as const;
export type Priority = (typeof Priority)[keyof typeof Priority] | (string & {});

export const prioritySchema: EnumSchema<Priority> = s.enumOf<Priority>(Priority);
