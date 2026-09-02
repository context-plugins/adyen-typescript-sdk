import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement4 = {
  href?: string;
};

export const linksElement4Schema: Schema<LinksElement4> = s.object<LinksElement4>({
  href: s.optional(s.string()),
});
