import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Dcc1 = {
  enableDcc?: boolean;
};

export const dcc1Schema: Schema<Dcc1> = s.object<Dcc1>({
  enableDcc: s.optional(s.boolean()),
});
