import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Url = {
  /** Indicates if the message sent to this URL should be encrypted. */
  encrypted?: boolean;
  /** The password for authentication of the notifications. */
  password?: string;
  /** The URL in the format: http(s)://domain.com. */
  url?: string;
  /** The username for authentication of the notifications. */
  username?: string;
};

export const urlSchema: Schema<Url> = s.object<Url>({
  encrypted: s.optional(s.boolean()),
  password: s.optional(s.string()),
  url: s.optional(s.string()),
  username: s.optional(s.string()),
});
