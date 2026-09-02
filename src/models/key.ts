import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Key = {
  identifier?: string;
  passphrase?: string;
  version?: number;
};

export const keySchema: Schema<Key> = s.object<Key>({
  identifier: s.optional(s.string()),
  passphrase: s.optional(s.string()),
  version: s.optional(s.number()),
});
