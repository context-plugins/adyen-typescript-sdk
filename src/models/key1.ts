import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Key1 = {
  identifier?: string;
  passphrase?: string;
  version?: number;
};

export const key1Schema: Schema<Key1> = s.object<Key1>({
  identifier: s.optional(s.string()),
  passphrase: s.optional(s.string()),
  version: s.optional(s.number()),
});
