import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action1Schema, type Action1 } from "./action1.js";
import { codeSchema, type Code } from "./code.js";

export type Status25 = {
  actions?: Action1[];
  code: Code;
};

export const status25Schema: Schema<Status25> = s.object<Status25>({
  actions: s.optional(s.array(s.lazy(() => action1Schema))),
  code: codeSchema,
});
