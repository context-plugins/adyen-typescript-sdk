import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement13 = {
  href?: string;
};

export const linksElement13Schema: Schema<LinksElement13> = s.object<LinksElement13>({
  href: s.optional(s.string()),
});
