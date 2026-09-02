import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement9 = {
  href?: string;
};

export const linksElement9Schema: Schema<LinksElement9> = s.object<LinksElement9>({
  href: s.optional(s.string()),
});
