import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { action1Schema, type Action1 } from "./action1.js";
import { codeSchema, type Code } from "./code.js";

export type Status17 = {
  actions?: Action1[];
  code: Code;
};

export const status17Schema: Schema<Status17> = s.object<Status17>({
  actions: s.optional(s.array(s.lazy(() => action1Schema))),
  code: codeSchema,
});
