import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** List of allowed origins. */
export type LinksElement1 = {
  href?: string;
};

export const linksElement1Schema: Schema<LinksElement1> = s.object<LinksElement1>({
  href: s.optional(s.string()),
});
