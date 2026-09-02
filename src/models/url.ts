import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Url = {
  encrypted?: boolean;
  password?: string;
  url?: string;
  username?: string;
};

export const urlSchema: Schema<Url> = s.object<Url>({
  encrypted: s.optional(s.boolean()),
  password: s.optional(s.string()),
  url: s.optional(s.string()),
  username: s.optional(s.string()),
});
