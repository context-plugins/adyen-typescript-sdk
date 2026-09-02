import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LinksElement17 = {
  href?: string;
};

export const linksElement17Schema: Schema<LinksElement17> = s.object<LinksElement17>({
  href: s.optional(s.string()),
});
