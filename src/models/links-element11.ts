import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement11 = {
  href?: string;
};

export const linksElement11Schema: Schema<LinksElement11> = s.object<LinksElement11>({
  href: s.optional(s.string()),
});
