import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The last page. */
export type LinksElement10 = {
  href?: string;
};

export const linksElement10Schema: Schema<LinksElement10> = s.object<LinksElement10>({
  href: s.optional(s.string()),
});
