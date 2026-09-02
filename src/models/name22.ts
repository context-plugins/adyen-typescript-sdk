import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Name22 = {
  firstName?: string;
  lastName?: string;
};

export const name22Schema: Schema<Name22> = s.object<Name22>({
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
});
