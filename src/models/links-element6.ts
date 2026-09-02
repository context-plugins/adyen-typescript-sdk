import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement6 = {
  href?: string;
};

export const linksElement6Schema: Schema<LinksElement6> = s.object<LinksElement6>({
  href: s.optional(s.string()),
});
