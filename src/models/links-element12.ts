import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The previous page. Only present if there is a previous page. */
export type LinksElement12 = {
  href?: string;
};

export const linksElement12Schema: Schema<LinksElement12> = s.object<LinksElement12>({
  href: s.optional(s.string()),
});
