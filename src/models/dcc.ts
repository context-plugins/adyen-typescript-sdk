import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Dcc = {
  enableDcc?: boolean;
};

export const dccSchema: Schema<Dcc> = s.object<Dcc>({
  enableDcc: s.optional(s.boolean()),
});
