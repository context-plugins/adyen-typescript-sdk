import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Generate an HMAC key. */
export type LinksElement16 = {
  href?: string;
};

export const linksElement16Schema: Schema<LinksElement16> = s.object<LinksElement16>({
  href: s.optional(s.string()),
});
