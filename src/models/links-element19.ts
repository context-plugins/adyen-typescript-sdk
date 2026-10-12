import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Test the webhook setup. */
export type LinksElement19 = {
  href?: string;
};

export const linksElement19Schema: Schema<LinksElement19> = s.object<LinksElement19>({
  href: s.optional(s.string()),
});
